var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.LightBlue-Bean'; // fill in your serial port name here
var newDataZ, newDataY, newDataX, batteryVoltage; // for incoming serial data

var NumstoCallibrate = [];
// var NumbersToAverage = [];
var SensorVal;
var distanceofvalues = 0;
var MovingAverage = 0;
var CamSpeed = 0;
var inDataGloveL = 0;
var range6On = false,
  range5On = false,
  range4On = false,
  range3On = false,
  range2On = false,
  range1On = false;
var range1 = 0,
  range2 = 0,
  range3 = 0,
  range4 = 0,
  range5 = 0,
  range6 = 0;
var AllScenesMPH = 0;
var maximum = 250;
var minimum = 250;


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

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}

function draw() {

  fill(255);
  stroke(0, 255, 0)
  rect(30, 120, 400, 1200);
  textSize(20);
  fill(0);
  text('average    ' + MovingAverage, 40, 150);
  text('distOfValues    ' + distanceofvalues, 40, 180);
  text('yourCamSpeed   ' + CamSpeed, 40, 210);
  text('GamePlayMPH   ' + AllScenesMPH, 40, 240);
  if (newDataZ > maximum) {
    maximum = newDataZ

  }

  if (newDataZ < minimum) {
    minimum = newDataZ

  }
  text('max' + maximum, 40, 260);
  text('min' + minimum, 160, 260);



  fill(255, 0, 0);
  if (range1On == true) {
    // text('range1', 40,260);
  }
  if (range2On == true) {
    text('range2', 40, 280);
  }
  if (range3On == true) {
    text('range3', 40, 300);
  }
  if (range4On == true) {
    text('range4', 40, 320);
  }
  if (range5On == true) {
    text('range5', 40, 340);
  }
  if (range6On == true) {
    text('range6', 40, 360);
  }

  range2On = false;
  range3On = false;
  range4On = false;
  range5On = false;
  range6On = false;


  AverageAcellerometerNums();
  getCamSpeed();



}

function AverageAcellerometerNums() {
  NumstoCallibrate.push(newDataZ);
  if (NumstoCallibrate.length > 100) { // write over the 100 numbers in the array
    NumstoCallibrate.splice(0, 1);
  }
  sum = 0;
  for (var i = 0; i < NumstoCallibrate.length; i++) { //100 times
    var num = Number(NumstoCallibrate[i]); //raw sensor numbers
    sum = sum + num; //add them all up
  }
  MovingAverage = sum / NumstoCallibrate.length;
  distanceofvalues = round(abs(250 - newDataZ));
}

function getCamSpeed() {
  // console.log(range1+ range2+range3+range4+range5)
  if (distanceofvalues < 100) {
    range1 = 0;
    // console.log('range1 is:   ' + range1);
  } 
  if (distanceofvalues > 120) {
    range2On = true;
       console.log('range2 = true');
    range2 = range2 + 0.2;
    if (range2 > 1) {
      range2 = 1;
    }
  } 
  if (distanceofvalues > 150) {
    range3On = true;
       console.log('range3 = true');
    range3 = range3 + 0.5;
    if (range3 > 2) {
      range3 = 2;
    }

  } 
  if (distanceofvalues >250) {
    range4On = true;
       console.log('range4 = true');
    range4 = range4 + 0.5;
    if (range4 > 4) {
      range4 = 4;
    }
  } 
  if (distanceofvalues >500) {
    range5On = true;
       console.log('range5 = true');
    range5 = range5 + 0.5;
    if (range5 > 6) {
      range5 = 6;
    }
  } 
  if (distanceofvalues > 750) {
    range6On = true;
    console.log('range6 = true');
    range6 = range6 + 0.5;
    if (range6 > 8) {
      range6 = 8;
    }
  }
  range2 = range2 - 0.06;
  range3 = range3 - 0.04;
  range4 = range4 - 0.03;
  range5 = range5 - 0.02;
  range6 = range6 - 0.02;
  if (range2 < 0) {
    range2 = 0;
  }
  if (range3 < 0) {
    range3 = 0;
  }
  if (range4 < 0) {
    range4 = 0;
  }
  if (range5 < 0) {
    range5 = 0;
  }
  if (range6 < 0) {
    range6 = 0;
  }

  CamSpeed = range1 + range2 + range3 + range4 + range5 + range6;
  if (frameCount % 15 == 0) {
    AllScenesMPH = round(map(CamSpeed, 0, 20, 0, 761));
  }

}

function serialEvent() {
  // read a string from the serial port:
  var inString = serial.readStringUntil('\r\n');
  if (inString.length > 2) {
    var sensors = split(inString, ',');
    // newDataX = int(sensors[3]);
    // newDataY = int(sensors[2]);
    newDataZ = int(sensors[1]);
    inDataGloveL = int(sensors[0]);
    batteryVoltage = (sensors[2]);
    console.log(inDataGloveL + '||' + newDataZ + '||' + batteryVoltage);

  }
}