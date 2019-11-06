const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});
exports.handler = function index(e, ctx, callback) {

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
    
        if (e.body) {
        console.log(e.body)
        const body = JSON.parse(e.body); //Avaktivera Jsonparse om du testar i lambda


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
        UpdateExpression: "set  NiceName=:u, Place= :t,  TheOwner= :h",
        ExpressionAttributeValues: {         //Dessa värden är de som kommer att ändras/läggas till. 
            ":t": body.place,
            ":h": body.owner,
            ":u": body.nicename
        },
        ReturnValues: "UPDATED_NEW" //Man skickar ett returnvalue för att den ska veta att den ska uppdateras. 

    };

    console.log("Updating the item...");

    docClient.update(params, function (err, data) {
        if (err) {
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