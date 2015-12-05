var ctracker;
var emotionData;
var ec;
var videoInput;
var videoBuffer;
var previouscolor;
var currentcolor;

function setup() {
  // setup camera capture
  videoInput = createCapture(VIDEO);
  videoInput.size(400, 400);
  videoInput.position(0, 0);
  videoInput.hide();
  videoBuffer = createGraphics(400, 400);
  // setup canvas
  var cnv = createCanvas(600, 600);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  ec = new emotionClassifier();
  ec.init(emotionModel);
  emotionData = ec.getBlank();
  textSize(15);
}

function saveVideo(c) {
  videoBuffer.image(videoInput, 0, 0);
  saveCanvas(videoBuffer, c + frameCount + ".jpg");
}

function draw() {
  background(255);
  //clear();
  var cp = ctracker.getCurrentParameters();
  var er = ec.meanPredict(cp);

  for (var i = 0; i < er.length; i++) {
    //noFill();
    text(er[i].emotion + ' ' + nfc(er[i].value, 2), 20, (i + 1) * 30);
  }

  for (var i = 0; i < er.length; i++) {
    if (er[0].value > er[1].value && er[0].value > er[2].value && er[0].value > er[3].value) {
      rect(0, 0, 600, 600);
      fill(255, 0, 0);
      currentcolor = "red";
      // saveCanvas('red' + frameCount + '.jpg');
    }
    if (er[1].value > er[0].value && er[1].value > er[2].value && er[1].value > er[3].value) {
      rect(0, 0, 600, 600);
      fill(0, 0, 255);
      currentcolor = "blue";
      // saveCanvas('blue' + frameCount + '.jpg');
    }
    if (er[2].value > er[0].value && er[2].value > er[1].value && er[2].value > er[3].value) {
      rect(0, 0, 600, 600);
      fill(102, 0, 204);
      currentcolor = "purple";
      // saveCanvas('purple' + frameCount + '.jpg');
    }
    if (er[3].value > er[0].value && er[3].value > er[1].value && er[3].value > er[2].value) {
      rect(0, 0, 600, 600);
      fill(255, 255, 0);
      currentcolor = "yellow";
      // saveCanvas('yellow' + frameCount + '.jpg');
    }
  }

  if (previouscolor != currentcolor) {
    saveVideo(currentcolor);
  }
  previouscolor = currentcolor;
}
