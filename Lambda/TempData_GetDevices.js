console.log("Starting Function");

const AWS = require('aws-sdk'); //AWS
//För Dynamodb
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
var tillbakadata = [];  // namn, plats, ägare, nicenamn på alla saker

function a(item) {
    tillbakadata.push({name: item.Name, nicename: item.NiceName, place: item.Place, theowner: item.TheOwner});
}

exports.handler = function(e, ctx, callback)
{
  //Scannar hela listan, tar myvcket minne och tid
let scanningParameters = {
  TableName: 'TempData',
  Limit: 100
}
    docClient.scan(scanningParameters, function(err, data) {
        if (err) {
            callback(err,null);
        }
        else {
            
            //console.log(data.Items)
            
            data.Items.forEach(a);
            
            callback(null, {
                    statusCode: 200, // Bad Request
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
                    },
                    body: JSON.stringify({
                        tillbakadata

                    })
                });
    
        
    }});
    
 }