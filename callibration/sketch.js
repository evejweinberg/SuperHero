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
var readingVal, gd;
var distanceofvalues = 0;
var averageValpreCal = 0;
var sum = 0;
var callibrationPreStage = true;
var callibrationStage = false;
var timer;

function setup() {
  createCanvas(700, 700);
  gd = new getReadingChange();
  sliderTemp = createSlider(500, 600, 550); //the sensor will replace this later

  timer = setTimeout(function(){
    console.log("fire togglestages")
  }, 3000);

}

function draw() {
  background(255);
  textSize(30);
  text('raw value     ' + readingVal, 40, 60);
  text('distance     ' + distanceofvalues, 40, 80);
  text('average     ' + averageValpreCal, 40, 100);
  // console.log('sum is     ' + sum);
  // console.log('calibrationReading' + isCallibrationReady);
  // console.log(readingVal);
  gd.display();
  readingVal = sliderTemp.value();




  if (callibrationStage === true) {
      text('CALLIBRATING! HOLD STEADY', 40, 40);
      NumstoCallibrate.push(distanceofvalues);
    if (NumstoCallibrate.length > 10) { // write over the 10 numbers in the array
      NumstoCallibrate.splice(0, 1);
    }
    sum = 0;
    for (var i = 0; i < NumstoCallibrate.length; i++) {
      var num = Number(NumstoCallibrate[i]);
      sum = sum + num;
    }
    averageValpreCal = sum / NumstoCallibrate.length;
      

  }

  if (callibrationPreStage === true) {
    text('START CALLIBRATION', 40, 40);
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
    
    timer = setTimeout(function(){
      console.log("fire togglestages")
      togglestages();
    }, 3000);
    
    
    
  }
} //draw ends

function togglestages() {
  if (callibrationPreStage == true) {
    
    callibrationPreStage = false;
    callibrationStage = true;
  }

}

function getReadingChange() {
  this.currentVal = readingVal;
  console.log('cv' + this.currentVal);
  this.previousVal = readingVal;
  this.lastcheck = 0;

  this.display = function() {
    this.currentVal = readingVal;

    if (millis() - this.lastcheck > 100) { //read every 10th of a second
      distanceofvalues = abs(this.currentVal - this.previousVal);
      // console.log('changeAmount:  ' + distanceofvalues);
      this.previousVal = this.currentVal;
      this.lastcheck = millis();
    }
  }
}