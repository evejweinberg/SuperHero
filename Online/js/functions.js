//this gets called every time a new scene is called
function restartAllCounters() {
  // $('#battery').html('')
  transitionTicker = 0;
  Scn5_frmct = 0;
  Scn4_frmct = 0;
  cloudMovex = 0;
  Scn4_textcounter = 0;
  var isccplaying = false;
  var flyingOrbitRate = 0;
  var playSecondVid = false;
  var instructionsready = false;
  var savmeplaying = false;
  var bgplaying = false;
  var dearEarthplaying = false;
  var ast_x = -100;
  var ast_y = -100;
  var ast_size = 766;
  var scene3counter = 0;
  var switchAstMove = false;
  var firstround = true;
  var gameSongIsPlaying = false;
    var cheersSongIsPlaying = false;
  var gameoverclock = 0;
  var turbo = false;
  var readyforschool = false;
  var cloudMovex = 0;
  var Scn3_frmct = 0;
  var scene3A = true;
  var scene3B = false;
  flapTemp1.position(windowWidth / 2 - 250, 240);
  FlightSchoolSign.position(windowWidth / 2, -40);
}

function changeScene(num) { //these only get called once, based on a sensor or keypress
// $('#battery').hide();
  showbatterysign = false;
  restartAllCounters();
  dearEarth.stop();
  $('.class1').hide();
  $('.class2').hide();
  $('.class3').hide();
  $('.class4').hide();
  $('.class5').hide();
  $('.class6').hide();
  $('.class7').hide(); //callibration
  $('.gamveoverDiv').hide();
  $('.flyingoverhead').hide();
  $('#squeezeFistGif').hide();
  $('#readyforschool').hide();
  scene1 = false;
  scene2 = false;
  scene3 = false;
  scene4 = false;
  scene5 = false;
  scene6 = false;
  scene7 = false;
  $(document.body).removeClass('spacebg');
  $(document.body).removeClass('yellowbg');
  $(document.body).removeClass('pressbg');
  $(document.body).removeClass('pressbg2');
  $(document.body).removeClass('pressbg3');
  $(document.body).removeClass('flighttestbg');
  // Scn5_frmct = 0;
  // Scn4_frmct = 0;
  camZ = 30000;
  camY = 0;

  if (num == 1) {
    $('.class1').show();
    scene1 = true;

  }
  if (num == 2) {
    scene1 = false;
    scene2 = true;
    $('.class2').show();
  }
  if (num == 3) {
    scene3 = true;

    // $(document.body).addClass('flighttestbg');
    $('.class3').show();
    $("#flap2").hide();
    dearEarth.stop();

  }
  if (num == 4) {
    scene4 = true;
    Scn4_textcounter = 0;
    Scn4_frmct = 0;
    $(document.body).addClass('spacebg');
    $('.flyingoverhead').show();
    $('.class4').show();
    $('#squeezeFistGif').hide();
  }
  if (num == 5) {
    scene5 = true;
    fuckthis = true;
    camZ = 30000;
    camY = 0;
    $('.class5').show();
    $('#userSpeedDiv').hide();
    $('.gamveoverDiv').hide();
  }
  if (num == 6) {
    randomScene6bg = round(random(1, 3));
    Scn5_frmct = 0;
    camZ = 30000;
    camY = 0;
    scene6 = true;
    $('.class6').show();
    // $(document.body).addClass('pressbg');
    if (randomScene6bg == 1) {
      $(document.body).addClass('pressbg');
    } else if (randomScene6bg == 2) {
      $(document.body).addClass('pressbg2');
    } else if (randomScene6bg == 3) {
      $(document.body).addClass('pressbg3');
    }
    rotateDiv.addClass('rotate');

  }
  if (num == 7) {
    playcc();
    $('.class7').show();
    $('#squeezeFistGif').hide();
    $('#readyforschool').hide();
    $(document.body).addClass('yellowbg');
    scene7 = true;
    //in 3 seconds call this
    timer = setTimeout(function() {
      CalibrationSensorValChangeges();
    }, 3000);


  }
} //function ends



function photoBooth() {
  console.log('taking photo')

  oneSnap = videoInput.get();
  photoBurst.push(oneSnap);
  photoIndex++;
  if (photoIndex == 60) {
    clearInterval(takePhotoBurst);
  }
}



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


//
// document.getElementById('loadingOver').addEventListener('ended',myHandler,false);
// function myHandler(){
//   console.log('ended handler')
//   changeScene(4);
//   $('#loading').remove();
// }



function NoGlovesScene1Done() {
  noGloves = true;
  // console.log('clicked')
  $('#loadingvideo').hide();
  $('#loadingOver').show();
  loadingOvervid.play();

  $('#loadingOver').bind('ended', function() {
    console.log('video over')
    $('#loading').remove();
    changeScene(4);
  });
}


function playSaveMe() {
  if (!savmeplaying) {
    saveme.play();
    savmeplaying = true;
  }
}

function playSwoosh() {
  if (!swooshplaying) {
    swoosh.play();
    swoosh.setVolume(1.7);
    swooshplaying = true;
  }
}

function playcc() {
  if (!isccplaying) {
    cc.play();
    isccplaying = true;
  }
}



  function playVid() {
    //this is the transition to the scene 4 where we read the mission
    loadingOvervid.play();
  }


//scene 1
function bgmusic() {
  if (!bgplaying && bg01) {
    // bg01.setVolume(0.1);
    bg01.play();
    bgplaying = true;
  }
}

//scene4
function dearEarthVO() {
  if (!dearEarthplaying) {
    // dearEarth.setVolume(0.6);
    dearEarth.play();
    dearEarthplaying = true;
    // bg01.setVolume(0.05);
  }
}

function checkBattery() {
  // console.log('checking battery')
  if (scene1 == true) {
    showbatterysign = true;
  } else {
    showbatterysign = false;
  }
}


function Begincountdown() {
  calcountdown = window.setInterval(function() {

    Math.round(callibrationCountdown--); //every second do this.
  }, 1000);
}

function playCheers(){
  if(!cheersSongIsPlaying){
    cheersSongIsPlaying = true;
    var cheersPicker = floor(random(cheers.length));//round(random(1,5));
  // console.log(cheersPicker)
  //if (frameCount % 60 == 0){
  cheers[cheersPicker].play();
  }
}



function Scn6Jitter() {
  this.startingFrame = floor(random(sprite1Total));
  var spriteNumber = scn6BGsprite.length;


  this.x = (spriteNumber % 15) * 200;

  this.y = floor(spriteNumber / 15) * 150;
  this.rh = random(40, 130);

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



function calibrationOver() {
  if (calibrateFinal == true) {
    calibrateFinal = false;
    changeScene(3); //switch to flight school
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function gameSongPlaying() {
  if (!gameSongIsPlaying) {
    gameSongIsPlaying = true;

    songpicker = floor(random(0, 10));
    // relace all this with a switchcase

    if (songpicker == 1) {
      gameSong1.play();
    } else if (songpicker == 2) {
      gameSong2.play();
    } else if (songpicker == 3) {
      gameSong3.play();
    }else if (songpicker == 4) {
      gameSong4.play();
    }else if (songpicker == 5) {
      gameSong5.play();
    }else if (songpicker == 6) {
      gameSong6.play();
    }else if (songpicker == 0) {
      gameSong0.play();
    }else if (songpicker == 7) {
      gameSong7.play();
    }else if (songpicker == 8) {
      gameSong8.play();
    }else if (songpicker == 9) {
      gameSong9.play();
    }
  }
}
