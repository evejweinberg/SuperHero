var serial;
var portName = '/dev/cu.usbmodem1451';
var inData2;

var near = .1;
var far = 100;
var buildingimg;
var restingNum = 0;
var cameraSpeed = 0;
var text2dCanvas;
var camlastPosition = 0,
  speedFactor = 30;
var scene3 = true;
var scene2 = false;
var s, c;
var h=50;
var b = 90;
var tempSlider;
var canvas;



function setup() {
        canvas = createCanvas(800, 600, WEBGL);
   tempSlider = createSlider(restingNum-500,restingNum+500,restingNum);
  tempSlider.position(10,700).class('ontop');
  text2dCanvas = createGraphics(710, 400);
  text2dCanvas.style("display", "inline");
  text2dCanvas.position(0, 0);

  buildingimg = loadImage("assets/Stripes.jpg");

  // serial = new p5.SerialPort(); // make a new instance of the serialport library

  // serial.on('connected', serverConnected); // callback for connecting to the server
  // serial.on('open', portOpen); // callback for the port opening
  // serial.on('data', serialEvent); // callback for when new data arrives
  // serial.on('error', serialError); // callback for errors

  // serial.open(portName); // open a serial port
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

function serialEvent() {
  // read a string from the serial port:
  var inString = serial.readStringUntil('\r\n');
  if (inString.length > 0) {
    var sensors = split(inString, ',');

    inData2 = int(sensors[0]);
    if (restingNum === 0) {
      restingNum = inData2;
    }

    if (inData2 > (restingNum + 200)) {
      cameraSpeed += 5;
    } else if (inData2 > (restingNum + 100)) {
      cameraSpeed += 2;
    } else if (inData2 > (restingNum + 20)) {
      cameraSpeed += 1;
    }
    var diffPercentage = inData2 / restingNum;
    if (cameraSpeed > 0.3 && (diffPercentage > 0.9 && diffPercentage <= 1.2)) {
      cameraSpeed -= 0.1;
    }

  }
}


function draw() {
  if (scene2==true){
    background(255,0,0);
  
  }
  
  if (millis()>2000&& millis()<3000){
    console.log('2sec');
    scene2=false;
    scene3=true;
  }
  if (scene3 == true) {
      canvas = createCanvas(800, 600, WEBGL);
    colorMode(HSB, 100); // Use HSB with scale of 0-100
    c = color(h, 90, b);
    background(c);
    fill(0, 130, 255);

    // frameRate(30);
    // console.log(-camlastPosition);
    camlastPosition += cameraSpeed;
    camera(0, 0, -camlastPosition);
    
       if (tempSlider.value() > (restingNum + 200)) {
      cameraSpeed += 3;
    } else if (tempSlider.value() > (restingNum + 100)) {
      cameraSpeed += 1;
    } else if (tempSlider.value() > (restingNum + 20)) {
      cameraSpeed += .3;
    }
    var diffPercentage = inData2 / restingNum;
    if (cameraSpeed > 0.3 && (diffPercentage > 0.9 && diffPercentage <= 1.2)) {
      cameraSpeed -= 0.1;
    }
    h= map(camlastPosition,0,12000,50,90);
    b = map(camlastPosition,0,12000,90,40);
    if (camlastPosition > 12000){
      h=90;
      b=40;
    }
    console.log(h);

    var locY = (mouseY / height - 0.5) * (-2);
    var locX = (far) * 2;

    for (var i = -1; i < 1; i++) {
      for (var j = -7; j < 34; j++) {
        push();
        translate(140 + i * 360, 0, -1000 + (j * 560)-100);
        // texture(255,0,0);
        box(40, 40 * j, 40);
        pop();
      }
    }
    //lights
    ambientLight(50);
    directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
    pointLight(255, 255, 255, locX, locY, 0);
    pointLight(0, 0, 0, -locX, -locY, 0);

    // road
    translate(0, 0, 0);
    normalMaterial();
    translate(0, 260, 0);
    push();
    rotateX(80);
    plane(100, 5000);
    pop();
    text2dCanvas.clear();
    text2dCanvas.textSize(60);
    text2dCanvas.fill(10);
    text2dCanvas.text((int(cameraSpeed * speedFactor) + " mph"), 100, 150, 300);
  }

}