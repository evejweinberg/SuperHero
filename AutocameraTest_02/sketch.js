var videoInput;
var videoBuffer;
var storedimage;
var Allimages = [];
var gif, gifFrameRate = 0;

function setup() {

  videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);
  videoInput.hide();
  // videoBuffer = createGraphics(400, 300); //do I need this?
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function draw() {
  console.log('array length  ' + Allimages.length);
  console.log(gifFrameRate);
  if (frameCount > 335) { //start looping the gif at fr 335
    image(Allimages[gifFrameRate], 200, 200);
    if (gifFrameRate > Allimages.length) {
      gifFrameRate = 0;
    }
    gifFrameRate++;
  }

  //grab 10 frames and push them into an array
  if (frameCount % 30 == 0 && frameCount > 50 && frameCount < 335) {

    storedimage = image(videoInput);
    // storedimage = get(0,0,400,300);
    Allimages.push(storedimage);
  }

}