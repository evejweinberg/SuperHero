var earthorbit, inst;
var instscaledown = 300;
var earthorbit_frames = [];
var aftercape_frames = [];
var currentframeAF = 0;
var currentframe = 0;
var totalearthorbitframes = 320;
var totalaftercapeframes = 54;
var aspect = 1920 / 1080;
var aftercape;
var playSecondVid = false;
var instructionsready = false;
var strokevar = 1;
var particleList = [];
var singlestar = [];
var intro = false;
var totalstars = 20;

function starfield1() {
  this.x = random(1920);
  this.y = random(1080);
  stroke(255);
   this.radius=random(30);
  

  this.display = function() {
    strokeWeight(4);
   this.radius =this.radius+.5;
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

    //earthPNGSeq.img.push(loadImage(earthorbit));
  }
  for (var i = 0; i < totalaftercapeframes; i++) { //load all the image names
    aftercape = "assets/AC" + nf(i, 3) + ".png";
    aftercape_frames.push(loadImage(aftercape)); //push them all into an array
  }
}





function setup() {
  createCanvas(windowWidth, windowHeight);
  inst = createImg('assets/getinstructions.png');
  inst.class('instructions');
  
 for (var m = 0; m < totalstars; m++) {
    singlestar.push(new starfield1());
  }
}///SETUP ENDS


function draw() {
  clear();
  
   if (intro == true){
  for (var o = 0; o < totalstars; o++) {
    singlestar[o].display();
    singlestar[o].twinkle();
  }
   }
 
 

  if (playSecondVid == true) {
    intro = true;
    console.log('hello vid2')
    if (currentframeAF < totalaftercapeframes) {
      image(aftercape_frames[currentframeAF++], 0, 0, windowWidth, windowWidth / aspect);
    } else {
      image(aftercape_frames[currentframeAF - 1], 0, 0, windowWidth, windowWidth / aspect);
      loadfirstinstruction();
    }

  }


}

function keyPressed() {
  if (key === ' ') {
    print('pressed space');
    currentframe++;
    image(earthorbit_frames[currentframe], 0, 0, windowWidth, windowWidth / aspect);
  }

  if (keyCode === ENTER) {
    console.log('enter');
    EndIntro();
    playSecondVid = true;

  }
  // return false;

  if (keyCode === 66) {
    console.log('b was pressed');
    animateInsttocorner();
  }
  if (keyCode === 80) {

  }
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
}