
var scn6BGsprite = []; //all jitter objects go in here
var spriteLibrary = []; //png sequence
var spriteAssets = [];
var sprite1Total = 58;
var roveBothax, roveBothay, roveBothbx, roveBothby, wiggleaway, scn6Bgsprites;

function preload() { //load all images here


  for (var i = 0; i < sprite1Total; i++) { //load all the image names

    if (i < 10) { //for 1 digit ones, add the zero
      scn6Bgsprites = "assets/flash_0" + i + ".png";
    } else { //for 2 digit ones dont
      scn6Bgsprites = "assets/flash_" + i + ".png";
    }
    spriteLibrary.push(loadImage(scn6Bgsprites)); //push them all into an array
    //these will be called inside the jitter object
  }
}

function setup() {


  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 200; i++) {
    scn6BGsprite.push(new Scn6Jitter());
  }




}//////SETUP ENDS////




function draw() {
  background(255, 0, 0);


    roveBothax = cos(millis() / 10) * 7;
    roveBothay = sin(millis() / 10) * 7;
    roveBothbx = sin(millis() / 10) * 7;
    roveBothby = cos(millis() / 10) * 7;
for (var i = 0; i < scn6BGsprite.length; i++) {
    scn6BGsprite[i].display();
  }

}



function Scn6Jitter() {
  this.startingFrame = floor(random(sprite1Total));
  var spriteNumber = scn6BGsprite.length;


  this.x = (spriteNumber % 15) * 200;

  this.y = floor(spriteNumber / 15) * 150;
  this.rh = random(20, 70);

  this.speed = random(-1, 1);

  this.display = function() {

      this.scaleup = cos(millis() / 500) * 20;
      this.rw = this.rh + this.scaleup;
      this.rovex = cos(millis() / 500) * this.speed;
      this.rovey = sin(millis() / 500) * this.speed;
      this.x = this.x + this.rovex;
      this.y = this.y + this.rovey;


    image(spriteLibrary[floor(this.startingFrame)], this.x, this.y, this.rw, this.rw);
    this.startingFrame = this.startingFrame + .5;

    if (this.startingFrame == sprite1Total) {
      this.startingFrame = 0;
    }
  }


}