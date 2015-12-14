var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.LightBlue-Bean'; // fill in your serial port name here
var newDataZ, newDataY, newDataX; // for incoming serial data
var xPos = 0;
var restingNum = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  restingNum = height/2;


  serial = new p5.SerialPort(); // make a new instance of the serialport library

  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors

  serial.open(portName); // open a serial port
}

function serverConnected() {
  // println('connected to server.');
}

function portOpen() {
  // println('the serial port opened.')
}


function serialError(err) {
  // println('Something went wrong with the serial port. ' + err);
}

function draw() {
  // background(0)
  graphData(newDataZ, newDataY, newDataX);
 

  stroke(255, 0, 0);
   text('Z', 10,10);
  
}

function serialEvent() {
  // read a string from the serial port:
  var inString = serial.readStringUntil('\r\n');
  if (inString.length > 0) {
    var sensors = split(inString, ',');
    // newDataX = int(sensors[3]);
    // newDataY = int(sensors[2]);
    newDataZ = int(sensors[1]);

    console.log(newDataZ);
   
  }
}

function graphData(newDataZ, newDataY, newDataX) {
  
  // map the range of the input to the window height:
  var yPosZ = map(newDataZ, 610-500, 610+500, height, 0);
  // var yPosY = map(newDataY, 511-500, 511+500, height, 0);
  // var yPosX = map(newDataX, 507-500, 507+500, height, 0);

  stroke(255, 0, 0);
  line(xPos, restingNum, xPos, yPosZ);
  
  
  if (abs(restingNum-yPosZ)>100){
  
    stroke(200, 100, 0);
  }
  
  if (xPos >= 400) {
    xPos = 0;
    background(255)
  } else {
    // increment the horizontal position for the next reading:
    xPos++;
  }
}