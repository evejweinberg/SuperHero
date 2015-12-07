//all scenes
var sensorConnected = false;
var timeDiv, swoosh;
var swooshplaying = false;
var AllScenesMPH = 0;
var shadow;
var centerH = 0;
var spacebg;
var earthspin;
var earthspin_frames = [];
var NumstoCallibrateDuringFlight = [];
var SensorVal;
var distanceofvalues = 0;
var MovingAverage = 0;
var CamSpeed = 0;
// var inDataGloveL = 0;
var range1 = 0,
  range2 = 0,
  range3 = 0,
  range4 = 0,
  range5 = 0,
  range6 = 0;
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
var readyforschool = false;
var totalParticles = 12; //number of total particles
var arrayOfBalls = []; //empty array to be filled
var arrayOfLines = [];
var flightschool1;
var flap1type, flap2type;
var FlightSchoolSign;
var cloud;
var Allclouds = [];
var cloudMovex = 0;
var Scn3_frmct = 0;
var scene3A = true;
var scene3B = false;


//scene4var
var squeezeFistGifX = 200,
  squeezeFistGifY = 500;
var asteroidHit;
var flythroughX = -100,
  flythroughY = 500;
var scene4Script;
var Scn4_textcounter = -30;
var index = 0;
var lastCue = 0;
var Scn4_frmct = 0;
var words = [];
var timings = [90, 120, 160, 200, 220, 230, 235, 240, 260];
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
var camspeedmax = 25;
var camY = 0;
var webGLRenderer;
var gameoverclock = 0;
var readGameOver = false;
var fuckthis = false;
var clockB = 30; //###
var countdownIdB = 0;
var Countfrom30 = parseInt(30);
var seaofMonsters;
var turbo = false;
var turbo_frames = [];
var turboFrameNum = 0;
var turboTotalFrames = 30;
var currentframe = 0;
var Scn5_frmct = 0;
var transitionCounter = 0;
var gameTimeSecInterval;
// var secondMarkerGame = 30; //change this to 30 $$$$
var sliderTempCamMove;
var scene, camera, renderer;
var camZ = 30000;

var torusY = 40;
torusMesh = [];
var cubeBs = [];
var allRainbows = [];
var Allclouds = [];
var moveforwardRate = 0; //if 16...it will go 28,800 px is 30 sec
var sun, earth, building;
var bgcolor;
var gmapped = 0;
var rmapped = 0;
var bmapped = 0;
var light2;
var r, g, b;

var keepgoing01;
// var sliderTemp;
var UserArmNum = 500;
var range1 = 0;
var range2 = 0;
var range3 = 0;
var t = 0;
var text1a, text1b, text2a, text3a, text3b;
var stars;
var numStars = 10;
var cloud;

//scene6 //photobooth
var randomScene6bg = 1;
var canvas, capture, mycam, button, img;
var newspaperImage;
var rotateDiv;
var Scene6counter = 0;
var newspaperRotate = 0;
var newspaperscale = 0;
// var newspapertempheader;

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
var distanceofvaluesFlying = 0;
var averageValpreCal = 0;
var sum = 0;
var callibrationPreStage = true;
var callibrationStage = false;
var calibrateFinal = false;
var calibrationHeader;
var sceneNextScene = false;
var timer;
var CallibratedRestingNum = 0;
var callibrationCountdown = 3;
var calcountdown;
var UserArmOutNum = 0;

//serial
var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodemfd121'; // fill in your serial port name here
var inData0, inDataGloveL; // for incoming serial data
var newDataZ, newDataY, newDataX; //alt names for incoming data
var xPos = 0;
var loadingOvervid;
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

