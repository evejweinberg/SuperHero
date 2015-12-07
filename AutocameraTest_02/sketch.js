var videoInput, snap;
var videoBuffer;
var storedimage;
var gif, gifFrameRate = 0;
var count = 0;
var interval;
var images = [];

function setup() {

  videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);
  videoInput.hide();
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function draw() {
  console.log('array length  ' + images.length);
  if (frameCount > 335) { //start looping the gif at fr 335
  for (var i=0; i<images.length; i++){
    image(images[i]);
    if (i=images.length){
      i=0;
    }
  }
  
  }
  
  if (frameCount == 120){
    interval = setInterval(savePhoto, 500);
  }

}

function savePhoto() {
  snap = videoInput.get();
  images.push(snap);
  count++;
  if (count == 5) {
     // stop
    clearInterval(interval);
  }
}