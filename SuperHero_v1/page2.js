// create second sketch
var page2 = function(p) {

  p.setup = function() {
    var canvas2 = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas2.parent('page_2');
    button2 = p.createButton('Arm bands are on');
    button2.parent('page_2');
    button2.position(19, 300);
    button2.mouseClicked(changepage);
    words = p.createP('Put on gloves and wristbands');
    words.class('poetry').position(100,100).parent('page_2');
  }

  p.draw = function() {
    p.clear();
    p.textSize(100);

    // p.text('Put on gloves and wristbands',40,400);
    for (var i = 0; i < 5; i++) {
      p.ellipse(50 * i, p.height * 0.25, 20, 20);
    }
  }
};


var canvas2 = new p5(page2);