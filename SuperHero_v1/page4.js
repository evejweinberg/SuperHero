// create second sketch
var page4 = function(p) {
  pwords = [];

  p.preload = function() {
      page4script = p.loadStrings('assets1/script_pg4.txt');
    }
    p.splitwords = function() {
  //     line1 = page4script[0].split('\r');
  //     line2 = page4script[1].split('\r');
  //     line3 = page4script[2].split('\r');
  //     line4 = page4script[3].split('\r');
    }

  p.setup = function() {
    
    line1 = page4script[0];
    line2 = page4script[2];
    page4script[0].replace("\n", "<br />");
    p.createP(page4script).class('whitepoetry').position(200,200).parent('page_4');
      // page4script.hide();
    // if (page4script !== 0){
    // page4script.p.splitwords();
    // }
    // p.createP(line1);
    // p.createP(line2);
    // line1.class('whitepoetry').position(200, 200).parent('page_4');
    // line2.class('whitepoetry').position(200, 400).parent('page_4');

    var canvas4 = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas4.parent('page_4');
    // paragraph.parent('page_4');
    button4 = p.createButton('The book\n\r is done');
    button4.parent('page_4');
    button4.position(19, p.windowHeight-100);
    button4.mouseClicked(changepage);

  }

  p.draw = function() {
    p.clear();





  }

  p.startvideo = function() {}

};



var canvas4 = new p5(page4);