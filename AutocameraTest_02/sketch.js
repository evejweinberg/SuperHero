var ctracker;
var emotionData;
var ec;
var videoInput;
var videoBuffer;
var previouscolor;
var SuperHero;
var storedimage;
var Allimages = [];
var gif;
var transitionTicker = 0;

function setup() {
  // storedimage = loadImage('tree.png');

  videoInput = createCapture(VIDEO);
  videoInput.size(400, 400);
  videoInput.position(0, 0);
  videoInput.hide();
  videoBuffer = createGraphics(400, 300);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
   ctracker.start(videoInput.elt);
 

}

function buildGif() {
  // for (var i = 0; i < Allimages.length; i++) { //load all the image names
  //   transitionTicker = transitionTicker + .3;
  //     image(Allimages[round(i)], 0, 0, windowWidth, windowHeight);
  // }
}

function saveVideo(c) {
  videoBuffer.image(videoInput, 0, 0);
  Allimages.push(videoBuffer);
}

function draw() {
  ctracker.start(videoInput.elt);
  
  background(255);
  image(videoBuffer, 0, 0);
  if (Allimages.length>2){
  image(Allimages[0],0,0);
  image(Allimages[1],400,0);
  image(Allimages[2],0,400);
  }
  
  console.log(Allimages.length);
  if (frameCount > 200) {
    // for (var i = 0; i < Allimages.length; i++) { //load all the image names
    //   transitionTicker = transitionTicker + 1;
    //   image(Allimages[round(i)], 300, 0, 500, 300);
    // }
  }






  if (frameCount % 60 == 0 && frameCount < 200) {
    saveVideo('SuperHero');
  }

}