var videoInput, oneSnap;
var photoIndex = 0;
var takePhotoBurst, loopPhotos=0;
var photoBurst = [];

function setup() {

  videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);
  videoInput.hide();
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {

  if (frameCount > 335) { //start looping the gif at fr 335
  if (photoBurst.length > 0) {
    image(photoBurst[loopPhotos], 0, 0);
    loopPhotos = (loopPhotos + 1) % photoBurst.length;
  }
  
  }
  
  if (frameCount == 120){
    takePhotoBurst = setInterval(photoBooth, 20);
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