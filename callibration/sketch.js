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
var scene1 = false;
var timer;
var CallibratedRestingNum = 0;
var callibrationCountdown = 5;
var calcountdown;

function setup() {
  createCanvas(700, 700);
  gd = new getSensorValChange();
  sliderTemp = createSlider(500, 600, 550); //the sensor will replace this later

  timer = setTimeout(function() {
    togglestages();
  }, 3000);

}

function draw() {
  background(255);
  textSize(20);
  text('raw value     ' + SensorVal, 40, 60);
  text('fluctuation     ' + distanceofvalues, 40, 80);

  // console.log('sum is     ' + sum);
  // console.log('calibrationSensorVal' + isCallibrationReady);
  // console.log(SensorValVal);
  gd.display();
  SensorVal = sliderTemp.value();


  if (scene1 == true) {
    background(0);
    fill(255, 0, 0);
    text('GAME ON  ', 40, 40);
  }


  if (callibrationStage === true) {
    text('CALLIBRATING! HOLD STEADY FOR:  ' + callibrationCountdown, 40, 40);

    // var calcountdown = setTimeout(function() {
    //   console.log(callibrationCountdown);
    //   Math.round(callibrationCountdown--);

    // }, 1000);
    // clearTimeout ( calcountdown );

    // if (millis()%1000==0){
    //   console.log(callibrationCountdown);
    // round(callibrationCountdown--);
    // }
    if (callibrationCountdown <= 0) {
      togglestages2();
      window.clearInterval(calcountdown);
    }
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


  }

  if (callibrationPreStage === true) {
    text('STARTING CALLIBRATION', 40, 40);
    if (distanceofvalues > 6) {
      text("YOU'RE NOT STEADY ENOUGH", 280, 180);
    }
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
  }


  if (averageValpreCal > 6) {

    window.clearTimeout(timer)

    timer = setTimeout(function() {
      console.log("fire togglestages")
      togglestages();
    }, 3000);



  }
} //draw ends

function togglestages() {
  if (callibrationPreStage == true) {

    callibrationPreStage = false;
    callibrationStage = true;
    Begincountdown();
  }



}

function togglestages2() {
  if (callibrationStage == true) {
    callibrationStage = false;
    scene1 = true;
  }
}

function getSensorValChange() {
  this.currentVal = SensorVal;
  console.log('cv' + this.currentVal);
  this.previousVal = SensorVal;
  this.lastcheck = 0;

  this.display = function() {
    this.currentVal = SensorVal;

    if (millis() - this.lastcheck > 100) { //read every 10th of a second
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