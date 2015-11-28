//all scenes
var shadow;
var centerH = 0;
var spacebg;
var earthspin;
var earthspin_frames = [];
var scene1 = true;
var scene2 = false;
var scene3 = false;
var scene4 = false;
var scene5 = false;
var scene6 = false;
var scene7 = false; //callibration scene
var count = 30;
var counter;
var cd_3, cd_2, cd_1, cd_fly, game, inst, saveme, bg01, asteroid, scene3header, scene2header, flapTemp, dearEarth, scene5countdown, cappink, capblue;
var instscaledown = 300;
var colors;
var fist, fistinst;
var fistx = -100;
var fisty = 200;

//scene2
var Scn2_frames = [];
var Scn2frmct = 0;

//scene3
var totalParticles = 12; //number of total particles
var arrayOfBalls = []; //empty array to be filled
var arrayOfLines = [];
var flightschool1;
// var flightschoolheader;
var flap1type, flap2type;
var FlightSchoolSign;
var cloud;
var Allclouds = [];
var cloudMovex = 0;
var Scn3_frmct = 0;


//scene4
var asteroidHit;
var scene4Script;
var Scn4_textcounter = -30;
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
//FFParticle
var particles = [];
var flyingSize = 100;
var ffcenterX = 900;
var ffcenterY = 300;
var angle = 0;
var firstround = true;
var orbitRadius = 250;
var switchAstMove = false;


// scene5
var secondMarkerGame = 30;
var scene, camera, renderer;
var camZ = 30000;
var camY = 0;
var moveforwardRate = 0; //if 16...it will go 28,800 px is 30 sec
var sun, earth, building;
var bgcolor;
var gmapped = 0;
var rmapped = 0;
var bmapped = 0;
var light2;
var r;
var g;
var b;
var sliderTempCamMove;
var UserArmNum = 500;
var range1 = 0;
var range2 = 0;
var range3 = 0;
var turbo;
var turbo_frames = [];
var turboFrameNum = 0;
var turboTotalFrames = 30;
var currentframe = 0;
var Scn5_frmct = 0;
var transitionCounter = 0;
var gameTimeSecInterval;

//scene6 //photobooth
var canvas, capture, mycam, button, img;
var newspaperImage;

//scene7 callibration
var calimgX, calimgY;
var calibrationStillGoing = true;
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
var CapeCalibrationSign;
var cc;
var isccplaying = false;

var transitionToStory = [];
var trans;
var readyfortrans;
var transitionTicker = 0;

