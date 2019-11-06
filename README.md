# Termometer_example

Temperature and humidity read with an IOT-device. The data is automatically sent to a database and then presented on a website. Database and API-gateway are hosted with AWS. The website is deisgned and built in VUE. The data is gathered with an ESP8266. 

## Getting started

### Prerequisites

Things you need in order to open the project:

```
Visual Studio Code
  npm install vue-apexcharts apexcharts
Arduino
AWS
```

### Deployment

To deploy the website, write the following command in your console:

```
npm run serve
```

## Built With

### AWS (Backend)

#### These AWS Lambda functions are used in the project: 

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

#### An overview of the API-gateway: ..........

#### DynamoDB: ............

### Vue (Frontend)

The frontend is built with VUE, VUEX, axios and Vuetify.

### ESP8266

This code was used to program the micro controller: ........
