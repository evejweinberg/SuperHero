var centerH=0;
var newspapertempheader, cd_3, cd_2, cd_1, cd_fly, game, inst, saveme, bg01, asteroid, scene3header, scene2header, flapTemp, dearEarth, scene5countdown, cappink, capblue;
var instscaledown = 300;
var colors;
var fist, fistinst;
var fistx = -100;
var fisty = 200;
var earthspin;
var Scn2_frames = [];
var earthspin_frames = [];
// turbo png sequence
var turbo;
var turbo_frames = [];
var turboFrameNum = 0;
var turboTotalFrames = 30;
var currentframe = 0;
var Scn2frmct = 0;
var Scn3_frmct = 0;
var Scn5_frmct = 0;
var transitionCounter = 0;

//scene4
var asteroidHit;
var scene4Script;
var Scn4_textcounter = 0;
var index = 0;
var lastCue = 0;
var Scn4_frmct = 0;
var words = [];
var timings = [90, 120, 160, 200, 220, 230, 240, 250, 270];
var transcript, currentText;
var earthSpinFrames = 26;
var flysmall;
var flyingOrbitRate = 0;
var dearEarthScript;
var totalgameframes = 720;
var game_frames = [];
var totalScn2frames = 325;
var aspect = 1920 / 1080;
var aftercape, TotalSeconds;
var playSecondVid = false;
var instructionsready = false;
var strokevar = 1;
var singlestar = [];
var savmeplaying = false;
var bgplaying = false;
var dearEarthplaying = false;
//astroid 
var ast_x = -100;
var ast_y = -100;
var ast_size = 766;
var scene3counter = 0;
var totalstars = 20;
var scene1 = true;
var scene2 = false;
var scene3 = false;
var scene4 = false;
var scene5 = false;
var scene6 = false;
var scene7 = false; //callibration scene
var count = 30;
var counter;

//photobooth
var canvas, capture, mycam, button, img;

//scene3
var totalParticles = 12; //number of total particles
var arrayOfBalls = []; //empty array to be filled
var arrayOfLines = [];
var flightschool1;
var flightschoolheader;
var flap1type, flap2type;
var FlightSchoolSign;

//scene7 callibration
var calibrateSteadyType;
var callibrationImage;
var callibrationHeader, callibrationExplainer;
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
var calibrateFinal = false;
var calibrationHeader;
var sceneNextScene = false;
var timer;
var CallibratedRestingNum = 0;
var callibrationCountdown = 5;
var calcountdown;
var UserArmOutNum = 0;
var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodemfa131'; // fill in your serial port name here
var inData0, inData1, inData2; // for incoming serial data
var xPos = 0;
var loadingOvervid;
var spacebg;
var CapeCalibrationSign;
var cc;
var isccplaying = false;

var transitionToStory = [];
var trans;
var readyfortrans;
var transitionTicker = 0;



//scene 2
function starfield1() {
  this.x = random(1920);
  this.y = random(1080);
  stroke(255);
  this.radius = random(30);
  this.display = function() {
    strokeWeight(4);
    this.radius = this.radius + .5;
    line(this.x, this.y - this.radius / 2, this.x, this.y + this.radius / 2);
    line(this.x + this.radius / 2, this.y, this.x - this.radius / 2, this.y);
  }
  this.twinkle = function() {
    if (this.radius > 30) {
      this.radius = -this.radius;
    } else if (this.radius < 5) {
      this.radius = this.radius;
    }
  }
}

function playSaveMe() {
  if (!savmeplaying) {
    saveme.play();
    savmeplaying = true;
  }
}

function playcc() {
  if (!isccplaying) {
    cc.play();
    isccplaying = true;
  }
}

//scene4
function dearEarthVO() {
  if (!dearEarthplaying) {
    dearEarth.setVolume(0.6);
    dearEarth.play();
    dearEarthplaying = true;
    bg01.setVolume(0.05);
  }
}



