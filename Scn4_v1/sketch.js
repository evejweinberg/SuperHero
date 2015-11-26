var centerH = 0;
var spacebg;
var earthspin;
var bg01;
var colors;
var earthspin_frames = [];
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
var ast_x = -300;
var ast_y = -300;
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
//FFParticle
var particles = [];
var flyingSize = 100;
var ffcenterX = 700;
var ffcenterY = 300;
var angle = 0;
var firstround = true;
var orbitRadius = 250;
var switchAstMove = false;



function preload() {
  //scene4
  bg01 = loadSound('assets/bg01.mp3');
  dearEarth = loadSound('assets/DearEarthlings_01.m4a');
  saveme = loadSound('assets/saveme.m4a');
  asteroid = loadImage('assets/asteroid.png');
  transcript = loadStrings('assets/script.txt');
  for (var i = 0; i < earthSpinFrames; i++) { //load all the image names
    earthspin = "assets/earthSpin02_" + nf(Math.round(i), 3) + ".png";
    earthspin_frames.push(loadImage(earthspin)); //push them all into an array
  }
}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  spacebg = loadImage('assets/spaceEdges2.png');
  centerH = (windowWidth / 2);
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
    // scene 4
  scene4Script = createP('');
  scene4Script.class('class4').class('voiceover');
  currentText = scene4Script.html();
  words = split(transcript[0], '#');
  // scene4button = createButton('BACK INTO READY POSITION TO PLAY');
  // scene4button.position(300, 700).class('class4').class('header2').id('playbutton');
  // scene4button.mouseClicked(function() {
  //   changeScene(5)
  // });
  flysmall = createImg('assets/flying.gif');
  flysmall.class('class4');

}

function draw() {

  clear();
  Scn4_textcounter++;
  angleMode(DEGREES);
  angle = angle + .5;
  if (angle > 360) {
    angle = 0;
    firstround = false;
  }

  console.log('angle is' + angle);

  var circl = map(millis(), 0, 30000, 0, 10); //30 sec to ten?
  var offsetX = ffcenterX;
  var offsetY = ffcenterY;
  var circx = cos(angle) * orbitRadius + ffcenterX + orbitRadius / 2 - 30;
  var circy = sin(angle) * orbitRadius + ffcenterY + orbitRadius / 2 - 30;
  flyingOrbitRate = (flyingOrbitRate + .55);
  flysmall.position(circx, circy).size(flyingSize, flyingSize).rotate(180 + flyingOrbitRate);


  if (Scn4_textcounter > 390) {
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
}






function asteroidHitandBounce() {
  var targetastx = 550;
  var targetasty = 250;
  var targetastx2 = 300;
  var targetasty2 = 1200;
  // ellipse(targetastx,targetasty,50,50)
  console.log('dist:' + dist(ast_x, ast_y, targetastx, targetasty))
  if (dist(ast_x, ast_y, targetastx, targetasty) < 10) {
    switchAstMove = true;
  }
  if (switchAstMove == false){
    var targetsize = 100;

    ast_x += (targetastx - ast_x) * .039;
    ast_y += (targetasty - ast_y) * .039;
    ast_size -= (ast_size - targetsize) * .05;
    image(asteroid, ast_x, ast_y, ast_size, ast_size);
  } 
if (switchAstMove == true){
    ast_x += (targetastx2 - ast_x) * .015;
    ast_y += (targetasty2 - ast_y) * .015;

    image(asteroid, ast_x, ast_y, ast_size, ast_size);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
  this.spd = random(0.01, 0.05);
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