//scene 6
var Scene6counter = 0;
var newspaperRotate = 0;
var newspaperscale = 0;
// var newspapertempheader;



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

  img = loadImage('assets/newspaper.PNG');

  for (var i = 0; i < 13; i++) { //load all the image names
    trans = "assets/spaceCompress_" + nf(i, 2) + ".png";
    transitionToStory.push(loadImage(trans)); //push them all into an array
  }

  for (var i = 0; i < totalgameframes; i++) { //load all the image names
    game = "assets/GAME_" + nf(i, 3) + ".png";
    game_frames.push(loadImage(game)); //push them all into an array
  }

  for (var i = 0; i < 4; i++) { //load all the image names
    cloud = "assets/cloud_" + nf(i, 2) + ".png";
    Allclouds.push(loadImage(cloud)); //push them all into an array
  }

  cc = loadSound('assets/cc.wav');
  bg01 = loadSound('assets/bg01.mp3');
  dearEarth = loadSound('assets/DearEarthlings_01.m4a');
  cd_3 = loadSound('assets/three.m4a');
  cd_2 = loadSound('assets/two.m4a');
  cd_1 = loadSound('assets/one.m4a');
  cd_fly = loadSound('assets/fly.m4a');

  //scene4
  saveme = loadSound('assets/saveme.m4a');
  asteroid = loadImage('assets/asteroid2.png');
  transcript = loadStrings('assets/script.txt');
  for (var i = 0; i < earthSpinFrames; i++) { //load all the image names
    earthspin = "assets/earthSpin02_" + nf(Math.round(i), 3) + ".png";
    earthspin_frames.push(loadImage(earthspin)); //push them all into an array
  }

} /////////PRELOAD ENDS///////

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
      color(231, 82, 68), //drkpink
      color(0, 166, 155) //blue
    ]
    //scene6
  savePhotoButton = createButton('Superhero!');
  savePhotoButton.position(700, 209).class('class6');
  savePhotoButton.mousePressed(savePicture);
  // newspapertempheader = createP('The Press wants a photo!');
  // newspapertempheader.class('class6').class('header').id('press');
  newspaperImage = createImg('assets/newspaper.png');
  newspaperImage.class('class6');
  capture = createCapture(VIDEO);
  capture.size(570, 436).position(30, 510).class('class6');
  capture.hide();


  //scene 7 callibration
  calibrateSteadyType = createP('');
  calibrationHeader = createP('Put Your Arms Out \r\n Like This');
  calibrationHeader.class('class7').position((windowWidth / 2) - 240, 150).class('header3');
  calibrateSteadyType.class('class7').id('calibrateHoldSteady');
  callibrationImage = loadImage('assets/Callibration.png');
  shadow = loadImage('assets/shadow.png');
  CapeCalibrationSign = createImg('assets/CapeCalibrationSign.png');
  CapeCalibrationSign.class('class7').position((windowWidth / 2) - 443, 30);


  // scene 3 flight test
  flapTemp1 = createImg('assets/flightTest01.gif');
  flapTemp2 = createImg('assets/turbo.gif');
  var flapdiv = createDiv('');
  flapdiv.class('flapdiv');
  flapTemp1.class('class3').id('flap1').class('flap1').position(windowWidth / 2 - 250, 240);
  flapTemp2.class('class3').id('flap2').size(462, 440).position(windowWidth / 2 - 250, 240).class('flyIn3');
  $("#flap2").hide();
  FlightSchoolSign = createImg('assets/FlightSchoolSign.png');
  FlightSchoolSign.class('class3').class('sign');


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

  //scene5
  sliderTempCamMove = createSlider(0, 1000, 500);
  sliderTempCamMove.position(0, 0).class('class5');
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
  $(document.body).removeClass('pressbg');
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
    $("#flap2").hide();

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
    $(document.body).addClass('pressbg');
    newspaperImage.addClass('rotate');
    capture.addClass('rotate');
  }
  if (num == 7) {
    playcc();
    $('.class7').show();
    scene7 = true;
    timer = setTimeout(function() {
      CalibrationSensorValChangeges();
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
    // if (Scn2frmct < 324) {
    //   image(Scn2_frames[Scn2frmct], 0, 0, windowWidth, windowWidth / aspect);
    // } else {
    //   image(Scn2_frames[324], 0, 0, windowWidth, windowWidth / aspect);
    // }
    // flying test calibration
  } else if (scene3 == true) {
    image(Allclouds[3], round(cloudMovex), 50);
    image(Allclouds[3], round(cloudMovex) + 1600, 350);
    image(Allclouds[0], floor(cloudMovex) + 500, 200);
    image(Allclouds[1], floor(cloudMovex) , 400);
    image(Allclouds[2], round(cloudMovex) + 800, 300);

    image(spacebg, 0, 0, windowWidth, windowHeight);
    if (frameCount % 15 == 0) {
      cloudMovex = cloudMovex + 1;
      // console.log('move' + cloudMovex);
    }

    textAlign(CENTER);
    fill(0, 0, 0);
    textSize(35);
    // text('Your Speed', windowWidth * .66, windowHeight / 2 - 120);
    // text('MPH', windowWidth * .66, windowHeight / 2 +45);
    textSize(70);
    // text(UserArmOutNum, windowWidth * .66, windowHeight / 2 - 35);
    if (readyfortrans == true) {
      transitionTicker = transitionTicker + .3;
      image(transitionToStory[round(transitionTicker)], 0, 0, windowWidth, windowHeight);
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


    Scn4_textcounter++;
    dearEarthVO();
    if (Scn4_textcounter - lastCue > timings[index]) {
      currentText = scene4Script.html();
      lastCue = Scn4_textcounter;
      index = index + 1;
    }
    scene4Script.html(currentText + words[index]);

    Scn4_textcounter++;
    angleMode(DEGREES);
    angle = angle + .5;
    if (angle > 360) {
      angle = 0;
      firstround = false;
    }


    var circl = map(millis(), 0, 30000, 0, 10); //30 sec to ten?
    var offsetX = ffcenterX;
    var offsetY = ffcenterY;
    var circx = cos(angle) * orbitRadius + ffcenterX + orbitRadius / 2 - 30;
    var circy = sin(angle) * orbitRadius + ffcenterY + orbitRadius / 2 - 30;
    flyingOrbitRate = (flyingOrbitRate + .55);
    flysmall.position(circx, circy).size(flyingSize, flyingSize).rotate(180 + flyingOrbitRate);


    if (Scn4_textcounter > 850) {
      asteroidHitandBounce();
    }

    if (Math.round(Scn4_frmct) >= earthSpinFrames) {
      Scn4_frmct = 0;
    }

    image(earthspin_frames[Math.round(Scn4_frmct)], ffcenterX, ffcenterY, 300, 300); //center of circle
    Scn4_frmct = Scn4_frmct + .3;


    if (angle < 360 && firstround == true) {
      particles.push(new FFParticle(circx + flyingSize / 2, circy + flyingSize / 2));
    }

    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].display();
    }

    if (Math.round(Scn4_frmct) == 3) {
      playSaveMe();
    }


  } else if (scene5 == true) {
    // background(246, 209, 66);
    dearEarth.stop();
    // image(game_frames[currentframe], 0, 0, windowWidth, windowWidth / aspect);
    // image(turbo_frames[turboFrameNum], 0, 0, windowWidth, windowWidth / aspect);

    Scn5_frmct++;

//     if (Scn5_frmct > 3000) {
//       changeScene(6);
// }

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
    if (Scn5_frmct>180){
      timerStopwatch();
    }
    gameTimeSecInterval = window.setInterval(function() {//
        secondMarkerGame--;
      }, 1000); //wait 5 seconds
    // document.getElementById('secondMarkerGame').innerHTML = round(secondMarkerGame);
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
    newspaperImage.position(windowWidth*.13,windowHeight*.12);
    capture.position(450, 500);
    Scene6counter++;
    if (Scene6counter < 50) {
      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }
    }


  } else if (scene7 == true) {
    background(246, 209, 66);
    image(spacebg, 0, 0, windowWidth, windowHeight);

    image(callibrationImage, calimgX, calimgY, 400, 400);
    image(shadow, windowWidth, windowHeight);

    textSize(20);
    textAlign(CENTER);
    text('raw value     ' + inData2, 80, 60);
    // text('fluctuation     ' + distanceofvalues, 40, 80);
    gd.display();
    SensorVal = inData2;


    if (calibrateFinal == true) {
      calimgX = calimgX + 5;
      calimgY = calimgY - 5;
      textSize(100);

      text('YOU ARE READY \r\n FOR FLIGHT SCHOOL', windowWidth / 2, (windowHeight / 2) - 160);

      calcountdown = window.setInterval(function() {//
        calibrationOver();//once over call this
      }, 5000); //wait 5 seconds
    }



    if (callibrationStage === true) {
      textSize(80);
      text('HOLD STEADY FOR:  ' + callibrationCountdown, windowWidth / 2, 710);
      calimgX = (windowWidth / 2) - 200;
      calimgY = (windowHeight / 2) - 160;

      if (callibrationCountdown <= 0) {
        CalibrationSensorValChangeges2();
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
      calimgX = (windowWidth / 2) - 200;
      calimgY = (windowHeight / 2) - 160;
      text('PUT ARMS OUT LIKE THIS\r\n(AND HOLD STILL!)', windowWidth / 2, 120);
      textSize(60);
      if (distanceofvalues > 6) {

        t.innerHTML = 'NOT STEADY';
      } else if (distanceofvalues < 6) {
        t.innerHTML = 'STEADY';
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
        CalibrationSensorValChangeges();
      }, 3000);



    }

  } //scene 7 ends



} ///DRAW ENDS////////




