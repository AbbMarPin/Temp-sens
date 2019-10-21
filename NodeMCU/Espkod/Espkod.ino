#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <DNSServer.h>            //Local DNS Server used for redirecting all requests to the configuration portal
#include <ESP8266WebServer.h>     //Local WebServer used to serve the configuration portal
#include <WiFiManager.h>          //https://github.com/tzapu/WiFiManager WiFi Configuration Magic    
#include <AM2320.h>
#include <Wire.h>


AM2320 sensor;

int humidity =0;
int temperature = 0;

// Host URL for the API, paste your AWS URL
const String host = "y5litcpqqk.execute-api.us-east-1.amazonaws.com";

// API Stage to use, paste your stage name here
const String stage = "test1";

const String name = "Name=Harelys_Mätare"; //Name of unit
// Warning: This fingerprint expires December 14th 2019.
// To update it, view the SSL certificate in your browser:
//  1. Go to the host URL, se example belwo
//    "https://agafh7et1a.execute-api.us-east-1.amazonaws.com/"
//  2. Click the lock icon near the URL field
//  3. View the certificate
//  4. Copy the SHA-1 Fingerprint value to this string
//Alt, you can also use this site, https://www.grc.com/fingerprints.htm
const char *fingerprint = "72:D4:00:92:77:37:50:C9:9B:A1:38:FA:21:8A:9B:FD:BA:CF:CD:49";

// HTTP response object
struct Response
{
  // HTTP status code
  int statusCode = -1;
  // Response message
  String payload = "";
};

// HTTPS client
WiFiClientSecure client;

// Important values from database
int updateInterval = 10000;

// Prints the steps to register a device
void printRegisterGuide()
{
  //Här kan man ha instruktioner om hur man ska göra för att kunna använda iot-enheten
  Serial.println(" 1. Gå in på min hemsida (https...)");
  // Serial.println(" 2. );
  // Serial.print(" 3. ");
  Serial.println(" 4. Registrera den, och starta sedan om denna enhet");
}

void MeasureData(){

/*
if (isnan(dht.getHumidity())) {
    Serial.println(F("Error reading temperature!"));
  }
  else
  {
     humidity = dht.getHumidity();
      Serial.print("Humidity: ");
      Serial.print(humidity, 1);
    Serial.println(F("%"));
  Serial.print("\t\t");
  }
  
  if (isnan(dht.getTemperature())) {
    Serial.println(F("Error reading temperature!"));
  }
  else
  {
      temperature = dht.getTemperature();
      Serial.print("Temperature: ");
  Serial.print(temperature, 1);
    Serial.println(F("°C"));
  Serial.print("\t\t");
  }
*/

  // sensor.measure() returns boolean value
  // - true indicates measurement is completed and success
  // - false indicates that either sensor is not ready or crc validation failed
  //   use getErrorCode() to check for cause of error.
  if (sensor.measure()) {
    humidity = sensor.getHumidity();

    //  Serial.print(" Humidity: "); // Verbose
    //Serial.print(humidity, 1);
    //Serial.println(F("%"));
    
    temperature = sensor.getTemperature();
    
    //Serial.print("Temperature: "); // Verbose
    //Serial.print(temperature, 1);
    //Serial.println(F("°C"));
    
  }
  else {  // error has occured
    int errorCode = sensor.getErrorCode();
    switch (errorCode) {
      case 1: Serial.println("ERR: Sensor is offline, Waiting 5 seconds"); delay(5000); break;
      case 2: Serial.println("ERR: CRC validation failed."); break;
    }
   }
  
}


// Makes an HTTP request
// type: Request type (GET, PUT, POST, etc.)
// uri: Subdirectory
// query: Query string
// payload: Payload/Message in JSON format (Not for GET requests)
// Returns a Response object (see struct above)
Response makeRequest(String type, String uri, String query, String payload)
{
  // Connect to API host
  if(client.connect(host, 443))
  {
      Serial.println(type+"  "+host+ "/" + stage + uri + "?" + query);
      Serial.println(payload);
    // // Writing HTTP request
    client.println(type + " /" + stage + uri + "?" + query + " HTTP/1.1");
    client.println("Host: " + host);
    client.println("Connection: close");
    
    // If there's a payload, include content-length
    if(payload.length() > 0)
    {
      client.println("Content-Type: application/json");
      client.print("Content-Length: ");
      client.println(payload.length());
      client.println();
      client.println(payload);
      client.println();
    }
    else
    {
      client.println();
    }

    // An empty println means the end of the request

    // Placeholder for response data
    String line;
    // Response object
    Response res;
    // While connection is alive
    while(client.connected())
    {
      // Read one line
      line = client.readStringUntil('\n');

      // Print response to serial monitor
      // Serial.println(line);
      
      // A line starting with HTTP contains the status code
      if(line.startsWith("HTTP") && res.statusCode < 0)
      {
        // Take the appropriate substring and convert to an integer
        res.statusCode = line.substring(9, 12).toInt();
      }
      
      // If the line starts with a brace we have our response in JSON format
      if(line.startsWith("{"))
      {
        // End the connection
        client.stop();
        // Set the payload in our response object
        res.payload = line;
      }
    }

    // Return our response
    Serial.println(res.payload);
    return res;
  }
  else
  {
    // Connection failed
    Serial.println("Misslyckades med att ansluta till AWS.");
    Response res;
    res.statusCode = -1;
    res.payload = "no connection";
    // Return a "no connection" response
    return res;
  }
}

