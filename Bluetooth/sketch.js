//all scenes
var moveOnDebug = 0;
var sensorConnected = true;
var noGloves = true;
var speedMultiplier = 1.2;
var speedRnd1Multiplier = .9;
var timeDiv, swoosh;
var swooshplaying = false;
var AllScenesMPH = 0;
var shadow;
var centerH = 0;
var spacebg;
var earthspin;
var earthspin_frames = [];
var NumstoCallibrateDuringFlight = [];
var MovingAverage = 0;
var CamSpeed = 0;
var scene1 = false;
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
var showbatterysign = true;

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


// scene5var
var mountains = [];
var texture;
var trees = [];
var gameSongs = [];
var songpicker;
var gameSongIsPlaying = false;
var videoInput, oneSnap;
var photoIndex = 0;
var takePhotoBurst, loopPhotos = 0;
var photoBurst = [];
var decreasemult = 2.6;
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
var range1hit = false;
range2hit = false,
  range3hit = false,
  range4hit = false,
  range5hit = false,
  range6hit = false,
  range1 = 0,
  range2 = 0,
  range3 = 0,
  range4 = 0,
  range5 = 0;
range6 = 0;
var t = 0;
var text1a, text1b, text2a, text3a, text3b;
var stars;
var numStars = 10;
var cloud;

//scene6var //photobooth
var cheersSongIsPlaying = false;
var cheers = [];
var scn6BGsprite = []; //all jitter objects go in here
var spriteLibrary = []; //png sequence
var spriteAssets = [];
var sprite1Total = 58;
var roveBothax, roveBothay, roveBothbx, roveBothby, wiggleaway, scn6Bgsprites;
var randomScene6bg = 1;
var canvas, capture, mycam, button, img;
var newspaperImage, newspaperImage3;
var rotateDiv;
var Scene6counter = 0;
var newspaperRotate = 0;
var newspaperscale = 0;
retakePhotoRequest = false;
// var newspapertempheader;

//scene7var callibration
var readyforschool;
var calimgX, calimgY;
var calibrationStillGoing = true;
var calibrateSteadyType;
var callibrationImage;
var callibrationHeader, callibrationExplainer;
var sliderTemp; //the sensor will replace this later
var restingNumbers = [];
var isCallibrationReady = [];
var NumstoCallibrate = [];
var gd;
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
var serial2; // variable to hold an instance of the serialport library
var portName = '/dev/cu.LightBlue-Bean'; // fill in your serial port name here
var inData0, inDataGloveL, batteryVoltage; // for incoming serial data
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


function NoGlovesScene1Done() {
  noGloves = true;
  // console.log('clicked')
  $('#loadingvideo').hide();
  $('#loadingOver').show();
  loadingOvervid.play();
  $('video#loadingOver').bind('ended', function() {
    $('#loading').remove();
    changeScene(4);
  });
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
    // swoosh.setVolume(1.7);
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
    // dearEarth.setVolume(0.6);
    dearEarth.play();
    dearEarthplaying = true;
    // bg01.setVolume(0.05);
  }
}

function checkBattery() {
  // console.log('checking battery')
  if (scene1 == true) {
    showbatterysign = true;
  } else {
    showbatterysign = false;
  }
}