// soon to be replaced with sensor detection
function keyPressed() {

  if (scene2 === true) { //do we go here anymore?
    if (keyCode === ENTER) {
      scene3 = true; //Backstory
      changeScene(3);
      $("#flap2").hide();
      scene2 = false;

    }

  } else if (scene3 === true) { //flightschool
    if (keyCode === ENTER) {
      scene3 = false;
      changeScene(4); //backstory
      scene4 = true;

    }
    if (keyCode === 65 || keyCode === 97) { //A KEY // 'speed == 100mph'
      $("#flap1").addClass('FlyAway2');
      $("#flap2").show();
      document.getElementById('targetSpeed').innerHTML = '600';
      $("#flap2").addClass('FlyIn3');


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
      // currentframe++; //this will be a sensor later
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

//scene1
function EndIntro() {
  if ($('#loadingvideo').is(':visible')) {
    $('#loadingvideo').hide();
  }
  scene1 = false;
  scene7 = true;
  changeScene(7);
}


//scene4
function asteroidHitandBounce() {
  var targetastx = ffcenterX - 150;
  var targetasty = ffcenterY;
  var targetastx2 = 300;
  var targetasty2 = 1200;
  // console.log('dist:' + dist(ast_x, ast_y, targetastx, targetasty))
  if (dist(ast_x, ast_y, targetastx, targetasty) < 10) {
    switchAstMove = true;
  }
  if (switchAstMove == false) {
    var targetsize = 100;

    ast_x += (targetastx - ast_x) * .011;
    ast_y += (targetasty - ast_y) * .011;
    ast_size -= (ast_size - targetsize) * .05;
    image(asteroid, ast_x, ast_y, ast_size, ast_size);
  }
  if (switchAstMove == true) {
    ast_x += (targetastx2 - ast_x) * .015;
    ast_y += (targetasty2 - ast_y) * .015;

    image(asteroid, ast_x, ast_y, ast_size, ast_size);
  }

}

function FFParticle(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.initSize = random(5, 12);
  this.straySize = random(10, 35);
  this.size = this.initSize;
  this.h = 120 + random(70, 120);
  this.s = 100;
  this.b = 100;
  this.a = random(0.1, 1.0);
  this.spd = random(0.02, 0.08);
  this.noiseX = 0;
  this.noiseY = 0;
  this.noiseSpdX = random(0.001, 0.02);
  this.noiseSpdY = random(0.001, 0.02);

  this.update = function() {
    this.size = this.initSize + sin(frameCount * this.spd) * 8;
    this.noiseX = (noise(frameCount * this.noiseSpdX) - 0.5) * 20;
    this.noiseY = (noise(frameCount * this.noiseSpdY) - 0.5) * 20;
  }

  this.display = function() {
    push();
    noStroke();
    colorMode(HSB);
    fill(this.h, this.s, this.b, this.a);
    ellipse(this.x + this.straySize + this.noiseX, this.y + this.straySize + this.noiseY, this.size, this.size);

    ellipse(this.x + this.straySize + this.noiseX, this.y + this.straySize + this.noiseY, this.size, this.size);
    pop();
  }
}


//scene5
function timerStopwatch() {
  count = count - .03333;
  var adjustedTimer = String(Math.round(count * 100) / 100);
  console.log(count+"//"+ adjustedTimer);
  document.getElementById("timerStopWatch").innerHTML = adjustedTimer.replace('.', ':'); // watch for spelling
  if (count <= 0) {
    // console.log('setting GAME OVER');
    document.getElementById('countdowntofly').innerHTML = 'GAME OVER';
    clearInterval(counter);
  }


} ////TIMER ENDS

//scene6
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

//scene7
function CalibrationSensorValChangeges() {
  if (callibrationPreStage == true) {

    callibrationPreStage = false;
    callibrationStage = true;
    Begincountdown();//move onto real countdown
  }
}

function CalibrationSensorValChangeges2() {
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
    Math.round(callibrationCountdown--);//every second do this.
  }, 1000);
}

function calibrationOver() {
  if (calibrateFinal == true) {
    calibrateFinal = false;
    changeScene(3); //switch to flight school
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