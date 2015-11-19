var flysmall;
var flyingOrbitRate = 0;

function setup() {
  createCanvas(800, 800);
  flysmall = createImg('assets/flying.gif');


}

function draw() {

  background(0);
  var orbitRadius = 250;
  var circl = map(millis() / 10, 0, 440, 0, PI / 3); //i'll figure this out later
  var circy = sin(circl) * orbitRadius + 260;
  var circx = cos(circl) * orbitRadius + 260;
  stroke(255, 0, 0);
  noFill();
  ellipse(300, 300, 500, 500);
  flyingOrbitRate = (flyingOrbitRate + .22);
  flysmall.position(circx, circy).size(100, 100).rotate(180 + flyingOrbitRate);

}