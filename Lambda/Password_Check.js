console.log("Starting Function");

const AWS = require('aws-sdk'); //AWS
//För Dynamodb
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
var tillbakadata = [];  // namn, plats, ägare, nicenamn på alla saker

exports.handler = function(e, ctx, callback)
{
  //Scannar hela listan, tar myvcket minne och tid
let scanningParameters = {
  TableName: 'Users',
  Limit: 100
}

function a(item) {
    tillbakadata.push({username: item.username, password: item.password, id: item.id });
}


if (e.body) {
    // console.log(e)
    const body = JSON.parse(e.body)
    // const body = e.body
    // console.log(body.user)
    docClient.scan(scanningParameters, function(err, data) {
        if (err) {
            callback(err,null);
        }
        else {
            
            // console.log(data.Items)
            // console.log(data.Items.length)
            
            // console.log("hej!", e.user)
            
            for(var i = 0; i < data.Items.length; i++){
                // console.log(i)
                // console.log(body)
                if (data.Items[i].username.toUpperCase() == body.user.toUpperCase() && data.Items[i].password == body.pass){
                    console.log("Rätt user och pass!")
                    
                    
                    callback(null, {
                        statusCode: 200, // Bad Request
                        headers: {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                        },
                        body: JSON.stringify({
                            success : true,
                            id : data.Items[i].id
                    })
                });
                return;

                }
                    

                    
                }
                    callback(null, {
                        statusCode: 201, // Bad Request
                        headers: {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                        },
                        body: JSON.stringify({
                            success : false,
                            data: "No such user and password!"
                            // debug : body.user,
                            // dubug : body.pass
                        })
                });
            
            // data.Items.forEach(a);
            
            // callback(null, {
            //         statusCode: 200, // Bad Request
            //         headers: {
            //             'Content-Type': 'application/json',
            //             "Access-Control-Allow-Origin": "*" // Required for CORS support to work
            //         },
            //         body: JSON.stringify({
            //             data: tillbakadata

            //         })
            //     });
    
        
    }});
}  
 }