function preload() {
  console.log('preload')
  cheers[0] = new Audio('audio/cheers1.wav');
// console.log('cheer 0 loaded')
  cheers[0] = new Audio('audio/cheers1.wav');
  cheers[1] = new Audio('audio/cheers2.wav');
  cheers[2] = new Audio('audio/cheers3.wav');
  cheers[3] = new Audio('audio/cheers4.wav');
  cheers[4] = new Audio('audio/cheers5.wav');

  console.log('cheers loaded')
  //scene6 sprites
  for (var i = 0; i < sprite1Total; i++) { //load all the image names
    if (i < 10) { //for 1 digit ones, add the zero
      scn6Bgsprites = "assets/flash_0" + i + ".png";
    } else { //for 2 digit ones dont
      scn6Bgsprites = "assets/flash_" + i + ".png";
    }
    spriteLibrary.push(loadImage(scn6Bgsprites)); //push them all into an array
    //these will be called inside the jitter object
  }

  for (var i = 0; i < 13; i++) { //load all the image names
    trans = "assets/spaceCompressB_" + nf(i, 2) + ".png";
    transitionToStory.push(loadImage(trans)); //push them all into an array
  }

  for (var i = 0; i < 4; i++) { //load all the image names
    cloud = "assets/cloud_" + nf(i, 2) + ".png";
    Allclouds.push(loadImage(cloud)); //push them all into an array
  }

  gameSong1 = new Audio('audio/game01.mp3');
  gameSong2 = new Audio('audio/fuge2.m4a');
  gameSong3 = new Audio('audio/dontStopBelieving.wav');
  gameSong4 = new Audio('audio/letItHappen.m4a');
  gameSong5 = new Audio('audio/DosesAndMimosas.wav');
  gameSong6 = new Audio('audio/dontStopMeNow.wav');
  gameSong7 = new Audio('audio/dontStopBelieving.wav');
  gameSong8 = new Audio('audio/classicxSm.wav');
  gameSong9 = new Audio('audio/groupLoveSm.wav');
  gameSong0 = new Audio('audio/BeyonceGoSm.wav');
  cc = new Audio('assets/cc.wav');
  swoosh = new Audio('assets/swoosh2.wav');
  bg01 = new Audio('assets/bg01.mp3');
  dearEarth = new Audio('assets/DearEarthlings_01.m4a');
  cd_3 = new Audio('assets/three.m4a');
  cd_2 = new Audio('assets/two.m4a');
  cd_1 = new Audio('assets/one.m4a');
  cd_fly = new Audio('assets/fly.m4a');

  //scene4
  saveme = new Audio('assets/saveme.m4a');
  asteroid = loadImage('assets/asteroid3.png');
  transcript = loadStrings('assets/script.txt');
  for (var i = 0; i < earthSpinFrames; i++) { //load all the image names
    earthspin = "assets/earthSpin03_" + nf(Math.round(i), 3) + ".png";
    earthspin_frames.push(loadImage(earthspin)); //push them all into an array
  }

} /////////PRELOAD ENDS///////

//scene 1
function bgmusic() {
  if (!bgplaying && bg01) {
    // bg01.setVolume(0.1);
    bg01.play();
    bgplaying = true;
  }
}


