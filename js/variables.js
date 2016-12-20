//all scenes
var moveOnDebug = 0;
var sensorConnected = false;
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
var newDataZ = newDataX = newDataY = 0;
var xPos = 0;
var loadingOvervid;
var CapeCalibrationSign;
var cc;
var isccplaying = false;

var transitionToStory = [];
var trans;
var readyfortrans;
var transitionTicker = 0;



//PRE LOAD HAPPENS DURING LOADING SCREEN

function preload() {
  console.log('preload')

  //load sounds for ending
  cheers[0] = loadSound('audio/cheers1.wav');
  cheers[1] = loadSound('audio/cheers2.wav');
  cheers[2] = loadSound('audio/cheers3.wav');
  cheers[3] = loadSound('audio/cheers4.wav');
  cheers[4] = loadSound('audio/cheers5.wav');
  gameSong1 = loadSound('audio/game01.mp3');
  gameSong2 = loadSound('audio/fuge2.m4a');
  gameSong3 = loadSound('audio/dontStopBelieving.wav');
  gameSong4 = loadSound('audio/letItHappen.m4a');
  gameSong5 = loadSound('audio/DosesAndMimosas.wav');
  gameSong6 = loadSound('audio/dontStopMeNow.wav');
  gameSong7 = loadSound('audio/dontStopBelieving.wav');
  gameSong8 = loadSound('audio/classicxSm.wav');
  gameSong9 = loadSound('audio/groupLoveSm.wav');
  gameSong0 = loadSound('audio/BeyonceGoSm.wav');
  cc = loadSound('assets/cc.wav');
  swoosh = loadSound('assets/swoosh2.wav');
  bg01 = loadSound('assets/bg01.mp3');
  dearEarth = loadSound('assets/DearEarthlings_01.m4a');
  cd_3 = loadSound('assets/three.m4a');
  cd_2 = loadSound('assets/two.m4a');
  cd_1 = loadSound('assets/one.m4a');
  cd_fly = loadSound('assets/fly.m4a');
  //scene4 audio
  saveme = loadSound('assets/saveme.m4a');
  asteroid = loadImage('assets/asteroid3.png');


  //load images for pngs at ending in scene6 sprites
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



  transcript = loadStrings('assets/script.txt');
  for (var i = 0; i < earthSpinFrames; i++) { //load all the image names
    earthspin = "assets/earthSpin03_" + nf(Math.round(i), 3) + ".png";
    earthspin_frames.push(loadImage(earthspin)); //push them all into an array
  }

} /////////PRELOAD ENDS///////
