var earthorbit;
var earthorbit_frames = [];
var aftercape_frames = [];
var currentframeAF = 0;
var currentframe = 0;
var totalearthorbitframes = 320;
var totalaftercapeframes = 50;
var aspect = 1920 / 1080;
var aftercape;
var playSecondVid = false;


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

}






function draw() {
  // background(200, 5, 20);
  clear();
  if (playSecondVid == true) {
    console.log('hello vid2')
    if (currentframeAF < totalaftercapeframes) {
      image(aftercape_frames[currentframeAF++], 0, 0,windowWidth, windowWidth / aspect);
    }
    else {
      image(aftercape_frames[currentframeAF-1], 0, 0,windowWidth, windowWidth / aspect);
    }
    
  }


}

function keyPressed() {
  if (key === ' ') {
    print('pressed space');
    currentframe++;
  }


  // var removeFirstVid = document.getElementById('loading');
  if (keyCode === ENTER) {
    console.log('b');
    EndIntro();
    playSecondVid = true;

  }
  // return false;
}

function loadfirstinstruction() {
  var instFistUp = loadImage('assets/getinstructions.png');
  var inst = createImg('assets/getinstructions.png');
  inst.position(500,500);
  //load DOM element
}

// function resize(){
//   resizeCanvas(windowWidth,windowHeight);
// }




function EndIntro() {
  if ($('#loading').is(':visible')) {
    $('#loading').hide();
  }
}