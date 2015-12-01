var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodemfa131'; // fill in your serial port name here
var newDataZ, newDataY, newDataX; // for incoming serial data
var xPos = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);


  serial = new p5.SerialPort(); // make a new instance of the serialport library

  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors

  serial.open(portName); // open a serial port
}

function serverConnected() {
  println('connected to server.');
}

function portOpen() {
  println('the serial port opened.')
}

// function serialEvent() {
//   inData = Number(serial.read());
// }

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}

function draw() {
  // background(0)
  graphData(newDataZ, newDataY, newDataX);
 
  // var yPosZ = map(newDataZ, 400, 1024, 0, height);
  // var yPosY = map(newDataY, 400, 1024, 0, height);
  // var yPosX = map(newDataX, 400, 1024, 0, height);

  stroke(255, 0, 0);
   text('Z', 10,10);
  // line(xPos, 200, xPos, 200 - yPosZ);
  stroke(0,0,255);
  text('Y', 10,30);
  // line(xPos, 200, xPos, 200 - yPosY);
  stroke(0, 255, 0);
  text('X', 10,50);
  // line(xPos, 200, xPos, 200 - yPosX);

}

function serialEvent() {
  // read a string from the serial port:
  var inString = serial.readStringUntil('\r\n');
  if (inString.length > 3) {
    var sensors = split(inString, ',');
    newDataX = int(sensors[3]);
    newDataY = int(sensors[2]);
    newDataZ = int(sensors[1]);

    // yPos = map(inString[0], 0, 1023, height, 0);
    // yPos1 = map(inString[1], 0, 255, 0, height);
    // yPos2 = map(inString[2], 0, 255, 0, height);

    // convert it to a number:
    // inData1 = Number(inString[1]);
    // inData2 = Number(inString[2]);
    // console.log(inData0);
    console.log(newDataZ+'||'+newDataY+'||'+newDataX);
   
  }
}

function graphData(newDataZ, newDataY, newDataX) {
  // map the range of the input to the window height:
  var yPosZ = map(newDataZ, 610-500, 610+500, height, 0);
  var yPosY = map(newDataY, 511-500, 511+500, height, 0);
  var yPosX = map(newDataX, 507-500, 507+500, height, 0);

  stroke(255, 0, 0);
  line(xPos, height/2, xPos, yPosZ);
  stroke(0,0,255);
  line(xPos+400, height/2, xPos+400, yPosY);
  stroke(0, 255, 0);
  line(xPos+800, height/2, xPos+800, yPosX);
  // at the edge of the screen, go back to the beginning:
  if (xPos >= 400) {
    xPos = 0;
    background(255)
  } else {
    // increment the horizontal position for the next reading:
    xPos++;
  }
}