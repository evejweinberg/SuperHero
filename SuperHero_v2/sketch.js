var cd_3, cd_2, cd_1, cd_f, earthorbit, earthspin, inst, saveme, bg01, asteroid, scene3header, flapTemp, dearEarth, scene5countdown, cappink, capblue;
var instscaledown = 300;
var earthorbit_frames = [];
var Scn2_frames = [];
var earthspin_frames = [];
var currentframe = 0;
var Scn2frmct = 0;
var Scn3_frmct = 0;
var Scn5_frmct = 0;
var Scn5_clock = 0;
var Scn4_frmct = 0;
var totalearthspin = 159;
var totalearthorbitframes = 320;
var totalaftercapeframes = 325;
var aspect = 1920 / 1080;
var aftercape, Timer, TotalSeconds;
var playSecondVid = false;
var instructionsready = false;
var strokevar = 1;
var singlestar = [];
var savmeplaying = false;
var bgplaying = false;
var dearEarthplaying = false;
var ast_x = -100;
var ast_y = -100;
var ast_size = 366;
var scene3counter = 0;
var totalstars = 20;
var scene1 = true;
var scene2 = false;
var scene3 = false;
var scene4 = false;
var scene5 = false;
var scene6 = false;


function starfield1() {
  this.x = random(1920);
  this.y = random(1080);
  stroke(255);
  this.radius = random(30);
  this.display = function() {
    strokeWeight(4);
    this.radius = this.radius + .5;
    line(this.x, this.y - this.radius / 2, this.x, this.y + this.radius / 2);
    line(this.x + this.radius / 2, this.y, this.x - this.radius / 2, this.y);
  }
  this.twinkle = function() {
    if (this.radius > 30) {
      this.radius = -this.radius;
    } else if (this.radius < 5) {
      this.radius = this.radius;
    }
  }
}

function playSaveMe() {
  if (!savmeplaying) {
    saveme.play();
    savmeplaying = true;

  }
}



function preload() {
  for (var i = 0; i < totalearthorbitframes; i++) { //load all the image names
    earthorbit = "assets/EarthOrbit" + nf(i, 3) + ".png";
    earthorbit_frames.push(loadImage(earthorbit)); //push them all into an array
  }
  for (var i = 0; i < totalearthspin; i++) { //load all the image names
    earthspin = "assets/spin_" + nf(i, 3) + ".png";
    earthspin_frames.push(loadImage(earthspin)); //push them all into an array
  }
  for (var i = 0; i < totalaftercapeframes; i++) { //load all the image names
    aftercape = "assets/AC2_" + nf(i, 3) + ".png";
    Scn2_frames.push(loadImage(aftercape)); //push them all into an array
  }
  saveme = loadSound('assets/saveme.m4a');
  bg01 = loadSound('assets/bg01.mp3');
  dearEarth = loadSound('assets/dearEarth.m4a');
  cd_3 = loadSound('assets/three.m4a');
  asteroid = loadImage('assets/asteroid.png');
  cappink = createImg('assets/cappink.png');
  capblue = createImg('assets/capblue.png');
  cappink.class('class4').id('cappink');
  capblue.class('class4').id('capblue');
}



function dearEarthVO() {

  if (!dearEarthplaying) {
    dearEarth.setVolume(0.6);
    dearEarth.play();
    dearEarthplaying = true;
    bg01.setVolume(0.05);
  }
}

