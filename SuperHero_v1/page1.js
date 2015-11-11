var pco;
var pco_framenum = 0;
var pco_frames = [];
var page1 = function(p) {

p.preload = function(){
  for (var i = 0; i < 41; i++) { //load all the image names
      if (i < 10) { //for 1 digit ones, add the zero
        pco = "assets1/PCO_00" + i + ".png";
      } else if (i > 9 && i < 100) { //for images 10-99
        pco = "assets1/PCO_0" + i + ".png";
      } else { //100 and over//you can do anothe rif the images go past 999
        pco = "assets1/PCO_" + i + ".png";
      }
      pco_frames.push(p.loadImage(pco)); //push them all into an array
    }
}



  p.setup = function() {
    
    var canvas1 = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas1.parent('page_1');
    button1 = p.createButton('cape is on');
    button1.parent('page_1');
    button1.position(209, p.windowHeight - 600);
    button1.mouseClicked(changepage);
  }

  p.draw = function() {
     p.clear();
    p.image(pco_frames[pco_framenum], 100, 100);
    if (pco_framenum<40){
       pco_framenum++;
    } else if (pco_framenum == 40){
      pco_framenum = 0;
    }
  
    p.textSize(100);
    p.text('Page1', 400, 400);
    p.ellipse(p.width / 2, p.height / 2, 20, 20);
  }
};



var canvas1 = new p5(page1);