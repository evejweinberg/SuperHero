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

function starfield1(x, y) {
  this.x = x;
  this.y = y;
  stroke(255);
  strokeWeight(strokevar);
  push();
  translate(this.x, this.y);
  line(-10, 0, 10, 0);
  line(0, -10, 0, 10);
  pop();
  if (strokevar > 10) {
    strokevar = -strokevar;
  } else if (strokevar < 1) {
    strokevar++;
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
  for (var i = 0; i < 50; i++) {
    var particle = {
      x: random(width),
      y: random(height),
      radius: 12,

      display: function() {
        this.radius++;
        stroke(255, 100);
        strokeWeight(this.radius);
        line(this.x, this.y-this.radius/2, this.x + this.radius, this.y+this.radius/2);
        line(this.x+this.radius/2, this.y, this.x+this.radius/2, this.y + this.radius);
        if (this.radius < 2) {
          this.radius++;
          stroke(100);
        } else if (this.radius > 20) {
          this.radius--;
          stroke(0);
        }
      },
    };
    particleList[i] = particle;

  }
  //       for (var i=0;i<40;i++){
  //   starfield.push = new star(random(1920),random(1280));
  // }
}


function draw() {
  clear();
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].display();

  }

  if (playSecondVid == true) {
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