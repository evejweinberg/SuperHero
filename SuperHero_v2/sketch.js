var earthorbit, inst, saveme, bg01, asteroid, scene3header, flapTemp, dearEarth;
var instscaledown = 300;
var earthorbit_frames = [];
var aftercape_frames = [];
var currentframeAF = 0;
var currentframe = 0;
var totalearthorbitframes = 320;
var totalaftercapeframes = 326;
var aspect = 1920 / 1080;
var aftercape;
var playSecondVid = false;
var instructionsready = false;
var strokevar = 1;
var particleList = [];
var singlestar = [];
var savmeplaying = false;
var bgplaying = false;
var dearEarthplaying = false;
var ast_x = -100;
var ast_y = -100;
  var scene3counter = 0;

var totalstars = 20;
var scene1 = true;
var scene2 = false;
var scene3 = false;
var scene4 = false;


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



// function PNGSequence() {
//   this.frameNum = 0;
//   this.img = [];
//   this.reset = function() {
//     this.frameNum = 0;
//   }
//   this.update = function() {
//     this.frameNum++;
//   }
//   this.display = function() {
//     image(this.img[this.frameNum], x, y);
//   }
// }
// var earthPNGSeq = new PNGSequence();


function preload() {
  for (var i = 0; i < totalearthorbitframes; i++) { //load all the image names
    earthorbit = "assets/EarthOrbit" + nf(i, 3) + ".png";
    earthorbit_frames.push(loadImage(earthorbit)); //push them all into an array

  }
  for (var i = 0; i < totalaftercapeframes; i++) { //load all the image names
    aftercape = "assets/AC2_" + nf(i, 3) + ".png";
    aftercape_frames.push(loadImage(aftercape)); //push them all into an array
  }
  saveme = loadSound('assets/saveme.m4a');
  bg01 = loadSound('assets/bg01.mp3');
  dearEarth = loadSound('assets/dearEarth.m4a');
  asteroid = loadImage('assets/asteroid.png');
}



function dearEarthVO() {
  if (!dearEarthplaying) {
    dearEarth.setVolume(0.6);
    dearEarth.play();
    dearEarthplaying = true;
    bg01.setVolume(0.05);
  }
}

function bgmusic() {
  if (!bgplaying) {
    bg01.setVolume(0.1);
    bg01.play();
    bgplaying = true;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  flapTemp = createImg('assets/flapTemp.gif');
  var   flapTemp2 = createImg('assets/flapTemp.gif');
  var   flapTemp3 = createImg('assets/flapTemp.gif');
  flapTemp.position(100, 300).class('class3');
  flapTemp2.position(800, 300).class('class3');
  flapTemp3.position(1400, 300).class('class3');
  $('.header').hide();
  inst = createImg('assets/getinstructions.png');
  inst.class('instructions');
  scene3header = createP('we need to test your flight skills, pronto');
  scene3header.class('header').class('class3');
  $('.class3').hide();


  for (var m = 0; m < totalstars; m++) {
    singlestar.push(new starfield1());
  }
} ///SETUP ENDS

function checkFlap1(){
  // if return true, call checkFlap2();
  //ect

  console.log('scene3counter:' +scene3counter)
  scene3counter++;
  if (scene3counter > 600){
    scene4 = true;
  }
  
}


function draw() {
  bgmusic();
  clear();
if(scene4 == true){
  $('.class3').hide();
  scene3 = false;
  dearEarthVO();
  background(236,115,105);
  
}
  else if (scene3 == true) {
    $('.class3').show();
    checkFlap1();
    
  } else if (playSecondVid == true) {
    scene2 = true;
    scene1 = false;
    console.log("scene2=true");
    scene1 = false;
    for (var o = 0; o < totalstars; o++) {
      singlestar[o].display();
      singlestar[o].twinkle();
    }
    if (currentframeAF == 57) {
      playSaveMe();
    }
    if (currentframeAF > 87) {
      var targetastx = 600;
      var targetasty = 600;
      image(asteroid, ast_x + random(-3, 3), ast_y + random(-3, 3));
      ast_x = abs(targetastx - ast_x) * .05;

    }
    if (currentframeAF < totalaftercapeframes) {
      image(aftercape_frames[currentframeAF++], 0, 0, windowWidth, windowWidth / aspect);
    } else {
      image(aftercape_frames[currentframeAF - 1], 0, 0, windowWidth, windowWidth / aspect);
      loadfirstinstruction();
    }
  }
}

function keyPressed() {

  if (scene2 === true) {
    if (keyCode === ENTER) {
      console.log('scene2end');
      scene3 = true;
      scene2 = false;
      playSecondVid = false;
    }
    //   if (keyCode === 66) {
    //   console.log('b was pressed');
    //   animateInsttocorner();
    // }
  } else if (scene1 === true) {
    if (keyCode === ENTER) {
      console.log('scene1end');
      EndIntro();
      playSecondVid = true;
      scene1 == false;
      scene2 == true;

    }
  } else if (key === ' ') {
    print('pressed space');
    currentframe++;
    image(earthorbit_frames[currentframe], 0, 0, windowWidth, windowWidth / aspect);
  }
  // return false;

}



function loadfirstinstruction() {
  $('.instructions').show();
}

function animateInsttocorner() {
  inst.size(instscaledown, instscaledown);
  inst.position(900, 900);

  if (instscaledown == 40) {
    instscaledown = 40;
  } else if (instscaledown > 40) {
    instscaledown--;
  }

}

function resize() {
  resizeCanvas(windowWidth, windowHeight);
}


function EndIntro() {
  if ($('#loading').is(':visible')) {
    $('#loading').hide();
  }
  scene1 = false;
}