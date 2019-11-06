# Termometer_example

Temperature and humidity read with an IOT-device. The data is automatically sent to a database and then presented on a website. Database and API-gateway are hosted with AWS. The website is deisgned and built in VUE. The data is gathered with an ESP8266. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Deployment

To deploy the website, write the following in your console:

```
npm run serve
```
## Structure

### AWS (Backend)

#### These AWS Lambda functions were used during the project: 

##### Passwod_Add:

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