function preload() {
  transcript = loadStrings('assets/script.txt');
  img = loadImage('assets/newspaper.PNG');

  for (var i = 0; i < 13; i++) { //load all the image names
    trans = "assets/spaceCompress_" + nf(i, 2) + ".png";
    transitionToStory.push(loadImage(trans)); //push them all into an array
  }

  for (var i = 0; i < totalgameframes; i++) { //load all the image names
    game = "assets/GAME_" + nf(i, 3) + ".png";
    game_frames.push(loadImage(game)); //push them all into an array
  }

  for (var i = 0; i < earthSpinFrames; i++) { //load all the image names
    earthspin = "assets/earthSpin02_" + nf(Math.round(i), 3) + ".png";
    earthspin_frames.push(loadImage(earthspin)); //push them all into an array
  }
  for (var i = 0; i < totalScn2frames; i++) { //load all the image names
    aftercape = "assets/AC2_" + nf(i, 3) + ".png";
    Scn2_frames.push(loadImage(aftercape)); //push them all into an array
  }
  saveme = loadSound('assets/saveme.m4a');
  cc = loadSound('assets/cc.wav');
  bg01 = loadSound('assets/bg01.mp3');
  dearEarth = loadSound('assets/DearEarthlings_01.m4a');
  cd_3 = loadSound('assets/three.m4a');
  cd_2 = loadSound('assets/two.m4a');
  cd_1 = loadSound('assets/one.m4a');
  cd_fly = loadSound('assets/fly.m4a');
  asteroid = loadImage('assets/asteroid.png');

}

