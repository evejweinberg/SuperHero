var words = [];
var timings = [3000, 4000, 5000,6000,7000,8000];
var transcript, currentText;

var index = 0;
var lastCue = 0;

function preload() {
  transcript = loadStrings('assets/script.txt');
}

function setup() {
  p = createP('');
  currentText = p.html();


  words = split(transcript[0], '#');
  console.log(words)

}

function draw() {
// reloadcurrent();
  if (millis() - lastCue > timings[index]) {
     currentText = p.html();
    lastCue = millis();
    index = index + 1;
  }
  p.html(currentText + words[index]);
}

function reloadcurrent(){
  currentText = p.html();
}