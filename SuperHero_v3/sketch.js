var newspapertempheader, cd_3, cd_2, cd_1, cd_fly, game, inst, saveme, bg01, asteroid, scene3header, scene2header, flapTemp, dearEarth, scene5countdown, cappink, capblue;
var instscaledown = 300;
var colors;
var fist, fistinst;
var fistx = -100;
var fisty = 200;
var earthspin;
var Scn2_frames = [];
var earthspin_frames = [];
// turbo png sequence
var turbo;
var turbo_frames = [];
var turboFrameNum = 0;
var turboTotalFrames = 30;
var currentframe = 0;
var Scn2frmct = 0;
var Scn3_frmct = 0;
var Scn5_frmct = 0;
var Scn4_frmct = 0;
var transitionCounter = 0;
var earthSpinFrames = 26;
var totalgameframes = 720;
var game_frames = [];
var totalScn2frames = 325;
var aspect = 1920 / 1080;
var aftercape, TotalSeconds;
var playSecondVid = false;
var instructionsready = false;
var strokevar = 1;
var singlestar = [];
var savmeplaying = false;
var bgplaying = false;
var dearEarthplaying = false;
//astroid 
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
var counter;
//photobooth
var canvas, capture, mycam, button, img;
var totalParticles = 12; //number of total particles
var arrayOfBalls = []; //empty array to be filled
var arrayOfLines = [];

//scene 2
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

//scene4
function dearEarthVO() {
  if (!dearEarthplaying) {
    dearEarth.setVolume(0.6);
    dearEarth.play();
    dearEarthplaying = true;
    bg01.setVolume(0.05);
  }
}



