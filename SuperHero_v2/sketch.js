var newspapertempheader, cd_3, cd_2, cd_1, cd_fly, game, earthspin, inst, saveme, bg01, asteroid, scene3header, flapTemp, dearEarth, scene5countdown, cappink, capblue;
var instscaledown = 300;
var fist, fistinst;
var fistx = -100;
var fisty = 200;
var game_frames = [];
var Scn2_frames = [];
var earthspin_frames = [];
var currentframe = 0;
var Scn2frmct = 0;
var Scn3_frmct = 0;
var Scn5_frmct = 0;
var Scn4_frmct = 0;
var transitionCounter = 0;
var Scn4_totalframes = 159;
var totalgameframes = 720;
var totalaftercapeframes = 325;
var aspect = 1920 / 1080;
var aftercape, TotalSeconds;
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
var count = 30;
var countermillis = 60;
var counter;


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
  for (var i = 0; i < totalgameframes; i++) { //load all the image names
    game = "assets/GAME_" + nf(i, 3) + ".png";
    game_frames.push(loadImage(game)); //push them all into an array
  }
  for (var i = 0; i < Scn4_totalframes; i++) { //load all the image names
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
  cd_2 = loadSound('assets/two.m4a');
  cd_1 = loadSound('assets/one.m4a');
  cd_fly = loadSound('assets/fly.m4a');
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

  newspapertempheader = createP('The Press wants a photo!');
  newspapertempheader.class('class6').class('header');
  flapTemp1 = createImg('assets/flapTemp.gif');
  flapTemp2 = createImg('assets/flytestpre2.png');
  flapTemp3 = createImg('assets/flytestpre3.png');
  var flapdiv = createDiv('');
  flapdiv.class('flapdiv');
  flapTemp1.class('class3').id('flap1').class('flap1').parent(flapdiv);
  flapTemp2.class('class3').id('flap2').parent(flapdiv);
  flapTemp3.class('class3').id('flap3').parent(flapdiv);
  
  

  fist = createImg('assets/fist.png');
  fist.class('fist').class('class2').position(fistx, fisty);
  fistinst = createP('close right fist like this to begin');
  fistinst.position(fistx, fisty).class('class2').class('header').id('fistinst');
  scene3header = createP('we need to test your flight skills, pronto');
  scene3header.class('header').class('class3').id('scene3header');

  scene4header = createP('Dear Earthling Superheros');
  scene4header.class('header').class('class4');
  scene4button = createButton('ready to play');
  scene4button.position(300, 600).class('class4').class('header');
  scene4button.mouseClicked(playGame);

  scene5countdown = createP('3');
  scene5countdown.class('countdown').class('class5').id('countdowntofly').position(windowWidth / 2, windowHeight / 2); //subtract element width/2 and hright
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
  if (Scn3_frmct < 100) {
    console.log("scn3 counter:  " + Scn3_frmct);
  }


}




