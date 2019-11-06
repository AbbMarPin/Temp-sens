const AWS = require('aws-sdk'); //AWS
//För Dynamodb
const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});


exports.handler = function (e, ctx, callback) {


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
    } else {

        var res = JSON.parse(JSON.stringify(e.queryStringParameters.Name, function(a, b) {
            return typeof b === "string" ? b.toLowerCase() : b
          }));
          
        

        var params = {
            Key: {
                "Name": res
            },
            TableName: 'TempData'
        };

        docClient.get(params, function (err, data) {
            if (err) {
                callback(err, null);
            } else {
                if (data.hasOwnProperty("Item")) {
                    callback(null, {
                        statusCode: 200, // Bad Request
                        headers: {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                        },
                        body: JSON.stringify({
                            message: "Enheten finns reggad.",
                            isRegistered: true,
                            UpdateFreq: data.Item.UpdateFreq

                        })
                    });
                } else {
                    callback(null, {
                        statusCode: 404, // Bad Request
                        headers: {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                        },
                        body: JSON.stringify({
                            message: "Enheten finns inte reggad",
                            isRegistered: false
                        })
                    });
                }


            }

        });


    }


}