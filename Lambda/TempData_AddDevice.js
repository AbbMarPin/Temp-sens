
const AWS = require('aws-sdk');
const docCLient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
exports.handler = function index(e, ctx, callback) {
    
       if(!e.queryStringParameters.hasOwnProperty("Name") | !e.queryStringParameters.hasOwnProperty("theowner")) {
        callback(null, {
            statusCode: 400, // Bad Request
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: "No 'name' or 'theowner' query string provided. Examine your IoT device for its unique name."
            })
        });
        return false;
    }
    
    let createdtime= new Date().toUTCString();

    var res = JSON.parse(JSON.stringify(e.queryStringParameters.Name, function(a, b) {
        return typeof b === "string" ? b.toLowerCase() : b
      }));

    var params = {
        Item: { Name: res, Created: createdtime, Temp: [],  Hum: [], UpdatedAt: [], CurrentTemp: 0,  CurrentHum: 0, LastUpdate: createdtime, UpdateFreq: 60, Place: "Unknown", TheOwner:"None", NiceName:"None"  },
        TableName: 'TempData'
    };
    docCLient.put(params, function(err, data) {
        if (err) {
                const response = {
        statusCode: 400,
        body: JSON.stringify('Gick inte att lägga till IoT-enheten, försök igen eller titta på datan du skickar!'),
    };
            callback(err, response);
        } else {
              const response = {
        statusCode: 200,
        body: JSON.stringify('Ny Iot-enhet tillagd! Med namnet '+e.queryStringParameters.Name),
    };
            callback(null, response);
        }
    });
}