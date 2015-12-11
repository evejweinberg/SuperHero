var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.LightBlue-Bean'; // fill in your serial port name here
var newDataZ, newDataY, newDataX; // for incoming serial data

var NumstoCallibrate = [];
// var NumbersToAverage = [];
var SensorVal;
var distanceofvalues = 0;
var MovingAverage = 0;
var CamSpeed = 0;
var inDataGloveL = 0;
var range1 = 0,
  range2 = 0,
  range3 = 0,
  range4 = 0,
  range5 = 0;
var AllScenesMPH = 0;



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
  rect(30, 120, 400, 200);
  textSize(20);
  fill(0);
  text('average    ' + MovingAverage, 40, 150);
  text('distOfValues    ' + distanceofvalues, 40, 180);
  text('yourCamSpeed   ' + CamSpeed, 40, 210);
  text('GamePlayMPH   ' + AllScenesMPH, 40, 240);
AverageAcellerometerNums();
  getCamSpeed();



}

  function AverageAcellerometerNums(){
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
  distanceofvalues = round(abs(610 - newDataZ));
  }

  function getCamSpeed() {
    // console.log(range1+ range2+range3+range4+range5)
    if (distanceofvalues < 15) {
      range1 = 0;
      console.log('range1 is:   ' + range1);
    } else if (distanceofvalues >= 15 && distanceofvalues < 45) {
      //max
      range2 = range2 + 0.2;
      if (range2 > 1) {
        range2 = 1;
      }
    } else if (distanceofvalues >= 45 && distanceofvalues < 75) {
      //max
      range3 = range3 + 0.5;
      if (range3 > 2) {
        range3 = 2;
      }
      console.log('range2 is:   ' + range2);
    } else if (distanceofvalues >= 75 && distanceofvalues < 135) {
      range4 = range4 + 0.5;
      if (range4 > 4) {
        range4 = 4;
      }
    } else if (distanceofvalues >= 135 && distanceofvalues < 165) {
      range5 = range5 + 0.5;
      if (range5 > 6) {
        range5 = 6;
      }
    } else if (distanceofvalues >= 165 && distanceofvalues < 195) {
      range6 = range6 + 0.5;
      if (range6 > 8) {
        range6 = 8;
      }
    }
    range2 = range2 - 0.06;
    range3 = range3 - 0.04;
    range4 = range4 - 0.03;
    range5 = range5 - 0.02;
    range6 = range6 - 0.01;
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
      AllScenesMPH = round(map(CamSpeed, 0, 20, 0, 650));
    }
    //max CamSpeed = 20 0+2+4+5+8;
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
    console.log(inDataGloveL + '||' + newDataZ);

  }
}