//scene 1
function bgmusic() {
  if (!bgplaying) {
    bg01.setVolume(0.1);
    bg01.play();
    bgplaying = true;
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
centerH = (windowWidth / 2);
  //scene7, calibration
  gd = new getCalibrationSensorValChange();
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.open(portName); // open a serial port
  loadingOvervid = document.getElementById("loadingOver");
  loadingOvervid.pause();
  spacebg = loadImage('assets/spaceEdges2.png');
  CapeCalibrationSign = createImg('assets/CapeCalibrationSign.png');
  CapeCalibrationSign.class('class7').class('bounceInDown').position((windowWidth / 2) - 443, 30);
  FlightSchoolSign = createImg('assets/FlightSchoolSign.png');
  FlightSchoolSign.class('class3').class('bounceInDown').class('sign');

  function playVid() {
    loadingOvervid.play();
  }




  for (var i = 0; i < turboTotalFrames; i++) { //load all the image names
    turbo = "assets/TurboA_" + nf(i, 3) + ".png";
    turbo_frames.push(loadImage(turbo)); //push them all into an array
  }
  colors = [
    color(57, 42, 48), //brown
    color(246, 209, 68), //yellow
    color(236, 115, 105), //pink 
    color(123, 200, 166), //green
    color(244, 179, 100), //orange 
    color(165, 218, 194), //light green
    color(231, 8268), //drkpink
    color(0, 166, 155) //blue
  ]

  capture = createCapture(VIDEO);
  capture.size(640, 480).position(30, 510).class('class6');
  capture.hide();
  savePhotoButton = createButton('Superhero!');
  savePhotoButton.position(700, 209).class('class6');
  savePhotoButton.mousePressed(savePicture);

  newspapertempheader = createP('The Press wants a photo!');
  newspapertempheader.class('class6').class('header').id('press');
  //scene 7 callibration
  calibrateSteadyType = createP('');
  calibrationHeader = createP('Put Your Arms Out \r\n Like This');
  calibrationHeader.class('class7').position((windowWidth / 2)-150, 200).class('header2');
  calibrateSteadyType.class('class7').id('calibrateHoldSteady');
  callibrationImage = loadImage('assets/callibration.png');


  // scene 3 flap calibration
  flapTemp1 = createImg('assets/flightTest01.gif');
  flapTemp2 = createImg('assets/turbo.gif');
  // flapTemp3 = createImg('assets/flytestpre3.png');
  var flapdiv = createDiv('');
  flapdiv.class('flapdiv');
  flapTemp1.class('class3').id('flap1').class('flap1').parent(flapdiv).position(0, 0);
  flapTemp2.class('class3').id('flap2').parent(flapdiv).position(-700, 700);
  // scene3header = createP('we need to test your flight skills, pronto');
  // scene3header.class('header2').class('class3').id('scene3header');
  // flightschoolheader = createP('FLIGHT SCHOOL');
  // flightschoolheader.class('flightschoolheader').class('class3');


  // scene 2 trigger the glove switch fist
  fist = createImg('assets/fist.png');
  fist.id('fist').class('class2').position(fistx, fisty);
  fistinst = createP('close right fist' + '\n' + 'like this to begin').id('fistinst');
  fistinst.position(fistx + 300, fisty + 400).class('class2').class('header');
  scene2header = createP('MISSION: ASTEROID');
  scene2header.class('header').class('class2').id('scene2header');
  $('#fist').hide();
  $('#fistinst').hide();
  for (var m = 0; m < totalstars; m++) {
    singlestar.push(new starfield1());
  }

  // scene 4
  scene4Script = createP('');
  scene4Script.class('class4').class('voiceover');
  currentText = scene4Script.html();
  words = split(transcript[0], '#');
  scene4button = createButton('BACK INTO READY POSITION TO PLAY');
  scene4button.position(300, 700).class('class4').class('header2').id('playbutton');
  scene4button.mouseClicked(function() {
    changeScene(5)
  });
  flysmall = createImg('assets/flying.gif');
  flysmall.class('class4');

  scene5countdown = createP('3');
  scene5countdown.class('countdown').class('class5').id('countdowntofly').position((windowWidth / 2), ((windowHeight / 2)) - 150); //subtract element width/2 and hright


  changeScene(1);
} ///SETUP ENDS

function changeScene(num) { //these only get called once, based on a sensor or keypress
  $('.class1').hide();
  $('.class2').hide();
  $('.class3').hide();
  $('.class4').hide();
  $('.class5').hide();
  $('.class6').hide();
  $('.class7').hide(); //callibration
  scene1 = false;
  scene2 = false;
  scene3 = false;
  scene4 = false;
  scene5 = false;
  scene6 = false;
  scene7 = false;
  $(document.body).removeClass('spacebg');
  $(document.body).removeClass('flighttestbg');

  if (num == 1) {
    $('.class1').show();
    scene1 = true;

  }
  if (num == 2) {
    scene1 = false;
    scene2 = true;
    $('.class2').show();
    $('#fist').hide();
    $('#fistinst').hide();
  }
  if (num == 3) {
    scene3 = true;
    $(document.body).addClass('flighttestbg');
    $('.class3').show();

  }
  if (num == 4) {
    scene4 = true;
    $(document.body).addClass('spacebg');
    $('.class4').show();
  }
  if (num == 5) {
    scene5 = true;
    $('.class5').show();
  }
  if (num == 6) {
    scene6 = true;
    $('.class6').show();
  }
  if (num == 7) {
    playcc();
    $('.class7').show();
    scene7 = true;
    timer = setTimeout(function() {
      CalibrationgetCalibrationSensorValChangeges();
    }, 3000);


  }
} //function ends







function draw() {
  centerH = (windowWidth / 2);
  bgmusic();
  clear();

  if (scene2 == true) {
    scene2 = true;
    scene1 = false;
    // console.log(Scn2frmct);
    Scn2frmct++;
    for (var o = 0; o < totalstars; o++) {
      singlestar[o].display();
      singlestar[o].twinkle();
    }
    if (Scn2frmct == 57) {
      playSaveMe();
    } else if (Scn2frmct > 87) {
      asteroidBounceandHit();


    }
    if (Scn2frmct == 107) {
      $('#fist').show();
      $('#fistinst').show();
      $("#fist").addClass('fistMove'); //why doesn't this work
      // var changefist

    }
    // animated earth "save me"
    if (Scn2frmct < 324) {
      image(Scn2_frames[Scn2frmct], 0, 0, windowWidth, windowWidth / aspect);
    } else {
      image(Scn2_frames[324], 0, 0, windowWidth, windowWidth / aspect);
    }
    // flying test calibration
  } else if (scene3 == true) {
    image(spacebg, 0, 0, windowWidth, windowHeight);
    if (readyfortrans == true) {
      // transitionCounter++;
      transitionTicker=transitionTicker+.3;
      image(transitionToStory[round(transitionTicker)], 0, 0, windowWidth, windowWidth / aspect);
      if (transitionTicker > 12) {
        scene3 = false;
        scene4 = true;
        changeScene(4);
      }
    }

    for (var i = 0; i < arrayOfBalls.length; i++) {
      arrayOfBalls[i].display(); //display them all
      arrayOfBalls[i].explode(); //explode them all
    }

    for (var i = 0; i < arrayOfBalls.length; i++) {

      if (arrayOfBalls[i].size === 0) {
        arrayOfBalls.splice(i, 1);
      }
    }

  } else if (scene4 === true) {
    // image(asteroid, 100, 100, 40, 40);
    Scn4_textcounter++;
    var orbitRadius = 250;
    var circl = map(millis() / 10, 0, 440, 0, PI / 3); //i'll figure this out later
    var circy = sin(circl) * orbitRadius + 435;
    var circx = cos(circl) * orbitRadius + 810;
    flyingOrbitRate = (flyingOrbitRate + .21);
    flysmall.position(circx, circy).size(100, 100).rotate(180 + flyingOrbitRate);
    dearEarthVO();
    noFill();
    strokeWeight(15);
    stroke(0, 166, 255);
    ellipse(880, 420, 500, 500);

    if (Scn4_textcounter > 50) {
      asteroidHitandBounce();
    }

    if (Math.round(Scn4_frmct) >= earthSpinFrames) {
      Scn4_frmct = 0;
    }
    image(earthspin_frames[Math.round(Scn4_frmct)], 710, 280, 300, 300);
    Scn4_frmct = Scn4_frmct + .3;

    if (Scn4_textcounter - lastCue > timings[index]) {
      currentText = scene4Script.html();
      lastCue = Scn4_textcounter;
      index = index + 1;
    }
    scene4Script.html(currentText + words[index]);


  } else if (scene5 == true) {
    background(246, 209, 66);
    dearEarth.stop();
    image(game_frames[currentframe], 0, 0, windowWidth, windowWidth / aspect);
    image(turbo_frames[turboFrameNum], 0, 0, windowWidth, windowWidth / aspect);

    Scn5_frmct++;

    if (Scn5_frmct > 3000) {
      changeScene(6);

    }

    if (Scn5_frmct == 1) {
      cd_3.play();
    }
    if (Scn5_frmct == 60) {
      cd_2.play();
    }
    if (Scn5_frmct == 120) {
      cd_1.play();
    }
    if (Scn5_frmct == 180) {
      cd_fly.play();
    }
    if (Scn5_frmct > 60 && Scn5_frmct < 120) {
      // console.log('TWO!')

      document.getElementById('countdowntofly').innerHTML = '2';
    } else if (Scn5_frmct > 120 && Scn5_frmct < 180) {
      // console.log('ONE!')
      document.getElementById('countdowntofly').innerHTML = '1';
    } else if (Scn5_frmct > 180 && Scn5_frmct < 240) {
      document.getElementById('countdowntofly').innerHTML = 'FLY!';
    } else if (Scn5_frmct == 240) {
      document.getElementById('countdowntofly').innerHTML = '';
      counter = setInterval(timer, 33); //1000 will  run it every 1 second
    }

  } else if (scene6 == true) {
    background(57, 42, 48);
    image(img, 0, 0);


  } else if (scene7 == true) {
    background(246, 209, 66);
    image(spacebg, 0, 0, windowWidth, windowHeight);
    image(callibrationImage, (windowWidth / 2) - 200, (windowHeight / 2) - 200, 400, 400);

    textSize(20);
    textAlign(CENTER);
    text('raw value     ' + inData2, 80, 60);
    // text('fluctuation     ' + distanceofvalues, 40, 80);
    gd.display();
    SensorVal = inData2;


    if (calibrateFinal == true) {
      textSize(60);
      text('GREAT! YOU ARE READY \r\n FOR FLIGHT SCHOOL', windowWidth / 2, (windowHeight / 2) - 60);
      // console.log('User Resting Num is:' + UserArmOutNum)
      calcountdown = window.setInterval(function() {
        calibrationOver();
      }, 5000); //wait 5 seconds

    }

    if (sceneNextScene == true) {
      background(0);
    }


    if (callibrationStage === true) {
      textSize(30);
      text('PUT ARMS OUT LIKE THIS\r\n(AND HOLD STILL!)', windowWidth / 2, 120);
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
      var t = document.getElementById('calibrateHoldSteady');
      t.innerHTML = '';
      textSize(30);
      textAlign(CENTER);
      text('PUT ARMS OUT LIKE THIS\r\n(AND HOLD STILL!)', windowWidth / 2, 120);
      textSize(60);
      if (distanceofvalues > 6) {

        t.innerHTML = 'NOT STEADY';
        // text("NOT STEADY ENOUGH", windowWidth / 2, 580);
      } else if (distanceofvalues < 6) {
        t.innerHTML = 'STEADY';
        // text("STEADY   ", windowWidth / 2, 580);
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



} ///DRAW ENDS////////




// soon to be replaced with sensor detection
function keyPressed() {

  if (scene2 === true) { //do we go here anymore?
    if (keyCode === ENTER) {
      // console.log('scene2end');
      scene3 = true; //Backstory
      changeScene(3);
      scene2 = false;

    }

  } else if (scene3 === true) { //flightschool
    if (keyCode === ENTER) {
      scene3 = false;
      changeScene(4); //backstory
      scene4 = true;

    }
    if (keyCode === 65 || keyCode === 97) { //A KEY
      $("#flap1").addClass('flyaway'); //why doesn't this work
      $("#flap2").addClass('fly-in'); //why doesn't this work
      $("#flap2").addClass('flyfrombottomclass'); //why doesn't this work

      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }


    } else if (keyCode === 66 || keyCode === 98) { //B KEY
      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }

    } else if (keyCode === 67 || keyCode === 99) { //C KEY

      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }
      readyfortrans = true;


    }
  } else if (scene1 === true) {
    if (keyCode === ENTER) {
      $('#loadingvideo').hide();
      $('#loadingOver').show();
      loadingOvervid.play();
      $('video#loadingOver').bind('ended', function() {
        $('#loading').remove();
        changeScene(7);
      });
      // EndIntro();
      // // scene7 = true;
      // // changeScene(7);

    }
  } else if (scene7 === true) {
    if (keyCode === ENTER) {
      changeScene(3); //flightschool
    }
  } else if (scene4 === true) {
    if (keyCode === ENTER) {
      changeScene(5);
    }
  } else if (scene5 === true) { //game
    if (keyCode === ENTER) {
      changeScene(6);
    }
    if (key === ' ') {
      currentframe++; //this will be a sensor later
    }
    if (keyCode === 65 || keyCode === 97) { //a
      runTurbo(); //this will be a sensor later

    }
    // return false;
  } else if (scene6 === true) {
    if (keyCode === ENTER) {
      changeScene(2);
    }
  } else if (scene7 === true) {
    if (keyCode === ENTER) {
      changeScene(3);
    }
  }


} ///KEYPRESS ENDS/////////////




function loadfirstinstruction() {
  $('.class2').show();

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function myHandler(e) {
  scene1 = false;
  scene7 = true;
  changeScene(7);
}

function toCalibration() {
  if ($('#loading').is(':visible')) {
    $('#loadingvideo').hide();
  }
  scene1 = false;
  scene7 = true;
  changeScene(7);
}

function EndIntro() {

  if ($('#loadingvideo').is(':visible')) {
    $('#loadingvideo').hide();
  }
  scene1 = false;
  scene7 = true;
  changeScene(7);


}



function asteroidHitandBounce() {
  var targetsize = 100;
  var targetastx = 600 + random(-50, 50);
  var targetasty = 400 + random(-50, 50);
  ast_x += (targetastx - ast_x) * .01;
  ast_y += (targetasty - ast_y) * .01;
  ast_size -= (ast_size - targetsize) * .05;
  image(asteroid, ast_x, ast_y, ast_size, ast_size);

}



function timer() {
  count = count - .03333;
  var adjustedTimer = String(Math.round(count * 100) / 100);
  document.getElementById("timer").innerHTML = adjustedTimer.replace('.', ':'); // watch for spelling
  if (count <= 0) {
    // console.log('setting GAME OVER');
    document.getElementById('countdowntofly').innerHTML = 'GAME OVER';
    clearInterval(counter);
  }


} ////TIMER ENDS


function savePicture() {
  save(canvas);
}

function runTurbo() {
  if (turboFrameNum < turboTotalFrames - 1) {
    turboFrameNum++;
  }
  if (turboFrameNum = turboTotalFrames - 1) {
    turboFrameNum = 0;
  }

}


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
    calibrateFinal = true;
  }
}

function getCalibrationSensorValChange() {
  this.currentVal = SensorVal;
  // console.log('cv' + this.currentVal);
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
    // console.log(callibrationCountdown);
    Math.round(callibrationCountdown--);
  }, 1000);
}

function calibrationOver() {
  if (calibrateFinal == true) {
    calibrateFinal = false;
    changeScene(3); //switch to flgiht school
  }
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

function serialEvent() {
  var inString = serial.readStringUntil('\r\n');
  if (inString.length > 0) {
    var sensors = split(inString, ',');
    inData2 = int(sensors[0]);
    console.log(inData2);
  }
}