function setup() {
  console.log('setyp')

  canvas = createCanvas(windowWidth, windowHeight);
  centerH = (windowWidth / 2);
  calimgX = (windowWidth / 2) - 200;
  calimgY = (windowHeight / 2) - 160;
  // timeDiv = document.getElementById('sensors');

  //scene7, calibration
  readyforschool = createImg('assets/readyforschool.png');
  // readyforschool.position(0,0)
  readyforschool.class('class7').id('readyforschool');
  gd = new getCalibrationSensorValChange();
  loadingOvervid = document.getElementById("loadingOver");
  loadingOvervid.pause();
  spacebg = loadImage('assets/spaceEdges3.png');

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
  for (var i = 0; i < 200; i++) {
    scn6BGsprite.push(new Scn6Jitter());
  }
  rotateDiv = createDiv('');
  // back1Button = createButton('FlightSchool');
  // back2Button = createButton('Calibration');
  // back3Button = createButton('Hear The Mission');
  // back5Button = createButton('Play Again');
  scene6buttons = createDiv('');
  scene6buttons.class('class6').id('scene6buttonholder')
    // back1Button.parent(scene6buttons).class('class6').addClass('scene6buttons').id('playbutton');
    // back2Button.parent(scene6buttons).class('class6').addClass('scene6buttons').id('playbutton');
    // back3Button.parent(scene6buttons).class('class6').addClass('scene6buttons').id('playbutton');
    // back5Button.parent(scene6buttons).class('class6').addClass('scene6buttons').id('playbutton');
  retakePhotoButton = createButton('Retake Photo').class('class6').addClass('scene6buttons').id('playbutton');
  retakePhotoButton.class('class6').addClass('scene6buttons').parent(scene6buttons);
  retakePhotoButton.mousePressed(function() {
    photoBurst = [];
    photoIndex = 0;
    loopPhotos = 0;
    takePhotoBurst = setInterval(photoBooth, 20);

  });
  // back1Button.mousePressed(function() {
  //   changeScene(3)
  // });
  // back2Button.mousePressed(function() {
  //   changeScene(7)
  // });
  // back3Button.mousePressed(function() {
  //   changeScene(4)
  // });
  // back5Button.mousePressed(function() {
  //   changeScene(5)
  // });

  rotateDiv.class('class6').addClass('newspaperDiv');
  videoInput = createCapture(VIDEO);
  videoInput.size(575, 340);
  videoInput.position(575, 330);
  videoInput.hide();
  var newsRandom = floor(random(0, 1.9));
  if (newsRandom == 0) {
    // console.log('newspaper is 0')
    newspaperImage = createImg('assets/newspaper2.png');
    newspaperImage.class('class6').parent(rotateDiv).id('scene6newspaper');
  } else {
    // console.log('newspaper is 1')
    newspaperImage = createImg('assets/newspaper3.png');
    newspaperImage.class('class6').parent(rotateDiv).id('scene6newspaper');
  }



  //scene 7 callibration
  calibrateSteadyType = createP('');
  calibrationHeader = createP('Put Your Arms Out \r\n Like This');
  calibrationHeader.class('class7').addClass('header3').id('calibrationHeaderid');
  calibrateSteadyType.class('class7').id('calibrateHoldSteady');
  callibrationImage = loadImage('assets/Callibration.png');
  shadow = loadImage('assets/shadow.png');
  CapeCalibrationSign = createImg('assets/CapeCalibrationSign2.png');
  CapeCalibrationSign.class('class7').addClass('capesign');


  // scene 3 flight test
  flapTemp1 = createImg('assets/flightTest01.gif');
  flapTemp2 = createImg('assets/turbo.gif');
  var flapdiv = createDiv('');
  flapdiv.class('flapdiv');
  flapTemp1.class('class3').addClass('flap1').id('flap1').position(windowWidth / 2 - 250, 240);
  flapTemp2.class('class3').addClass('flyIn3').id('flap2').size(462, 440).position(windowWidth / 2 - 250, 240);
  $("#flap2").hide();
  FlightSchoolSign = createImg('assets/FlightSchoolSign3.png');
  FlightSchoolSign.class('class3').addClass('sign').id('flightschoolsign');


  for (var m = 0; m < totalstars; m++) {
    singlestar.push(new starfield1());
  }

  // scene4
  scene4Script = createP('');
  scene4Script.class('class4').addClass('voiceover');
  currentText = scene4Script.html();
  words = split(transcript[0], '#');
  flysmall = createImg('assets/flying.gif');
  flysmall.class('class4');
  // flyingOverhead = createImg('assets/flyingOverhead.png');
  flyingOverhead2 = createImg('assets/flyingOverhead.png');
  // flyingOverhead.class('flyingoverhead').position(flythroughX, flythroughY).class('huerotate').size(1400,1250);
  flyingOverhead2.class('flyingoverhead').position(flythroughX, flythroughY).size(1400, 1250);
  $('.flyingoverhead').hide();
  squeezeFistGif = createImg('assets/fist4.gif').class('class4').id('squeezeFistGif');
  squeezeFistGif.position(squeezeFistGifX, squeezeFistGifY).size(500,936);

  //scene5
  keepgoing01 = loadImage('assets/keepgoing01.png');
  scene5countdown = createP('3');
  scene5countdown.class('countdown').addClass('class5').id('countdowntofly'); //subtract element width/2 and hright


  changeScene(1);

  serial2 = new p5.SerialPort(); // make a new instance of the serialport library

  serial2.on('connected', serverConnected); // callback for connecting to the server
  serial2.on('open', portOpen); // callback for the port opening
  serial2.on('data', serialEvent); // callback for when new data arrives
  serial2.on('error', serialError); // callback for errors

  serial2.open(portName); // open a serial port
} ///SETUP ENDS

function restartAllCounters() {
  transitionTicker = 0;
  Scn5_frmct = 0;
  Scn4_frmct = 0;
  cloudMovex = 0;
  Scn4_textcounter = 0;
  var isccplaying = false;
  var flyingOrbitRate = 0;
  var playSecondVid = false;
  var instructionsready = false;
  var savmeplaying = false;
  var bgplaying = false;
  var dearEarthplaying = false;
  var ast_x = -100;
  var ast_y = -100;
  var ast_size = 766;
  var scene3counter = 0;
  var switchAstMove = false;
  var firstround = true;
  var gameSongIsPlaying = false;
    var cheersSongIsPlaying = false;
  var gameoverclock = 0;
  var turbo = false;
  var readyforschool = false;
  var cloudMovex = 0;
  var Scn3_frmct = 0;
  var scene3A = true;
  var scene3B = false;
  flapTemp1.position(windowWidth / 2 - 250, 240);
  FlightSchoolSign.position(windowWidth / 2, -40);
}