function bgmusic() {
  if (!bgplaying) {
    bg01.setVolume(0.1);
    bg01.play();
    bgplaying = true;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  flapTemp1 = createImg('assets/flapTemp.gif');
  flapTemp2 = createImg('assets/flytestpre.png');
  flapTemp3 = createImg('assets/flytestpre.png');
  flapTemp1.position(100, 300).class('class3').id('flap1').class('flap1');
  flapTemp2.position(800, 300).class('class3').id('flap2');
  flapTemp3.position(1400, 300).class('class3').id('flap3');

  // inst = createImg('assets/fist.png');
  // inst.class('instructions').class('class2');
  inst = createDiv('');
  inst.id('fist').class('class2');
  scene3header = createP('we need to test your flight skills, pronto');
  scene3header.class('header').class('class3');

  scene4header = createP('Dear Earthling Superheros');
  scene4header.class('header').class('class4');
  scene4button = createButton('ready to play');
  scene4button.position(300, 600).class('class4').class('header');
  scene4button.mouseClicked(playGame);

  scene5countdown = createP('3');
  scene5countdown.class('countdown').class('class5').id('countdowntofly');
  $('.header').hide();
  $('.class3').hide();
  $('.class2').hide();
  $('.class4').hide();
  $('.class5').hide();
  $('.class6').hide();


  for (var m = 0; m < totalstars; m++) {
    singlestar.push(new starfield1());
  }
} ///SETUP ENDS


function flyingTest() {
  Scn3_frmct++;
  if (Scn3_frmct < 400) {
    console.log("scn3 counter:  " + Scn3_frmct);
  }

  if (Scn3_frmct > 400) {

    console.log('scene 4 should be true now')
    scene4 = true;
    scene3 = false;

  }

}




function draw() {
  bgmusic();
  clear();

  if (scene3 == true) {
    $('.class3').show();
    $('.class2').hide();
    flyingTest();

  } else if (scene4 === true) {
    console.log('scene 4 IS true')
    $('.class3').hide();
    $('.class4').show();
    scene3 = false;
    dearEarthVO();
    // background(236, 115, 105);
    noFill();
    strokeWeight(5);
    stroke(0, 166, 255);
    ellipse(500, 500, 500, 500);
    Scn4_frmct++;
    console.log('scn4 framect:   ' + Scn4_frmct);
    image(earthspin_frames[Scn4_frmct], 300, 300, 300, 300);
    if (Scn4_frmct > totalearthspin) {
      Scn4_frmct = 0;
    }


  } else if (scene5 == true) {
    background(247, 209, 66);
    scene4 = false;
    dearEarth.stop();
    $('.class4').hide();
    $('.class5').show();
    image(earthorbit_frames[0], 0, 0, windowWidth, windowWidth / aspect);
    console.log('scene5 frm ct:   ' + Scn5_frmct);
    Scn5_frmct++;
    Scn5_clock++;
    if (Scn5_clock > 30000) {
      scene5 = false;
      scene6 = true;
    }
    
    if (Scn5_frmct ==0){
    cd_3.play();
  }
    if (Scn5_frmct > 30 && Scn5_frmct < 60) {

      document.getElementById('countdowntofly').innerHTML = '2';
    } else if (Scn5_frmct > 60 && Scn5_frmct < 90) {
      document.getElementById('countdowntofly').innerHTML = '1';
    } else if (Scn5_frmct > 90) {
      document.getElementById('countdowntofly').innerHTML = 'FLY!';
    }




  } else if (playSecondVid == true) {
    scene2 = true;
    scene1 = false;
    Scn2frmct++;
    console.log("scene2=true");
    console.log("scenectis" + Scn2frmct);
    for (var o = 0; o < totalstars; o++) {
      singlestar[o].display();
      singlestar[o].twinkle();
    }
    if (Scn2frmct == 57) {
      playSaveMe();
    }
    if (Scn2frmct > 87) {
      asteroidEnter();
    }
    if (Scn2frmct < 324) {
      image(Scn2_frames[Scn2frmct], 0, 0, windowWidth, windowWidth / aspect);
    } else {
      image(Scn2_frames[324], 0, 0, windowWidth, windowWidth / aspect);
      loadfirstinstruction();
    }
  } else if (scene6 === true) {
      $('.class5').hide();
        $('.class6').show();
    background(244, 179, 100);
    var newspapertemp = createP('You are a hero');
    newspapertemp.class('class6').id('newspaper');

  }
}





function keyPressed() {

  if (scene2 === true) {
    if (keyCode === ENTER) {
      console.log('scene2end');
      scene3 = true;
      scene2 = false;
      playSecondVid = false;
    }

  } else if (scene3 === true) {
    if (keyCode === ENTER) {
      console.log('scene3end');
      scene3 == false;
      scene4 == true;

    }
    if (keyCode === 65 || keyCode === 97) { //A
      console.log('a was pressed');
      document.getElementById('flap1').src = 'assets/flytestafter.png';
      var flap2change = document.getElementById('flap1');
      flap2change.src = 'assets/flapTemp.gif';
    } else if (keyCode === 66 || keyCode === 98) { //B
      console.log('B was pressed');
      var flap3change = document.getElementById('flap1');
      // flap2change.src = 'assets/fflytestafter.png';
      flap3change.src = 'assets/flapTemp.gif';
    }
  } else if (scene1 === true) {
    if (keyCode === ENTER) {
      console.log('scene1end');
      EndIntro();
      playSecondVid = true;
      scene1 == false;
      scene2 == true;

    }
  } else if (scene4 === true) {
    if (keyCode === ENTER) {
      console.log('scene4end');
      scene5 = true;
      $('.class5').show();
      scene4 = false;
      $('.class4').hide();
    }
  } else if (scene5 === true) { //game
    if (key === ' ') {
      currentframe++;
      image(earthorbit_frames[currentframe], 0, 0, windowWidth, windowWidth / aspect);
    }
    return false;
  }


} ///KEYPRESS ENDS/////////////

function playGame() {
  scene4 = false;
  scene5 = true;

}



function loadfirstinstruction() {
  $('.class2').show();
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function EndIntro() {
  if ($('#loading').is(':visible')) {
    $('#loading').hide();
  }
  scene1 = false;
}

function asteroidEnter() {
  var targetsize = 100;
  var targetastx = 400 + random(-50, 50);
  var targetasty = 400 + random(-50, 50);
  ast_x += (targetastx - ast_x) * .05;
  ast_y += (targetasty - ast_y) * .05;
  ast_size -= (ast_size - targetsize) * .05;
  image(asteroid, ast_x, ast_y, ast_size, ast_size);

}