var BleUart = require('./ble-uart');
var bleSerial = new BleUart('6e400001b5a3f393e0a9e50e24dcca9e');
var bleData;

var express = require('express');	// using the express framework
var app = express();							// initalize express


// serve static pages from public/ directory:
app.use('/',express.static('public'));

// if a client requests /data, return the data:
app.get('/data', function(request, response){
  console.log("Someone asked for the data");
  response.end(bleData);
});


//max's test on Thursday morning
bleSerial.on('data', function(data){
var data = String(data)
data = data.trim().split("\r\n");
  if(data.length > 1 && data[1].length > 2){
    bleData = data[1];
    console.log("got valid data")
    console.log(bleData);
    console.log("#######");
  }

});

// this function gets called when new data is received from
// the Bluetooth LE serial service:
// bleSerial.on('data', function(data){
// 	var data = String(data)
// 	data = data.trim();
// 	// if(data.length > 2){
// 		bleData = data
//   		console.log("got valid data")
//   		console.log(bleData);
// 	// } 
  	
  
  
// });

// this function gets called when the program
// establishes a connection with the remote BLE radio:
bleSerial.on('connected', function(data){
  console.log("Connected to BLE. Sending a hello message");
  //bleSerial.write("Hello BLE!");
});

// thus function gets called if the radio successfully starts scanning:
bleSerial.on('scanning', function(status){
  console.log("radio status: " + status);
});

// start the server listening:
app.listen(8080);