void UpdateUpdateFreq(){

  Response getRes = makeRequest("GET", "/device", name , ""); // Gett current device data including updatefreq

  if(getRes.statusCode == 404){ // 404 Error if no device is found
    Serial.println("Enhet hittades inte, starta om tack"); // only possible if device is deleted from the database while running
  } else if(getRes.statusCode == 200) // OK
  {
    int updateIntervalIndex = getRes.payload.indexOf("\"UpdateFreq\":");

    if(updateIntervalIndex >= 0){

      // Jump to updateInterval value
      int updateIntervalStart = updateIntervalIndex + 13;
      // Find the end of the value
      int updateIntervalEnd = getRes.payload.indexOf(',', updateIntervalStart);
      // Take the appropriate substring from the response, convert seconds to milliseconds
      int newupdateInterval = getRes.payload.substring(updateIntervalStart, updateIntervalEnd).toInt() * 1000;

      if (updateInterval != newupdateInterval){ // if the new updatefreq is different from the current one
        updateInterval = newupdateInterval;
        Serial.print("Den nya uppdateringsfrekvensen är ");
        Serial.println(updateInterval);
      }
    
    
    }
  }


}

void setup() {
  Wire.begin(12,13);
  // Begin serial communication
  Serial.begin(115200);
  delay(2000); // wait 2000 milliseconds to make sure device is ready


  Serial.print("Ansluter till ");
  Serial.print(".");
  WiFiManager wifiManager; 
  wifiManager.autoConnect("_Martins Fräna Nätverk", "1234567890"); // Döp om Wifihotspoten (Mikrokontrollen) genom att ändra namnet innanför parameterarna.
 // ^^^ används bara om ett känt nätverk inte hittas
  
  Serial.print("Klar\nLokal IP-adress: "); // Skriv lite info
  Serial.println(WiFi.localIP());
  Serial.print("MAC-adress: ");
  Serial.println(WiFi.macAddress());

  // Sets the fingerprint for SSL encrypted connection
  client.setFingerprint(fingerprint);

  Serial.println("Hämtar info om denna enhet...");
  // Getting device info from API
  Response getRes = makeRequest("GET", "/device", name , "");
  Serial.print(getRes.statusCode);
  if(getRes.statusCode == 404) // Not Found
  {
    Serial.println("Ingen info hittades, skapar ny enhet...");

    // Adding device to database
    Response postRes = makeRequest("POST", "/device", name, "");
    if(postRes.statusCode == 201) // Created
    {
      // Give instructions to user
      Serial.println("Enhet skapad, gör följande steg:");
      printRegisterGuide();  // fixa när det finns instruktioner att följa
    }
  }
  else if(getRes.statusCode == 200) // OK
  {
    Serial.print("Enhet hittades ");

    // Find isRegistered and updateInterval
    int registeredIndex = getRes.payload.indexOf("\"isRegistered\":");
    int updateIntervalIndex = getRes.payload.indexOf("\"UpdateFreq\":");
    // If both keys are found
    if(registeredIndex >= 0 && updateIntervalIndex >= 0)
    {
      // Jump to isRegistered value
      int registeredStart = registeredIndex + 15;
      // Take the appropriate substring from the response
      // Since it's 5 characters, the response will be "false" or "true,"
      // The colon after "true" is the next key in the object
      String registered = getRes.payload.substring(registeredStart, registeredStart + 5);

      // Jump to updateInterval value
      int updateIntervalStart = updateIntervalIndex + 13;
      // Find the end of the value
      int updateIntervalEnd = getRes.payload.indexOf(',', updateIntervalStart);
      // Take the appropriate substring from the response
      updateInterval = getRes.payload.substring(updateIntervalStart, updateIntervalEnd).toInt() * 1000;
      

        Serial.print("och är registrerad, påbörjar mätning med intervallet ");
        Serial.print(updateInterval);
        Serial.println(" millisekunder...");
        // Begin measuring
        // am2320.begin();
        // Set isRegistered to true so the loop will run
      
    }
    // If either key (isRegistered or updateInterval) is not found
    
  }
}

void loop() {
  // Only measure and send data if registered

    // Get current temperature and humidity
    MeasureData();

    // Payload to send to API
    String payload = "{\"temp\":" + String(temperature) + ",\"hum\":" + String(humidity) + "}";
    Serial.print("Skickar data. Storlek: ");
    Serial.println(payload.length());
    // Send the data
    makeRequest("POST", "/data", name, payload);

    UpdateUpdateFreq(); // get new updatefreq every loop
    Serial.print("Väntar ");
    Serial.print(updateInterval);
    Serial.println(" millisekunder.");

    // Wait for next measurement
    delay(updateInterval);
}
