	var timeDiv;
		// var serial; // variable to hold an instance of the serialport library
// var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here
var inData0, inData1, inData2; // for incoming serial data
var xPos = 0;

	function setup() {
		createCanvas(windowWidth, windowHeight);
  		background(255, 255, 255);
		httpGet('/data', update);
		timeDiv = document.getElementById('sensors');
		frameRate(30);
	}

function draw() {
	httpGet('/data', update);
  
}

	function update(response) {
		timeDiv.innerHTML = response;
		//httpGet('/data', update);
		graphData(response, response, response);
	}

function serialEvent() {
  // read a string from the serial port:
  var inString = serial.readStringUntil('\r\n');
  if (inString.length > 0) {
    var sensors = split(inString, ',');
    // inData0 = int(sensors[0]);
    // inData1 = int(sensors[1]);
    inData2 = int(sensors[0]);

   
    console.log(inData2);
  }
}

function graphData(newData0, newData1, newData2) {
  // map the range of the input to the window height:
  var yPos = map(newData0, 400, 1024, 0, height/ 3);
  var yPos1 = map(newData1, 400, 1024, 0, height / 3);
  var yPos2 = map(newData2, 400, 1024, 0, height / 3);

  // stroke(255, 0, 0);
  // line(xPos, height / 3, xPos, height / 3 - yPos);
  // stroke(0);
  // line(xPos, 2 * height / 3, xPos, 2 * height / 3 - yPos1);
  stroke(0, 255, 0);
  line(xPos, height, xPos, height - yPos2);
  // at the edge of the screen, go back to the beginning:
  if (xPos >= width) {
    xPos = 0;
    // clear the screen by resetting the background:
    background(255);
  } else {
    // increment the horizontal position for the next reading:
    xPos++;
  }
}