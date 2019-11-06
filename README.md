# Termometer_example

Temperature and humidity read with an IOT-device. The data is automatically sent to a database and then presented on a website. Database and API-gateway are hosted with AWS. The website is deisgned and built in VUE. The data is gathered with an ESP8266. 

## Structure

### AWS (Backend)

#### These AWS Lambda functions were used during the project: 

##### Passwod_Add:

´´´
const AWS = require('aws-sdk'); //AWS
const crypto = require('crypto');
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
    tillbakadata.push({username: item.username});
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
            
            // console.log("hej!", e.user)
            
            for(var i = 0; i < data.Items.length; i++){
                // console.log(i)
                // console.log(data.Items[i])
                if (data.Items[i].username == res){
                    console.log("Finns Redan!")
                    callback(null, {
                        statusCode: 201, // Bad Request
                        headers: {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                        },
                        body: JSON.stringify({
                            success : false,
                            message : "Användarnamnet finns redan!"

                    })
                });
                    
                }
            }
            
            const  hash = (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
            
            
            
            var params = {
            Item: { username: res, id: hash, password: body.pass},
            TableName: 'Users'
            };
            
                docClient.put(params, function(err, data) {
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
                            message : res + " är registrerad!"

                    })
                });
                    }
                });
            
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
´´´

##### Password_Check:

##### Password_Remove:

##### TempData_AddDevice:

##### TempData_ClearDeviceData:

##### TempData_DeleteDevice:

##### TempData_GetDevice.js:

##### TempData_GetDeviceData.js:

##### TempData_GetDevices.js:

##### TempData_GetEverything.js:

##### TempData_UpdateDevice.js:

##### TempData_UpdateDeviceData.js:

##### TempData_UpdateDeviceUpdateInterval.js:

An overview of the API-gateway: ..........

DynamoDB: ............

### Vue (Frontend)

The frontend is built with VUE, VUEX, axios and Vuetify.

### ESP8266

This code was used to program the micro controller: ........