function playSwoosh() {
  if (!swooshplaying) {
    swoosh.play();
        swoosh.setVolume(1.7);
    swooshplaying = true;
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

  for (var i = 0; i < 4; i++) { //load all the image names
    cloud = "assets/cloud_" + nf(i, 2) + ".png";
    Allclouds.push(loadImage(cloud)); //push them all into an array
  }

  cc = loadSound('assets/cc.wav');
  swoosh = loadSound('assets/swoosh2.wav');
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

function update(response) {
  // timeDiv.innerHTML = response;
  // console.log(response);
  var inString = response;
  if (inString.length > 4) {
    var sensors = split(inString, ',');
    inDataGloveL = int(sensors[0]);
    newDataZ = int(sensors[1]);
    // newDataY = int(sensors[2]);
    // newDataX = int(sensors[3]);

  }

  // var values = inString.split(",")
  // if(values.length == 2){
  //   inDataGloveL = int(values[0]);
  //   newDataZ = int(values[1]);
  //   console.log(values);
  // }

  //httpGet('/data', update);
  // graphData(response, response, response);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  centerH = (windowWidth / 2);
  calimgX = (windowWidth / 2) - 200;
  calimgY = (windowHeight / 2) - 160;
  timeDiv = document.getElementById('sensors');
  httpGet('/data', update);

  //scene7, calibration
  gd = new getCalibrationSensorValChange();
  loadingOvervid = document.getElementById("loadingOver");
  loadingOvervid.pause();
  spacebg = loadImage('assets/spaceEdges2.png');

  function playVid() {
    loadingOvervid.play();
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
  rotateDiv = createDiv('');
  back1Button = createButton('FlightSchool');
  back2Button = createButton('Calibration');
  back3Button = createButton('Hear The Mission');
  back5Button = createButton('Play Again');
  scene6buttons = createDiv('');
  scene6buttons.class('class6').id('scene6buttonholder')
  back1Button.parent(scene6buttons).class('class6').class('scene6buttons').id('playbutton');
  back2Button.parent(scene6buttons).class('class6').class('scene6buttons').id('playbutton');
  back3Button.parent(scene6buttons).class('class6').class('scene6buttons').id('playbutton');
  back5Button.parent(scene6buttons).class('class6').class('scene6buttons').id('playbutton');
  savePhotoButton = createButton('Save This Photo!').class('class6').class('scene6buttons').id('playbutton');
  savePhotoButton.position(700, 209).class('class6');
  savePhotoButton.mousePressed(savePicture);
  back1Button.mousePressed(function() {
    changeScene(3)
  });
  back2Button.mousePressed(function() {
    changeScene(7)
  });
  back3Button.mousePressed(function() {
    changeScene(4)
  });
  back5Button.mousePressed(function() {
    changeScene(5)
  });

  rotateDiv.class('class6').class('newspaperDiv');
  capture = createCapture(VIDEO);
  capture.size(580, 340).class('class6').parent(rotateDiv).id('scene6capture');
  capture.hide();
  newspaperImage = createImg('assets/newspaper2.png');
  newspaperImage.class('class6').parent(rotateDiv).id('scene6newspaper');



  //scene 7 callibration
  calibrateSteadyType = createP('');
  calibrationHeader = createP('Put Your Arms Out \r\n Like This');
  calibrationHeader.class('class7').position((windowWidth / 2) - 240, 170).class('header3');
  calibrateSteadyType.class('class7').id('calibrateHoldSteady');
  callibrationImage = loadImage('assets/Callibration.png');
  shadow = loadImage('assets/shadow.png');
  CapeCalibrationSign = createImg('assets/CapeCalibrationSign2.png');
  CapeCalibrationSign.class('class7').position((windowWidth / 2) - 443, 30);


  // scene 3 flight test
  flapTemp1 = createImg('assets/flightTest01.gif');
  flapTemp2 = createImg('assets/turbo.gif');
  var flapdiv = createDiv('');
  flapdiv.class('flapdiv');
  flapTemp1.class('class3').id('flap1').class('flap1').position(windowWidth / 2 - 250, 240);
  flapTemp2.class('class3').id('flap2').size(462, 440).position(windowWidth / 2 - 250, 240).class('flyIn3');
  $("#flap2").hide();
  FlightSchoolSign = createImg('assets/FlightSchoolSign2.png');
  FlightSchoolSign.class('class3').class('sign').position((windowWidth / 2) - 443, 30);


  for (var m = 0; m < totalstars; m++) {
    singlestar.push(new starfield1());
  }

  // scene4
  scene4Script = createP('');
  scene4Script.class('class4').class('voiceover');
  currentText = scene4Script.html();
  words = split(transcript[0], '#');
  // scene4button = createButton('SQUEEZE FIST TO BEGIN');
  // scene4button.position(300, 700).class('class4').class('header2').id('playbutton');
  // scene4button.mouseClicked(function() {
  // changeScene(7)
  // });
  flysmall = createImg('assets/flying.gif');
  flysmall.class('class4');
  // flyingOverhead = createImg('assets/flyingOverhead.png');
  flyingOverhead2 = createImg('assets/flyingOverhead.png');
  // flyingOverhead.class('flyingoverhead').position(flythroughX, flythroughY).class('huerotate').size(1400,1250);
  flyingOverhead2.class('flyingoverhead').position(flythroughX, flythroughY).size(1400, 1250);
  $('.flyingoverhead').hide();
  squeezeFistGif = createImg('assets/fist2.gif').class('class4').id('squeezeFistGif');
  squeezeFistGif.position(squeezeFistGifX, squeezeFistGifY);

  //scene5
  keepgoing01 = loadImage('assets/keepgoing01.png');
  scene5countdown = createP('3');
  scene5countdown.class('countdown').class('class5').id('countdowntofly'); //subtract element width/2 and hright


  changeScene(1);
} ///SETUP ENDS

function changeScene(num) { //these only get called once, based on a sensor or keypress
  dearEarth.stop();
  $('.class1').hide();
  $('.class2').hide();
  $('.class3').hide();
  $('.class4').hide();
  $('.class5').hide();
  $('.class6').hide();
  $('.class7').hide(); //callibration
  $('.gamveoverDiv').hide();
  $('.flyingoverhead').hide();
  $('#squeezeFistGif').hide();
  scene1 = false;
  scene2 = false;
  scene3 = false;
  scene4 = false;
  scene5 = false;
  scene6 = false;
  scene7 = false;
  $(document.body).removeClass('spacebg');
  $(document.body).removeClass('yellowbg');
  $(document.body).removeClass('pressbg');
  $(document.body).removeClass('pressbg2');
  $(document.body).removeClass('pressbg3');
  $(document.body).removeClass('flighttestbg');
  Scn5_frmct = 0;
  Scn4_frmct = 0;
  camZ = 30000;
  camY = 0;

  if (num == 1) {
    $('.class1').show();
    scene1 = true;

  }
  if (num == 2) {
    scene1 = false;
    scene2 = true;
    $('.class2').show();
  }
  if (num == 3) {
    scene3 = true;

    // $(document.body).addClass('flighttestbg');
    $('.class3').show();
    $("#flap2").hide();
    dearEarth.stop();

  }
  if (num == 4) {
    scene4 = true;
    Scn4_textcounter = 0;
    Scn4_frmct = 0;
    $(document.body).addClass('spacebg');
    $('.flyingoverhead').show();
    $('.class4').show();
    $('#squeezeFistGif').hide();
  }
  if (num == 5) {
    scene5 = true;
    fuckthis = true;
    camZ = 30000;
    camY = 0;
    $('.class5').show();
    $('#userSpeedDiv').hide();
    $('.gamveoverDiv').hide();
  }
  if (num == 6) {
    randomScene6bg = round(random(1, 3));
    Scn5_frmct = 0;
    camZ = 30000;
    camY = 0;
    scene6 = true;
    $('.class6').show();
    // $(document.body).addClass('pressbg');
    if (randomScene6bg == 1) {
      $(document.body).addClass('pressbg');
    } else if (randomScene6bg == 2) {
      $(document.body).addClass('pressbg2');
    } else if (randomScene6bg == 3) {
      $(document.body).addClass('pressbg3');
    }
    rotateDiv.addClass('rotate');

  }
  if (num == 7) {
    playcc();
    $('.class7').show();
    $(document.body).addClass('yellowbg');
    scene7 = true;
    timer = setTimeout(function() {
      CalibrationSensorValChangeges();
    }, 3000);


  }
} //function ends







function draw() {

  // console.log('distancePlayingGame   ' + distanceofvaluesFlying);
  // console.log('array length sc7   ' + NumstoCallibrate.length)
  // console.log(CallibratedRestingNum)
    // console.log('moving average' + MovingAverage);
    // windowResized();
  httpGet('/data', update);


  centerH = (windowWidth / 2);
  AverageAcellerometerNums();
  getSpeed();
  bgmusic();
  clear();
  if (scene1 === true) {
    if (inDataGloveL === 1) {
      $('#loadingvideo').hide();
      $('#loadingOver').show();
      loadingOvervid.play();
      $('video#loadingOver').bind('ended', function() {
        $('#loading').remove();
        changeScene(4);
      });


    }
  } else if (scene2 == true) {


  } else if (scene3 == true) {
    document.getElementById("yourSpeed").innerHTML = AllScenesMPH;
    if (scene3A == true) {

      if (AllScenesMPH > 100) {
        $("#flap1").addClass('FlyAway2');
        $("#flap2").show();
        document.getElementById('targetSpeed').innerHTML = '450';
        $("#flap2").addClass('FlyIn3');
        scene3A = false;
        scene3B = true;
      }
    }
    if (scene3B == true) {
      if (AllScenesMPH > 450) {
        for (var l = 0; l < 12; l++) {
          torus = createMesh(new THREE.TorusGeometry(37, 4, 10, 6, Math.PI * 2));
          torus.position.z = (camZ - 500) + (l * 30);
          torus.position.x = 0;
          torus.position.y = camY;
          scene.add(torus);
          torusMesh.push(torus);
        }
        // for (var i = 0; i < totalParticles; i++) {

        //   arrayOfBalls.push(new flapWin1(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        //   arrayOfBalls.push(new flapWin2(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
        // }
        readyfortrans = true;

      }
    }

    image(Allclouds[3], round(cloudMovex), 50);
    image(Allclouds[3], round(cloudMovex) + 1600, 350);
    image(Allclouds[0], floor(cloudMovex) + 500, 200);
    image(Allclouds[1], floor(cloudMovex) + 300, 400);
    image(Allclouds[2], round(cloudMovex) + 1000, 100);

    image(spacebg, 0, 0, windowWidth, windowHeight);
    if (frameCount % 30 == 0) {
      cloudMovex = cloudMovex + 2;
      // console.log('move' + cloudMovex);
    }

    if (readyfortrans == true) {
      transitionTicker = transitionTicker + .3;
      image(transitionToStory[round(transitionTicker)], 0, 0, windowWidth, windowHeight);
      if (transitionTicker > 12) {
        changeScene(5);
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

  } else if (scene4 === true) { //mission story
    playSwoosh();
    if (inDataGloveL === 1) {
      changeScene(7);
    }
    fill(255, 0, 0);
    // flyingOverhead.position(flythroughX - 40, flythroughY + 40);
    flyingOverhead2.position(flythroughX, flythroughY);
  

    flythroughX = flythroughX + 20;
    flythroughY = flythroughY - 20;
    if (flythroughX > windowWidth + 400) {
      $('.flyingoverhead').hide();
    }


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

    squeezeFistGif.position(squeezeFistGifX, squeezeFistGifY);
    if (Scn4_textcounter > 950) {
      $('#squeezeFistGif').show();
      squeezeFistGifY = squeezeFistGifY - 20;
      if (squeezeFistGifY < 400) {
        squeezeFistGifY = 400;
      }
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



  } else if (scene5 == true) {

    Scn5_frmct++;
    if (readGameOver == true) {
      gameoverclock++;
      if (gameoverclock > 240) {
        changeScene(6);
      }

    }
    if (Scn5_frmct > 180) {
      if (fuckthis == true) {
        CountDownTry4();
      }



    }
    if (AllScenesMPH > 480) {//hitting turbo
      for (var l = 0; l < 12; l++) {
        torus = createMesh(new THREE.TorusGeometry(37, 4, 10, 6, Math.PI * 2));
        torus.position.z = (camZ - 500) + (l * 30);
        torus.position.x = 0;
        torus.position.y = camY;
        scene.add(torus);
        torusMesh.push(torus);
      }
    }


    if (Scn5_frmct > 980 && Scn5_frmct < 1280) {
      image(keepgoing01, 0, 450);
    }
    document.getElementById("update-speed").innerHTML = AllScenesMPH;

    dearEarth.stop();



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
      document.getElementById('countdowntofly').innerHTML = '2';
    } else if (Scn5_frmct > 120 && Scn5_frmct < 180) {
      // console.log('ONE!')
      document.getElementById('countdowntofly').innerHTML = '1';
    } else if (Scn5_frmct > 180 && Scn5_frmct < 240) {
      document.getElementById('countdowntofly').innerHTML = 'FLY!';
    } else if (Scn5_frmct == 240) {
      $('#userSpeedDiv').show();
      document.getElementById('countdowntofly').innerHTML = '';
      counter = setInterval(timer, 33); //1000 will  run it every 1 second
    }

  } else if (scene6 == true) {

    // capture.position(465, 440);
    // newspaperImage.position(windowWidth * .13, windowHeight * .12);

    // filter('INVERT');
    Scene6counter++;
    for (var i = 0; i < arrayOfBalls.length; i++) {
      arrayOfBalls[i].display(); //display them all
      arrayOfBalls[i].explode(); //explode them all
    }

    for (var i = 0; i < arrayOfBalls.length; i++) {

      if (arrayOfBalls[i].size === 0) {
        arrayOfBalls.splice(i, 1);
      }
    }
    if (Scene6counter < 10) {
      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }
    }


  } else if (scene7 == true) {
    image(spacebg, 0, 0, windowWidth, windowHeight);
    image(callibrationImage, calimgX, calimgY, 400, 400);
    image(shadow, (windowWidth / 2) - 92, windowHeight * .73);
    console.log('distanceScn7  ' + distanceofvalues);

    SensorVal = newDataZ;


    if (calibrateFinal == true) {
      calimgX = calimgX + 7;
      calimgY = calimgY - 7;
      textSize(100);
      textAlign(CENTER);
      text('YOU ARE READY \r\n FOR FLIGHT SCHOOL', windowWidth / 2, windowHeight / 2);
      readyforschool = true;

      $('.bluebgup').animate({
        height: '900'
      }, 1200);



      calcountdown = window.setInterval(function() { //
        calibrationOver(); //once over call this
      }, 3000); //wait 5 seconds
    }



    if (callibrationStage === true) {
      textSize(80);
      textAlign(CENTER);
      text('HOLD STEADY FOR:  ' + callibrationCountdown, windowWidth / 2, 730);
      calimgX = (windowWidth / 2) - 200;
      calimgY = (windowHeight / 2) - 160;

      if (callibrationCountdown <= 0) {
        CalibrationSensorValChangeges2();
        window.clearInterval(calcountdown);
      }
      textSize(20);
      // text('resting value    ' + CallibratedRestingNum, 40, 150);
      NumstoCallibrate.push(newDataZ); //now that we're steady, lets gather the actual number
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
      // t.position(100,100)
      textSize(30);
      textAlign(CENTER);
      calimgX = (windowWidth / 2) - 200;
      calimgY = (windowHeight / 2) - 160;
      textSize(60);
      if (distanceofvalues > 6) {
        textSize(80);
        textAlign(CENTER);
        text('NOT STEADY ENOUGH', windowWidth / 2, 730);

        // t.innerHTML = 'NOT STEADY';
      } else if (distanceofvalues < 6) {
        // t.innerHTML = 'HOLD STEADY FOR ' + callibrationCountdown;
        textSize(80);
        textAlign(CENTER);
        text('HOLD STEADY', windowWidth / 2, 730);
      }

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




// in addition to sensor detection
function keyPressed() {

  if (scene3 === true) { //flightschool

    if (keyCode === 65 || keyCode === 97) { //A KEY // 'speed == 100mph'
      $("#flap1").addClass('FlyAway2');
      $("#flap2").show();
      document.getElementById('targetSpeed').innerHTML = '500';
      $("#flap2").addClass('FlyIn3');


      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }


    } else if (keyCode === 67 || keyCode === 99 || keyCode === ENTER) { //C KEY
      // for (var l = 0; l < 12; l++) {
      //   console.log('turbo was hit')
      //   torus = createMesh(new THREE.TorusGeometry(37, 4, 10, 6, Math.PI * 2));
      //   torus.position.z = (camZ - 500) + (l * 30);
      //   torus.position.x = 0;
      //   torus.position.y = camY;
      //   scene.add(torus);
      //   torusMesh.push(torus);
      // }

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
        changeScene(4);
      });

    }
  } else if (scene7 === true) {
    if (keyCode === ENTER) {
      changeScene(3); //flightschool
    }
  } else if (scene4 === true) {
    if (keyCode === ENTER) {
      changeScene(7);
    }
  } else if (scene5 === true) { //game
    if (keyCode === ENTER) {
      changeScene(6);
    }
  } else if (scene6 === true) {
    // if (keyCode === ENTER) {
    //   changeScene(2);
    // }
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
  if (dist(ast_x, ast_y, targetastx, targetasty) < 19) {
    switchAstMove = true;
  }
  if (switchAstMove == false) {
    var targetsize = 120;

    ast_x += (targetastx - ast_x) * .015;
    ast_y += (targetasty - ast_y) * .015;
    ast_size -= (ast_size - targetsize) * .05;
    image(asteroid, ast_x, ast_y, ast_size, ast_size);
  }
  if (switchAstMove == true) {
    ast_x += (targetastx2 - ast_x) * .018;
    ast_y += (targetasty2 - ast_y) * .018;

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
function CountDownTry4() {
  if (fuckthis == true) {
    countdownIdB = setInterval(countdownTry3, 1000);
    fuckthis = false;
  }
}

function countdownTry3() {
  if (clockB > 0) {
    clockB = clockB - 1;
    document.getElementById('timerStopWatch').innerHTML = '00:' + clockB;
    // clearInterval(countdownIdB);
  } else {
    //Stop clock
    clearInterval(countdownIdB);
    $('.gamveoverDiv').show();

    document.getElementById('gameoverStat').innerHTML = 'You Flew  ' + floor((30000 - camZ)) + '  Miles';
    readGameOver = true;
  }
}



//scene6
function savePicture() {
  save(canvas);
}



//scene7
function CalibrationSensorValChangeges() {
  if (callibrationPreStage == true) {

    callibrationPreStage = false;
    callibrationStage = true;
    Begincountdown(); //move onto real countdown
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
    Math.round(callibrationCountdown--); //every second do this.
  }, 1000);
}

function AverageAcellerometerNums() {
  NumstoCallibrateDuringFlight.push(newDataZ);
  if (NumstoCallibrateDuringFlight.length > 100) { // write over the 100 numbers in the array
    NumstoCallibrateDuringFlight.splice(0, 1);
  }
  sum = 0;
  for (var i = 0; i < NumstoCallibrateDuringFlight.length; i++) { //100 times
    var num = Number(NumstoCallibrateDuringFlight[i]); //raw sensor numbers
    sum = sum + num; //add them all up
  }
  // MovingAverage = sum / NumstoCallibrateDuringFlight.length;
  // distanceofvaluesFlying = round(abs(MovingAverage - newDataZ));
  if (sensorConnected == true) {
    distanceofvaluesFlying = round(abs(CallibratedRestingNum - newDataZ));
  } else if (sensorConnected == false) {
    distanceofvaluesFlying = random(8, 35);
  }
  // console.log("distanceofvaluesFlying " + distanceofvaluesFlying)
  // console.log("newDataZ " + newDataZ)

}

function getSpeed() {
  // console.log("range" + range1+ range2+range3+range4+range5)

  if (distanceofvaluesFlying < 15) {
    range1 = 0;
    // console.log('range1 is:   ' + range1);
  } else if (distanceofvaluesFlying > 15 && distanceofvaluesFlying < 45) {
    //max
    range2 = range2 + 0.5;
    if (range2 > 1) {
      range2 = 1;
    }
    //console.log('range2 is:   ' + range2);
  } else if (distanceofvaluesFlying ==45 && distanceofvaluesFlying < 75) {
    range3 = range3 + 1;
    if (range3 > 4) {
      range3 = 4;
      // console.log('range3 is:   ' + range3);
    }
  } else if (distanceofvaluesFlying = 75 && distanceofvaluesFlying < 135) {
    range4 = range4 + 1.25;
    if (range4 > 8) {
      range4 = 8;
    }
  } else if (distanceofvaluesFlying = 135 && distanceofvaluesFlying < 165) {
    range5 = range5 + 1.5;
    if (range5 > 12) {
      range5 = 12;
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
    AllScenesMPH = round(map(CamSpeed, 0, camspeedmax, 0, 650));
  }
  // console.log("AllScenesMPH:" + AllScenesMPH + "  || CamSpeed:" + CamSpeed)
  // console.log("distanceofvaluesFlying:" + distanceofvaluesFlying + " CallibratedRestingNum:" + CallibratedRestingNum +" newDataZ:" + newDataZ )
}

function calibrationOver() {
  if (calibrateFinal == true) {
    calibrateFinal = false;
    changeScene(3); //switch to flight school
  }
}



// ////////////////ARE YOU SERIAL?///////////////////
// /////////////////////////////////////////////////

// function serverConnected() {
//   println('connected to server.');
// }

// function portOpen() {
//   println('the serial port opened.')
// }

// function serialError(err) {
//   println('Something went wrong with the serial port. ' + err);
// }

// function serialEvent() {
//   var inString = serial.readStringUntil('\r\n');
//   if (inString.length > 0) {
//     var sensors = split(inString, ',');
//     inDataGloveL = int(sensors[0]);
//     newDataZ = int(sensors[1]);

//   }
// }