function preload() {
  img = loadImage('assets/newspaper.PNG');
  for (var i = 0; i < totalgameframes; i++) { //load all the image names
    game = "assets/GAME_" + nf(i, 3) + ".png";
    game_frames.push(loadImage(game)); //push them all into an array
  }

  for (var i = 0; i < turboTotalFrames; i++) { //load all the image names
    turbo = "assets/TurboA_" + nf(i, 3) + ".png";
    turbo_frames.push(loadImage(turbo)); //push them all into an array
  }
  for (var i = 0; i < earthSpinFrames; i++) { //load all the image names
    earthspin = "assets/earthSpin02_" + nf(Math.round(i), 3) + ".png";
    earthspin_frames.push(loadImage(earthspin)); //push them all into an array
  }
  for (var i = 0; i < totalScn2frames; i++) { //load all the image names
    aftercape = "assets/AC2_" + nf(i, 3) + ".png";
    Scn2_frames.push(loadImage(aftercape)); //push them all into an array
  }
  saveme = loadSound('assets/saveme.m4a');
  bg01 = loadSound('assets/bg01.mp3');
  dearEarth = loadSound('assets/DearEarthlings_01.m4a');
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

//scene 1
function bgmusic() {
  if (!bgplaying) {
    bg01.setVolume(0.1);
    bg01.play();
    bgplaying = true;
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  colors = [
    color(57, 42, 48), //brown
    color(246, 209, 68), //yellow
    color(236, 115, 105), //pink 
    color(123, 200, 166), //green
    color(244, 179, 100), //orange 
    color(165, 218, 194), //light green
    color(231, 8268), //drkpink
    color(0, 166, 155) //blue

  ]

  capture = createCapture(VIDEO);
  capture.size(640, 480).position(30, 510).class('class6');
  capture.hide();
  savePhotoButton = createButton('Superhero!');
  savePhotoButton.position(700, 209).class('class6');
  savePhotoButton.mousePressed(savePicture);

  newspapertempheader = createP('The Press wants a photo!');
  newspapertempheader.class('class6').class('header').id('press');
  // scene 3 flap calibration
  flapTemp1 = createImg('assets/flapTemp.gif');
  flapTemp2 = createImg('assets/flytestpre2.png');
  flapTemp3 = createImg('assets/flytestpre3.png');
  var flapdiv = createDiv('');
  flapdiv.class('flapdiv');
  flapTemp1.class('class3').id('flap1').class('flap1').parent(flapdiv);
  flapTemp2.class('class3').id('flap2').parent(flapdiv);
  flapTemp3.class('class3').id('flap3').parent(flapdiv);
  scene3header = createP('we need to test your flight skills, pronto');
  scene3header.class('header').class('class3').id('scene3header');


  // scene 2 trigger the glove switch fist
  fist = createImg('assets/fist.png');
  fist.id('fist').class('class2').position(fistx, fisty);
  fistinst = createP('close right fist' + '\n' + 'like this to begin').id('fistinst');
  fistinst.position(fistx + 300, fisty + 400).class('class2').class('header');
  scene2header = createP('MISSION: ASTEROID');
  scene2header.class('header').class('class2').id('scene2header');
  $('#fist').hide();
  $('#fistinst').hide();

  // scene 4
  scene4header = createP('Dear Earthling Superheros');
  scene4header.class('header').class('class4');
  scene4button = createButton('ready to play');
  scene4button.position(300, 600).class('class4').class('header');
  scene4button.mouseClicked(function() {
    changeScene(5)
  });


  scene5countdown = createP('3');
  scene5countdown.class('countdown').class('class5').id('countdowntofly').position((windowWidth / 2), ((windowWidth / aspect) / 2) - 150); //subtract element width/2 and hright

  //scene 2
  for (var m = 0; m < totalstars; m++) {
    singlestar.push(new starfield1());
  }

  changeScene(1);
} ///SETUP ENDS

function changeScene(num) { //these only get called once, based on a sensor or keypress
  $('.class1').hide();
  $('.class2').hide();
  $('.class3').hide();
  $('.class4').hide();
  $('.class5').hide();
  $('.class6').hide();
  scene1 = false;
  scene2 = false;
  scene3 = false;
  scene4 = false;
  scene5 = false;
  scene6 = false;

  if (num == 1) {
    $('.class1').show();
    scene1 = true;

  }

  if (num == 2) {
    scene1 = false;
    scene2 = true;
    $('.class2').show();
    $('#fist').hide();
    $('#fistinst').hide();

  }
  if (num == 3) {
    scene3 = true;


    $('.class3').show();

  }

  if (num == 4) {
    scene4 = true;


    $('.class4').show();

  }
  if (num == 5) {
    scene5 = true;


    $('.class5').show();

  }

  if (num == 6) {
    scene6 = true;

    $('.class6').show();
  }
} //function ends


function flyingTest() {}




function draw() {
  bgmusic();
  clear();

  if (scene2 == true) {
    scene2 = true;
    scene1 = false;
    // console.log(Scn2frmct);
    Scn2frmct++;
    for (var o = 0; o < totalstars; o++) {
      singlestar[o].display();
      singlestar[o].twinkle();
    }
    if (Scn2frmct == 57) {
      playSaveMe();
    } else if (Scn2frmct > 87) {
      asteroidEnter();

    }
    if (Scn2frmct == 107) {
      $('#fist').show();
      $('#fistinst').show();
      $("#fist").addClass('fistMove'); //why doesn't this work
      var changefist

    }
    // animated earth "save me"
    if (Scn2frmct < 324) {
      image(Scn2_frames[Scn2frmct], 0, 0, windowWidth, windowWidth / aspect);
    } else {
      image(Scn2_frames[324], 0, 0, windowWidth, windowWidth / aspect);
    }
    // flying test calibration
  } else if (scene3 == true) {
    flyingTest();
    for (var i = 0; i < arrayOfBalls.length; i++) {
      arrayOfBalls[i].display(); //display them all
      arrayOfBalls[i].explode(); //explode them all
    }

    for (var i = 0; i < arrayOfBalls.length; i++) {

      if (arrayOfBalls[i].size === 0) {
        arrayOfBalls.splice(i, 1);
      }
    }

  } else if (scene4 === true) {
    dearEarthVO();
    noFill();
    strokeWeight(5);
    stroke(0, 166, 255);
    ellipse(500, 500, 500, 500);
    // console.log(Math.round(Scn4_frmct));
    if (Math.round(Scn4_frmct) >= earthSpinFrames) {
      Scn4_frmct = 0;
    }
    image(earthspin_frames[Math.round(Scn4_frmct)], 300, 300, 300, 300);
    Scn4_frmct = Scn4_frmct + .3;


  } else if (scene5 == true) {
    background(247, 209, 66);
    dearEarth.stop();
    image(game_frames[currentframe], 0, 0, windowWidth, windowWidth / aspect);
    image(turbo_frames[turboFrameNum], 0, 0, windowWidth, windowWidth / aspect);

    Scn5_frmct++;

    if (Scn5_frmct > 3000) {
      changeScene(6);

    }

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
      // console.log('TWO!')

      document.getElementById('countdowntofly').innerHTML = '2';
    } else if (Scn5_frmct > 120 && Scn5_frmct < 180) {
      // console.log('ONE!')
      document.getElementById('countdowntofly').innerHTML = '1';
    } else if (Scn5_frmct > 180 && Scn5_frmct < 240) {
      document.getElementById('countdowntofly').innerHTML = 'FLY!';
    } else if (Scn5_frmct == 240) {
      document.getElementById('countdowntofly').innerHTML = '';
      counter = setInterval(timer, 33); //1000 will  run it every 1 second
    }

  } else if (scene6 == true) {
    background(57, 42, 48);
    image(img, 0, 0);


  }



} ///DRAW ENDS////////




// soon to be replaced with sensor detection
function keyPressed() {

  if (scene2 === true) {
    if (keyCode === ENTER) {
      // console.log('scene2end');
      scene3 = true;
      changeScene(3);
      scene2 = false;

    }

  } else if (scene3 === true) {
    if (keyCode === ENTER) {
      // console.log('scene3end');
      scene3 = false;
      changeScene(4);
      scene4 = true;

    }
    if (keyCode === 65 || keyCode === 97) { //A
      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }

      document.getElementById('flap1').src = 'assets/flytestafter.png';
      document.getElementById('flap2').src = 'assets/flapTemp.gif';
    } else if (keyCode === 66 || keyCode === 98) { //B
    for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }


      document.getElementById('flap2').src = 'assets/flytestafter.png';
      document.getElementById('flap3').src = 'assets/flapTemp.gif';
    } else if (keyCode === 67 || keyCode === 99) { //C
    for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }

      document.getElementById('flap3').src = 'assets/flytestafter.png';
      transitionfrom3to4();
    }
  } else if (scene1 === true) {
    if (keyCode === ENTER) {
      EndIntro();
      scene2 = true;
      changeScene(2);

    }
  } else if (scene4 === true) {
    if (keyCode === ENTER) {

      // console.log('scene4end');
      changeScene(5);
    }
  } else if (scene5 === true) { //game
    if (keyCode === ENTER) {
      changeScene(6);
    }
    if (key === ' ') {
      currentframe++; //this will be a sensor later
    }
    if (keyCode === 65 || keyCode === 97) { //a
      runTurbo(); //this will be a sensor later

    }
    // return false;
  } else if (scene6 === true) {
    if (keyCode === ENTER) {}
  }


} ///KEYPRESS ENDS/////////////




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
    changeScene(4);

  }


}


function timer() {
  count = count - .03333;
  var adjustedTimer = String(Math.round(count * 100) / 100);
  document.getElementById("timer").innerHTML = adjustedTimer.replace('.', ':'); // watch for spelling
  if (count <= 0) {
    // console.log('setting GAME OVER');
    document.getElementById('countdowntofly').innerHTML = 'GAME OVER';
    clearInterval(counter);
  }


} ////TIMER ENDS


function savePicture() {
  save(canvas);
}

function runTurbo() {
  if (turboFrameNum < turboTotalFrames - 1) {
    turboFrameNum++;
  }
  if (turboFrameNum = turboTotalFrames - 1) {
    turboFrameNum = 0;
  }

}