function draw() {
  bgmusic();
  clear();

  if (playSecondVid == true) {
    scene2 = true;
    scene1 = false;
    Scn2frmct++;
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
    if (Scn2frmct > 110) {

      fisty--;
      fistx--;

    }
    if (Scn2frmct < 324) {
      image(Scn2_frames[Scn2frmct], 0, 0, windowWidth, windowWidth / aspect);
    } else {
      image(Scn2_frames[324], 0, 0, windowWidth, windowWidth / aspect);
      loadfirstinstruction();
    }
  } else if (scene3 == true) {
    flyingTest();

  } else if (scene4 === true) {
    scene3 = false;
    dearEarthVO();
    noFill();
    strokeWeight(5);
    stroke(0, 166, 255);
    ellipse(500, 500, 500, 500);
    if (Scn4_frmct >= Scn4_totalframes) {
      Scn4_frmct = 0;
    }
    image(earthspin_frames[Scn4_frmct], 300, 300, 300, 300);
    Scn4_frmct++;


  } else if (scene5 == true) {
    background(247, 209, 66);
    scene4 = false;
    dearEarth.stop();
    image(game_frames[currentframe], 0, 0, windowWidth, windowWidth / aspect);
    // console.log('scene5 frm ct:   ' + Scn5_frmct);
    Scn5_frmct++;
    // console.log('after :   ' + Scn5_frmct)


    // if (Scn5_frmct > 30000) {
    //   scene5 = false;
    //   $('.class5').hide();
    //   scene6 = true;
    //   $('.class6').show();
    // }

    if (Scn5_frmct == 1) {
      cd_3.play();
    }
    if (Scn5_frmct == 60) {
      cd_2.play();
    }
    if (Scn5_frmct == 120) {
      cd_1.play();
    }
    if (Scn5_frmct == 180) {
      cd_fly.play();
    }
    if (Scn5_frmct > 60 && Scn5_frmct < 120) {
      console.log('TWO!')

      document.getElementById('countdowntofly').innerHTML = '2';
    } else if (Scn5_frmct > 120 && Scn5_frmct < 180) {
      console.log('ONE!')
      document.getElementById('countdowntofly').innerHTML = '1';
    } else if (Scn5_frmct > 180 && Scn5_frmct < 240) {
      document.getElementById('countdowntofly').innerHTML = 'FLY!';
    } else if (Scn5_frmct == 240) {
      document.getElementById('countdowntofly').innerHTML = '';
      counter = setInterval(timer, 33); //1000 will  run it every 1 second
    }

  } else if (scene6 == true) {
    background(57, 42, 48);

  }


} ///DRAW ENDS////////



function callnextscene() {

  $('.class5').hide();
  $('.class6').show();

}

function keyPressed() {

  if (scene2 === true) {
    if (keyCode === ENTER) {
      console.log('scene2end');
      scene3 = true;
      $('.class2').hide();
      $('.class3').show();
      scene2 = false;
      playSecondVid = false;
    }

  } else if (scene3 === true) {
    if (keyCode === ENTER) {
      console.log('scene3end');
      scene3 = false;
      $('.class3').hide();
      $('.class4').show();
      scene4 = true;

    }
    if (keyCode === 65 || keyCode === 97) { //A

      document.getElementById('flap1').src = 'assets/flytestafter.png';
      document.getElementById('flap2').src = 'assets/flapTemp.gif';
    } else if (keyCode === 66 || keyCode === 98) { //B

      document.getElementById('flap2').src = 'assets/flytestafter.png';
      document.getElementById('flap3').src = 'assets/flapTemp.gif';
    } else if (keyCode === 67 || keyCode === 99) { //C

      document.getElementById('flap3').src = 'assets/flytestafter.png';
      transitionfrom3to4();
    }
  } else if (scene1 === true) {
    if (keyCode === ENTER) {
      console.log('scene1end');
      EndIntro();
      playSecondVid = true;
      scene1 = false;
      $('.class1').hide();
      scene2 = true;
      $('.class2').show();

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
    if (keyCode === ENTER) {
      scene5 = false;
      $('.class5').hide();
      scene6 = true;
      $('.class6').show();
      callnextscene();
    }
    if (key === ' ') {
      currentframe++; //this will be a sensor later
    }
    return false;
  }


} ///KEYPRESS ENDS/////////////

function playGame() {
  scene4 = false;
  $('.class4').hide();
  scene5 = true;
  $('.class5').show();

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

function transitionfrom3to4() {
  document.getElementById('scene3header').innerHTML = 'FLIGHT TEST COMPLETE';
  transitionCounter++;
  if (transitionCounter > 120) {
    scene3 = false;
    scene4 = true;

  }


}


function timer() {
  count = count - .03333;
  if (count <= 0) {
    clearInterval(counter);
    return;
  }
  var adjustedTimer = String(Math.round(count * 100) / 100);
  document.getElementById("timer").innerHTML = adjustedTimer.replace('.', ':'); // watch for spelling
  if (count == 0) {
    document.getElementById('countdowntofly').innerHTML = 'GAME OVER';
  }

}