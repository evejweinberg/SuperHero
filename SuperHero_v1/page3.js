// create second sketch
var page3 = function(p) {

  playingpage3 = true;
  // playingvideo3 = false;

  p.setup = function() {
    // p.image(clank, 0, 0, p.windowWidth, p.windowHeight);
    // noCanvas();
    var canvas3 = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas3.parent('page_3');
    clank = p.createVideo('assets1/Pow_v1.mov');
    clank.position(0, 0);
    clank.parent('page_3');
    button3 = p.createButton('Next Page');
    button3.parent('page_3');
    button3.position(19, 409);

    button3.mouseClicked(changepage);
      words = p.createP('Do you \n\r Accept your mission?');
    // if (video has finished){
    words.class('whitepoetry').position(100,100).parent('page_3');
    // }
  }

  p.draw = function() {
    // $('video')[0].loop();
    p.clear();
    // p.background(0, 250, 150);
  
    
    for (var i = 0; i < 5; i++) {
      p.ellipse(50 * i, p.height * 0.25, 20, 20);
    }

    clank.autoplay(false);
    if ($('#page_3').is(':visible')) { //why does this only work if we click to another tab then come back t othis page?
      p.startvideo();

    }
  }

  p.startvideo = function() {
    // if (playingvideo3 === false) {
    p.image(clank, 0, 0, p.windowWidth, p.windowHeight);
    clank.loop(); //dont want it to loop, want it to play then remove itself
    // }
    playingvideo3 = true;
  }





};



var canvas3 = new p5(page3);