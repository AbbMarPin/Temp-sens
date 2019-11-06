const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});



function checkid(e, scanningParameters, scanningParameters2, callback){
    return new Promise((resolve) => {
        
    if (e.body) {
        // console.log(e)
        const body = JSON.parse(e.body)
    
        docClient.scan(scanningParameters, function(err, data) {
    if (err) {
        callback(err,null);
    }
    else {
        
        for(var i = 0; i < data.Items.length; i++){
            // console.log(i)
            // console.log(data.Items[i])
            if (data.Items[i].id == body.id){
                let currentuser = data.Items[i].username 
                console.log("Rätt ID! Username:", currentuser)
                
                docClient.scan(scanningParameters2, function(err, data1) {
                    if (err) {
                        callback(err,null);
                    }
                    else {
                        // console.log(data1.Items)
                        for(var i = 0; i < data1.Items.length; i++){
                            // console.log(data1.Items[i].TheOwner)
                            if (data1.Items[i].TheOwner == currentuser){
                                console.log("Got a match! Removeing", e.queryStringParameters.Name)
                                return true;
                            }
                        }
                        
                    }
                });
                

                
            } else {
                callback(null, {
                    statusCode: 400, // Bad Request
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                    },
                    body: JSON.stringify({
                        success : false,
                        data: "No such Id"

                })
            });
            }
            return;
        }
        

    
}});
    } else {
                callback(null, {
                    statusCode: 400, // Bad Request
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                    },
                    body: JSON.stringify({
                        success : false,
                        data: "No body submitted"

                })
            });
    }
    
    
    return false;
 })
}

async function deleteitem(params, callback, e, scanningParameters, scanningParameters2){ 
    let check = await checkid(e, scanningParameters, scanningParameters2, callback);
    
    console.log(check)
    
    if (check){
        
    // return check;

    console.log("Deleting the item...");

    docClient.delete(params, function (err, data) {
        if (err) {
            // const response = {
            //     statusCode: 400,
            //     headers: {
            //         'Content-Type': 'application/json',
            //         "Access-Control-Allow-Origin": "*" // Required for CORS support to work
            //     },
            //     body: JSON.stringify('Gick inte att ta bort IoT-enheten, försök igen eller titta på namnet du skickar!'),
            // };
            // callback(err, response);
             return false;
        } else {
            // const response = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         "Access-Control-Allow-Origin": "*" // Required for CORS support to work
            //     },
            //     statusCode: 200,
            //     body: JSON.stringify('Iot-enheten ' + e.queryStringParameters.Name + ' är borta för alltid!'),
            // };
            // callback(null, response);
             return true;
        }

    });
    } else {
        return false;
        // callback(null, {
        //     statusCode: 400, // Bad Request
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        //     },
        //     body: JSON.stringify({
        //         message: "no such user."
        //     })
        // });
    }
}


exports.handler = async function(e, ctx, callback) {

    if (!e.queryStringParameters.hasOwnProperty("Name")) {
        callback(null, {
            statusCode: 400, // Bad Request
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*" // Required for CORS support to work
            },
            body: JSON.stringify({
                message: "No 'Name' query string provided. Examine your IoT device for its unique Name."
            })
        });
        return false;
    }

    console.log(e);

    var res = JSON.parse(JSON.stringify(e.queryStringParameters.Name, function(a, b) {
        return typeof b === "string" ? b.toLowerCase() : b
      }));
      
        //Scannar hela listan, tar myvcket minne och tid
        let scanningParameters = {
          TableName: 'Users',
          Limit: 100
        }
        
        let scanningParameters2 = {
          TableName: 'TempData',
          Limit: 500
        }
        

    var params = {

        TableName: "TempData",

        Key: { //Lägger in nyckelvärdena som ska tas bort

            "Name": res

        },
    };
    console.log("1")
    
    
    
    let success = await deleteitem(params, callback, e, scanningParameters, scanningParameters2);
    
    console.log(success)
        
    
    
}