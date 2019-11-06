const AWS = require('aws-sdk'); //AWS
//För Dynamodb
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(e, ctx, callback)
{
  //Scannar hela listan, tar myvcket minne och tid
let scanningParameters = {
  TableName: 'Users',
  Limit: 100
}


if (e.body) {
    // console.log(e)
    const body = JSON.parse(e.body)
    // console.log(body.user)
    
    var res = JSON.parse(JSON.stringify(body.user, function(a, b) {
        return typeof b === "string" ? b.toLowerCase() : b
      }));
      
    docClient.scan(scanningParameters, function(err, data) {
        if (err) {
            callback(err,null);
        }
        else {
            
            // console.log(data.Items)
            // console.log(data.Items.length)
            
            console.log("hej!", res)
            
            for(var i = 0; i < data.Items.length; i++){
                // console.log(data.Items[i].username)
                // console.log(data.Items[i].id)
                
                if (data.Items[i].username == res && data.Items[i].id == body.id){
                    console.log("tar bort", res)
            
                var params = {
            
                    TableName: "Users",
            
                    Key: { //Lägger in nyckelvärdena som ska tas bort
            
                        "username": res
            
                    },
                };
            
                docClient.delete(params, function(err, data) {
                    if (err) {
                        console.log(err)
                       callback(null, {
                        statusCode: 400, // Bad Request
                        headers: {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                        },
                        body: JSON.stringify({
                            success : false,
                            message : "Något gick snätt!"

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
                            message : res + " är borttaget för alltid"

                    })
                });
                    }
                });
                    
                }
            }
            
            
            
    
        
    }});
}  
 }