function changeScene(num) { //these only get called once, based on a sensor or keypress
$('#battery').hide();
  showbatterysign = false;
  restartAllCounters();
  dearEarth.pause();
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
  $('#readyforschool').hide();
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
  // Scn5_frmct = 0;
  // Scn4_frmct = 0;
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
    dearEarth.pause();

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
    $('#squeezeFistGif').hide();
    $('#readyforschool').hide();
    $(document.body).addClass('yellowbg');
    scene7 = true;
    timer = setTimeout(function() {
      CalibrationSensorValChangeges();
    }, 3000);


  }
} //function ends







function draw() {





  centerH = (windowWidth / 2);
  AverageAcellerometerNums();
  getSpeed();
  bgmusic();
  clear();
  if (scene1 == true) {
    // console.log('inDataGloveL')
    checkBattery();
    if (showbatterysign == true && batteryVoltage<=2.5) {
      // if (scene6 == true){
      $('#battery').show();
      $("#battery").append( "<b>" + batteryVoltage + "</b>");
// }

    }
    if (inDataGloveL === 1 || moveOnDebug == 1) {
      console.log('loading over')
      // changeScene(1);
      $('#defaultCanvas0').show();
      $('#loadingvideo').hide();
      $('#loadingOver').show();
      loadingOvervid.play();
      $('#loadingOver').bind('ended', function() {
        $('#loading').remove();
        changeScene(4);
      });
      changeScene(4);

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
        var readytoswitch = setInterval(function() {
          scene3A = false;
          scene3B = true;
        }, 2000);

      }
    }
    if (scene3B == true) {
      if (AllScenesMPH > 480) {
        // for (var l = 0; l < 12; l++) {
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
    }

    image(Allclouds[3], round(cloudMovex), 50);
    image(Allclouds[3], round(cloudMovex) + 1600, 350);
    image(Allclouds[0], floor(cloudMovex) + 500, 200);
    image(Allclouds[1], floor(cloudMovex) + 300, 400);
    image(Allclouds[2], round(cloudMovex) + 1000, 100);

    image(spacebg, 0, 0, windowWidth, windowHeight);
    if (frameCount % 30 == 0) {
      cloudMovex = cloudMovex + 2;

    }

    if (readyfortrans == true) {
      $('#flightschoolsign').animate({
        height: '-200'
      }, 1200);
      transitionTicker = transitionTicker + .3;
      image(transitionToStory[round(transitionTicker)], 0, 0, windowWidth, windowHeight);
      if (transitionTicker > 12) {
        changeScene(5);
        readyfortrans = false;
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
    console.log('scene4')
    playSwoosh();
    if (frameCount % 30 == 0) {
      cloudMovex = cloudMovex + 2;

    }
    image(Allclouds[3], round(cloudMovex) + 1000, 600, 135, 45); //get exact dimensions
    image(Allclouds[3], round(cloudMovex) + 1100, 320, 135, 45);
    image(Allclouds[0], floor(cloudMovex) + 810, 250, 135, 45);
    image(Allclouds[1], floor(cloudMovex) + 1200, 400, 135, 45);
    image(Allclouds[2], round(cloudMovex) + 850, 500, 135, 45);
    if (inDataGloveL === 1 || moveOnDebug == 2) {
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
    if (Scn4_textcounter > 1490) {
      $('#squeezeFistGif').show();
      squeezeFistGifY = squeezeFistGifY - 20;
      if (squeezeFistGifY < 100) {
        squeezeFistGifY = 100;
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

    if (readyfortrans == true) {
      transitionTicker = transitionTicker + .3;
      image(transitionToStory[round(transitionTicker)], 0, 0, windowWidth, windowHeight);
      if (transitionTicker > 12) {
        changeScene(7);
        readyfortrans = false;
      }
    }



  } else if (scene5 == true) {
    if (Scn5_frmct == 240) {
      takePhotoBurst = setInterval(photoBooth, 20);
    }

    Scn5_frmct++;
    if (readGameOver == true) {
      $('#userSpeedDiv').hide();
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
    if (AllScenesMPH > 520) { //hitting turbo
      for (var l = 0; l < 2; l++) {
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

    dearEarth.pause();



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

      document.getElementById('countdowntofly').innerHTML = '1';
    } else if (Scn5_frmct > 180 && Scn5_frmct < 240) {
      document.getElementById('countdowntofly').innerHTML = 'FLY!';
    } else if (Scn5_frmct == 240) {
      $('#userSpeedDiv').show();
      document.getElementById('countdowntofly').innerHTML = '';
      gameSongPlaying();
      counter = setInterval(timer, 33); //1000 will  run it every 1 second
    }

  } else if (scene6 == true) {

    videoInput.position(windowWidth / 2 - 200, (windowHeight / 2) + 610);
    roveBothax = cos(millis() / 10) * 7;
    roveBothay = sin(millis() / 10) * 7;
    roveBothbx = sin(millis() / 10) * 7;
    roveBothby = cos(millis() / 10) * 7;
    for (var i = 0; i < scn6BGsprite.length; i++) {
      scn6BGsprite[i].display();
    }

    if (photoBurst.length > 0) {
      image(photoBurst[loopPhotos], (width / 2) - 215, (height / 2) + 35);
      loopPhotos = (loopPhotos + 1) % photoBurst.length;
    }

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





    if (calibrateFinal == true) {
      calimgX = calimgX + 7;
      calimgY = calimgY - 7;
      textSize(100);
      textAlign(CENTER);
      $('#readyforschool').show();
      var up = -1;
      document.getElementById('calibrationHeaderid').innerHTML = '';
      // calibrationHeader.position((windowWidth / 2) - 240, 170+ up);
      // text('YOU ARE READY \r\n FOR FLIGHT SCHOOL', windowWidth / 2, windowHeight / 2);
      readyforschool = true;

      $('.bluebgup').animate({
        height: '900'
      }, 1200);



      calcountdown = window.setInterval(function() { //
        calibrationOver(); //once over call this
      }, 3000); //wait 5 seconds
    }



    if (callibrationStage === true) {
      $('#readyforschool').hide();
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
    if (keyCode == 'J') {
      // console.log('J');
    }
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
  

      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }
      readyfortrans = true;


    }
  } else if (scene1 === true) {
    if (keyCode === ENTER) {
      $('#defaultCanvas0').show();
      $('#loadingvideo').hide();
      $('#loadingOver').show();
      loadingOvervid.play();
      $('#loadingOver').bind('ended', function() {
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
      // readyfortrans = true;
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
  this.h = 130 + random(70, 150);
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
    playCheers();
    //Stop clock
    clearInterval(countdownIdB);
    $('.gamveoverDiv').show();
    var randomCongrats = round(random(0, 3.4));

    if (randomCongrats == 0) {
      document.getElementById('gameoverText').innerHTML = 'HOLEY MOLEY!';
    } else if (randomCongrats == 1) {
      document.getElementById('gameoverText').innerHTML = 'YOU DID IT';
    } else if (randomCongrats == 2) {
      document.getElementById('gameoverText').innerHTML = 'WOAHHHH';
    } else if (randomCongrats == 3) {
      document.getElementById('gameoverText').innerHTML = 'SUPER STAR';
    }
    // var milesFlown = String(floor((30000 - camZ)));

    document.getElementById('gameoverStat').innerHTML = 'You Flew  ' + addCommas(floor((30000 - camZ))) + '  Miles';
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
  this.currentVal = newDataZ;
  this.previousVal = newDataZ;
  this.lastcheck = 0;

  this.display = function() {
    this.currentVal = newDataZ;

    if (millis() - this.lastcheck > 120) { //read every 10th of a second
      distanceofvalues = abs(this.currentVal - this.previousVal);

      this.previousVal = this.currentVal;
      this.lastcheck = millis();
    }
  }
}

function Begincountdown() {
  calcountdown = window.setInterval(function() {

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
  ////////if the sensor breaks!!!!////////
  if (sensorConnected == true) {
    if (scene3 == true && scene3B == true || scene5 == true) {
    distanceofvaluesFlying = speedMultiplier*round(abs(CallibratedRestingNum - newDataZ));
    } else if (scene3A == true && scene3 == true) {
      distanceofvaluesFlying = speedRnd1Multiplier* round(abs(CallibratedRestingNum - newDataZ));
    }
    // console.log(distanceofvaluesFlying);
  } else if (sensorConnected == false) {
    if (scene3 == true && scene3A == true) {
      // console.log('3A')
      distanceofvaluesFlying = random(35, 170);
    } else if (scene3B == true && scene3 == true) {
      // console.log('3B')
      distanceofvaluesFlying = random(200, 620);
    } else if (scene5 == true) {
      // console.log('5')
      distanceofvaluesFlying = random(155, 795);
    }
  }


}

function getSpeed() {
  if (distanceofvaluesFlying < 100) {

    range1 = 0;
    range1hit = true;
  }
  if (distanceofvaluesFlying > 120) {
    range2hit = true;
    range2 = range2 + 0.3;
    if (range2 > 3) {
      range2 = 3;
    }
  }
  if (distanceofvaluesFlying > 160) {
    range3hit = true;

    range3 = range3 + 0.5;
    if (range3 > 4) {
      range3 = 4;
    }

  }
  if (distanceofvaluesFlying > 250) {
    range4 = range4 + 0.6;
    range4hit = true;
    if (range4 > 4) {
      range4 = 4;
    }
  }
  if (distanceofvaluesFlying > 500) {
    range5hit = true;
    if (range5 == true) {

    }
    range5 = range5 + 0.6;
    if (range5 > 6.1) {
      range5 = 6.1;
    }
  }
  if (distanceofvaluesFlying > 750) {
    range6hit = true;
    range6 = range6 + 0.5;
    if (range6 > 10) {
      range6 = 10;
    }
  }


  CamSpeed = range1 + range2 + range3 + range4 + range5 + range6;
  if (frameCount % 15 == 0) {
    AllScenesMPH = round(map(CamSpeed, 0, 24, 0, 600));
  }
  if (range2hit == false) {
    range2 = range2 - 0.06 * decreasemult;
  }
  if (range3hit == false) {
    range3 = range3 - 0.04 * decreasemult;
  }
  if (range4hit == false) {
    range4 = range4 - 0.03 * decreasemult;
  }
  if (range5hit == false) {
    range5 = range5 - 0.02 * decreasemult;
  }
  if (range6hit == false) {
    range6 = range6 - 0.03 * decreasemult;
  }

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

  range1hit = false;
  range2hit = false;
  range3hit = false;
  range4hit = false;
  range5hit = false;
  range6hit = false;
}

function calibrationOver() {
  if (calibrateFinal == true) {
    calibrateFinal = false;
    changeScene(3); //switch to flight school
  }
}

function photoBooth() {

  oneSnap = videoInput.get();
  photoBurst.push(oneSnap);
  photoIndex++;
  if (photoIndex == 60) {
    clearInterval(takePhotoBurst);
  }
}

function playCheers(){
  if(!cheersSongIsPlaying){
    cheersSongIsPlaying = true;
    var cheersPicker = floor(random(cheers.length));//round(random(1,5));
  console.log(cheersPicker)
  //if (frameCount % 60 == 0){
  cheers[cheersPicker].play();
  }
}


function gameSongPlaying() {
  if (!gameSongIsPlaying) {
    gameSongIsPlaying = true;

    songpicker = floor(random(0, 10));
    console.log('songNum' +songpicker)
    if (songpicker == 1) {
      gameSong1.play();
    } else if (songpicker == 2) {
      gameSong2.play();
    } else if (songpicker == 3) {
      gameSong3.play();
    }else if (songpicker == 4) {
      gameSong4.play();
    }else if (songpicker == 5) {
      gameSong5.play();
    }else if (songpicker == 6) {
      gameSong6.play();
    }else if (songpicker == 0) {
      gameSong0.play();
    }else if (songpicker == 7) {
      gameSong7.play();
    }else if (songpicker == 8) {
      gameSong8.play();
    }else if (songpicker == 9) {
      gameSong9.play();
    }
  }
}

function Scn6Jitter() {
  this.startingFrame = floor(random(sprite1Total));
  var spriteNumber = scn6BGsprite.length;


  this.x = (spriteNumber % 15) * 200;

  this.y = floor(spriteNumber / 15) * 150;
  this.rh = random(40, 130);

  this.speed = random(-1, 1);

  this.display = function() {

    this.scaleup = cos(millis() / 500) * 20;
    this.rw = this.rh + this.scaleup;
    this.rovex = cos(millis() / 500) * this.speed;
    this.rovey = sin(millis() / 500) * this.speed;
    this.x = this.x + this.rovex;
    this.y = this.y + this.rovey;


    image(spriteLibrary[floor(this.startingFrame)], this.x, this.y, this.rw, this.rw);
    this.startingFrame = this.startingFrame + .5;

    if (this.startingFrame == sprite1Total) {
      this.startingFrame = 0;
    }
  }


}

window.scrollTo(0, 1);

function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}



// ////////////////ARE YOU SERIAL?///////////////////
// /////////////////////////////////////////////////

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
  var inString = serial2.readStringUntil('\r\n');
  if (inString.length > 2) {
    var sensors = split(inString, ',');
    newDataZ = int(sensors[1]);
    inDataGloveL = int(sensors[0]);
    batteryVoltage = (sensors[2]);
    // console.log(inDataGloveL + '||' + newDataZ + '||' + batteryVoltage+ '||'+distanceofvaluesFlying);

  }
}
