// Pseudocode TO DO NEXT:
// once the values are fluctuating less that 6 numbers up or down, 
// then start storing those values into an array called restingNumbers
// once the array is 40 numbers long, stop storing the data.
// text read: CALLIBRATION OVER
// create an average number of sensor[0]'s array and store that in a variable called resting.

var sliderTemp; //the sensor will replace this later
var restingNumbers = [];
var isCallibrationReady = [];
var NumstoCallibrate = [];
var SensorVal, gd;
var distanceofvalues = 0;
var averageValpreCal = 0;
var sum = 0;
var callibrationPreStage = true;
var callibrationStage = false;
var sceneFake1 = false;
var sceneNextScene = false;
var timer;
var CallibratedRestingNum = 0;
var callibrationCountdown = 5;
var calcountdown;
var UserArmOutNum = 0;
var scene7 = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gd = new getCalibrationSensorValChange();
  sliderTemp = createSlider(500, 600, 550); //the sensor will replace this later
  sliderTemp.position(300, 300).class('class7');

  timer = setTimeout(function() {
    CalibrationgetCalibrationSensorValChangeges();
  }, 3000);

}

function draw() {

  if (scene7 == true) {
    background(255);
    textSize(20);
    textAlign(CENTER);
    text('raw value     ' + SensorVal, 40, 60);
    // text('fluctuation     ' + distanceofvalues, 40, 80);
    gd.display();
    SensorVal = sliderTemp.value();


    if (sceneFake1 == true) {
      textSize(60);
      text('GREAT! \r\nNOW YOU ARE READY FOR FLIGHT SCHOOL', windowWidth / 2, (windowHeight / 2) - 60);
      console.log('User Resting Num is:' + UserArmOutNum)
      calcountdown = window.setInterval(function() {
        calibrationOver();
      }, 5000); //wait 5 seconds

    }

    if (sceneNextScene == true) {
      background(0);
    }


    if (callibrationStage === true) {
      textSize(30);
      text('PUT ARMS OUT LIKE THIS\r\n(AND HOLD STILL!)', windowWidth / 2, 100);
      textSize(60);

      text('HOLD STEADY FOR:  ' + callibrationCountdown, windowWidth / 2, 580);

      if (callibrationCountdown <= 0) {
        CalibrationgetCalibrationSensorValChangeges2();
        window.clearInterval(calcountdown);
      }
      textSize(20);
      text('resting value    ' + CallibratedRestingNum, 40, 150);
      NumstoCallibrate.push(SensorVal); //now that we're steady, lets gather the actual number
      if (NumstoCallibrate.length > 100) { // write over the 100 numbers in the array
        NumstoCallibrate.splice(0, 1);
      }
      sum = 0;
      for (var i = 0; i < NumstoCallibrate.length; i++) { //100 times
        var num = Number(NumstoCallibrate[i]); //raw sensor numbers
        sum = sum + num; //add them all up
      }
      CallibratedRestingNum = sum / NumstoCallibrate.length;


    } ///callibration over

    if (callibrationPreStage === true) {
      textSize(30);
      text('PUT ARMS OUT LIKE THIS\r\n(AND HOLD STILL!)', windowWidth / 2, 100);
      textSize(60);
      if (distanceofvalues > 6) {
        text("NOT STEADY ENOUGH", windowWidth / 2, 580);
      } else if (distanceofvalues < 6) {
        text("STEADY   ", windowWidth / 2, 580);
      }
      textSize(20);
      text('average fluctuation     ' + averageValpreCal, 40, 100);
      isCallibrationReady.push(distanceofvalues);
      if (isCallibrationReady.length > 10) { // write over the 10 numbers in the array
        isCallibrationReady.splice(0, 1);
      }
      sum = 0;
      for (var i = 0; i < isCallibrationReady.length; i++) {
        var num = Number(isCallibrationReady[i]);
        sum = sum + num;
      }
      averageValpreCal = sum / isCallibrationReady.length;
    } ///pre-callibration over


    if (averageValpreCal > 6) {

      window.clearTimeout(timer)

      timer = setTimeout(function() {
        CalibrationgetCalibrationSensorValChangeges();
      }, 3000);



    }
  } //scene 7 ends
} //draw ends

function CalibrationgetCalibrationSensorValChangeges() {
  if (callibrationPreStage == true) {

    callibrationPreStage = false;
    callibrationStage = true;
    Begincountdown();
  }
}

function CalibrationgetCalibrationSensorValChangeges2() {
  if (callibrationStage == true) {
    callibrationStage = false;
    UserArmOutNum = CallibratedRestingNum;
    sceneFake1 = true;
  }
}

function getCalibrationSensorValChange() {
  this.currentVal = SensorVal;
  console.log('cv' + this.currentVal);
  this.previousVal = SensorVal;
  this.lastcheck = 0;

  this.display = function() {
    this.currentVal = SensorVal;

    if (millis() - this.lastcheck > 120) { //read every 10th of a second
      distanceofvalues = abs(this.currentVal - this.previousVal);
      // console.log('changeAmount:  ' + distanceofvalues);
      this.previousVal = this.currentVal;
      this.lastcheck = millis();
    }
  }
}

function Begincountdown() {
  calcountdown = window.setInterval(function() {
    console.log(callibrationCountdown);
    Math.round(callibrationCountdown--);
  }, 1000);
}

function calibrationOver() {
  if (sceneFake1 == true) {
    sceneFake1 = false;
    sceneNextScene = true;
  }
}