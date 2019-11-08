const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

function checkid(scanningParameters, callback, body, scanningParameters2, res,){
    return new Promise((resolve) => {
    
    docClient.scan(scanningParameters, function(err, data) {
    if (err) {
        callback(err,null);
    }
    else {
        
        for(var i = 0; i < data.Items.length; i++){ // går igenom alla items t.ex martins konto ,linus konto osv
            // console.log(i)
            // console.log(data.Items[i])
            if (data.Items[i].id == body.id && data.Items[i].username == body.user){ // om id stämmer överens med den den hittade i databasen
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
                            if (data1.Items[i].TheOwner.toLowerCase() == currentuser.toLowerCase()){
                                console.log("Updating the item...");
                                
                                console.log(data1.Items[i].TheOwner.toLowerCase(), "=", currentuser.toLowerCase(), res)
                    
                                    
                                return true;
                                    
                                }
                                
                                    
                                    
                                }
                            
                                
                            }
                        
                        
                    
                });
            }}
                

        
        

    
}});
})
}

async function update(params, callback, e, scanningParameters, callback, body, scanningParameters2, res){
    let check = checkid(scanningParameters, callback, body, scanningParameters2, res,)
    
    if (check){
    
        docClient.update(params, function (err, data) {
        if (err) {
            return false
            const response = {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                },
                body: JSON.stringify('Gick inte att uppdatera IoT-enheten, försök igen eller titta på datan du skickar!'),
            };
            callback(err, response);
        } else {
            return true
            const response = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                },
                statusCode: 200,
                body: JSON.stringify('Iot-enheten ' + e.queryStringParameters.Name + ' är uppdaterad!'),
            };
            callback(null, response);
        }

    });
}
}




exports.handler = async function (e, ctx, callback) {

    const body = JSON.parse(e.body); //Avaktivera Jsonparse om du testar i lambda
    
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
        if (!body.hasOwnProperty("id") | !body.hasOwnProperty("user")) {
        callback(null, {
            statusCode: 400, // Bad Request
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*" // Required for CORS support to work
            },
            body: JSON.stringify({
                message: "Need user and id in body."
            })
        });
        return false;
    }
    




    console.log(e);

    var res = JSON.parse(JSON.stringify(e.queryStringParameters.Name, function(a, b) {
        return typeof b === "string" ? b.toLowerCase() : b
      }));

    var params = {

        TableName: "TempData",

        Key: { //Lägger in nyckelvärdena 

            "Name": res

        },

        //Här nedan har vi UpdateExpression, där säger vi vilka attribut i objektet som ska länkas till vilka bokstäver. 
        UpdateExpression: "set   #t = list_append(#t, :y), #h = list_append(#h, :i), #u = list_append(#u, :o), LastUpdate=:u, CurrentTemp= :t,  CurrentHum= :h",
        ExpressionAttributeNames: {         //Dessa attribut är de som kommer att ändras. 
            "#t": "Temp",
            "#u": "UpdatedAt",
            "#h": "Hum",
        },
        ExpressionAttributeValues: {         //Dessa värden är de som kommer att ändras/läggas till. 
            ":y": [body.temp], //[] runt värdet gör det till en lista, detta behövs då list_append tar bara emot listor och sammanfogar dem.
            ":i": [body.hum],
            ":o": [new Date().toUTCString()],
            ":t": body.temp,
            ":h": body.hum,
            ":u": new Date().toUTCString()
        },
        ReturnValues: "UPDATED_NEW" //Man skickar ett returnvalue för att den ska veta att den ska uppdateras. 

    };
        let scanningParameters = {
      TableName: 'Users',
      Limit: 100
    }
    
    let scanningParameters2 = {
      TableName: 'TempData',
      Limit: 500
    }


    console.log("Updating the item...");

    var s = await update(params, e, callback, scanningParameters, callback, body, scanningParameters2, res)

        if (s){
      
    callback(null, {
        statusCode: 400, // Bad Request
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        },
        body: JSON.stringify({
            success : false,
            data: "No such Id",
            debug : body.id
            })
    });

    } else {
         callback(null, {
        statusCode: 200, // Bad Request
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        },
        body: JSON.stringify({
            success : true,
            data: "success!",
            })
    });
    }
    
}