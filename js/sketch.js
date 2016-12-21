
function setup() {

  $('#battery').show();

  //create p5 canvas
  canvas = createCanvas(windowWidth, windowHeight);
  centerH = (windowWidth / 2);
  calimgX = (windowWidth / 2) - 200;
  calimgY = (windowHeight / 2) - 160;

  //create HTML elements
  readyforschool = createImg('assets/readyforschool.png');
  readyforschool.class('class7').id('readyforschool');
  gd = new getCalibrationSensorValChange();
  //pause loading video
  loadingOvervid = document.getElementById("loadingOver");
  loadingOvervid.pause();
  // loadingOvervid.remove();
  spacebg = loadImage('assets/spaceEdges3.png');


  colors = [
        color(57, 42, 48), //brown
        color(246, 209, 68), //yellow
        color(236, 115, 105), //pink
        color(123, 200, 166), //green
        color(244, 179, 100), //orange
        color(165, 218, 194), //light green
        color(231, 82, 68), //drkpink
        color(0, 166, 155) //blue
      ]



    //scene6
  for (var i = 0; i < 200; i++) {
    scn6BGsprite.push(new Scn6Jitter());
  }
  rotateDiv = createDiv('');
  scene6buttons = createDiv('');
  scene6buttons.class('class6').id('scene6buttonholder')
  retakePhotoButton = createButton('Retake Photo').class('class6').addClass('scene6buttons').id('playbutton');
  retakePhotoButton.class('class6').addClass('scene6buttons').parent(scene6buttons);

  retakePhotoButton.mousePressed(function() {
    //reset this array if they want to retake photo
    photoBurst = [];
    photoIndex = 0;
    loopPhotos = 0;
    takePhotoBurst = setInterval(photoBooth, 20);

  });


  rotateDiv.class('class6').addClass('newspaperDiv');
  videoInput = createCapture(VIDEO);
  videoInput.size(575, 340);
  videoInput.position(575, 330);
  videoInput.hide();

  //p5js way of doing random
  var newsRandom = floor(random(0, 1.9));
  if (newsRandom == 0) {
    // console.log('newspaper is 0')
    newspaperImage = createImg('assets/newspaper2.png');
    newspaperImage.class('class6').parent(rotateDiv).id('scene6newspaper');
  } else {
    // console.log('newspaper is 1')
    newspaperImage = createImg('assets/newspaper3.png');
    newspaperImage.class('class6').parent(rotateDiv).id('scene6newspaper');
  }



  //scene 7 callibration
  calibrateSteadyType = createP('');
  calibrationHeader = createP('Put Your Arms Out \r\n Like This');
  calibrationHeader.class('class7').addClass('header3').id('calibrationHeaderid');
  calibrateSteadyType.class('class7').id('calibrateHoldSteady');
  callibrationImage = loadImage('assets/Callibration.png');
  shadow = loadImage('assets/shadow.png');
  CapeCalibrationSign = createImg('assets/CapeCalibrationSign2.png');
  CapeCalibrationSign.class('class7').addClass('capesign');


  // scene 3 flight test
  flapTemp1 = createImg('assets/flightTest01.gif');
  flapTemp2 = createImg('assets/turbo.gif');
  var flapdiv = createDiv('');
  flapdiv.class('flapdiv');
  flapTemp1.class('class3').addClass('flap1').id('flap1').position(windowWidth / 2 - 250, 240);
  flapTemp2.class('class3').addClass('flyIn3').id('flap2').size(462, 440).position(windowWidth / 2 - 250, 240);
  $("#flap2").hide();
  FlightSchoolSign = createImg('assets/FlightSchoolSign3.png');
  FlightSchoolSign.class('class3').addClass('sign').id('flightschoolsign');


  for (var m = 0; m < totalstars; m++) {
    singlestar.push(new starfield1());
  }

  // scene4
  scene4Script = createP('');
  scene4Script.class('class4').addClass('voiceover');
  currentText = scene4Script.html();
  words = split(transcript[0], '#');
  flysmall = createImg('assets/flying.gif');
  flysmall.class('class4');
  flyingOverhead2 = createImg('assets/flyingOverhead.png');
  flyingOverhead2.class('flyingoverhead').position(flythroughX, flythroughY).size(1400, 1250);
  $('.flyingoverhead').hide();
  squeezeFistGif = createImg('assets/fist4.gif').class('class4').id('squeezeFistGif');
  squeezeFistGif.position(squeezeFistGifX, squeezeFistGifY).size(500,936);

  //scene5
  keepgoing01 = loadImage('assets/keepgoing01.png');
  scene5countdown = createP('3');
  scene5countdown.class('countdown').addClass('class5').id('countdowntofly'); //subtract element width/2 and hright

  //at the end of setup, start scene 1
  changeScene(1);


} ///SETUP ENDS






function draw() {

  centerH = (windowWidth / 2);
  AverageAcellerometerNums();
  getSpeed();
  bgmusic();

  //this is a p5 thing to clear the background of the canvas
  clear();


  if (scene1 === true) {

    if (moveOnDebug == 1) {
      console.log('moveOnDebug 1 was called')
      // changeScene(1);
      $('#defaultCanvas0').show();
      $('#loadingvideo').hide();
      $('#loadingOver').show();
      //this is the transition video to scene 4
      loadingOvervid.play();
      $('#loadingOver').bind('ended', function() {
        console.log('transition vide oended')
        changeScene(4);
        $('#loading').remove();
      });
      // loadingOvervid.loop = false;
      moveOnDebug = 0
      // $('#battery').html('')

    }

  } else if (scene2 == true) {


  } else if (scene3 == true) {
    document.getElementById("yourSpeed").innerHTML = AllScenesMPH;
    if (scene3A == true) {

      if (AllScenesMPH > 100) {
        $("#flap1").addClass('FlyAway2');
        $("#flap2").show();
        document.getElementById('targetSpeed').innerHTML = '450';
        $("#flap2").addClass('FlyIn3');
        var readytoswitch = setInterval(function() {
          scene3A = false;
          scene3B = true;
        }, 2000);

      }
    }
    if (scene3B == true) {
      if (AllScenesMPH > 480) {

        for (var i = 0; i < totalParticles; i++) {

          arrayOfBalls.push(new flapWin1(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

          arrayOfBalls.push(new flapWin2(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
        }
        readyfortrans = true;

      }
    }

    image(Allclouds[3], round(cloudMovex), 50);
    image(Allclouds[3], round(cloudMovex) + 1600, 350);
    image(Allclouds[0], floor(cloudMovex) + 500, 200);
    image(Allclouds[1], floor(cloudMovex) + 300, 400);
    image(Allclouds[2], round(cloudMovex) + 1000, 100);

    image(spacebg, 0, 0, windowWidth, windowHeight);
    if (frameCount % 30 == 0) {
      cloudMovex = cloudMovex + 2;

    }

    if (readyfortrans == true) {
      $('#flightschoolsign').animate({
        height: '-200'
      }, 1200);
      transitionTicker = transitionTicker + .3;
      image(transitionToStory[round(transitionTicker)], 0, 0, windowWidth, windowHeight);
      if (transitionTicker > 12) {
        changeScene(5);
        readyfortrans = false;
      }
    }

    for (var i = 0; i < arrayOfBalls.length; i++) {
      arrayOfBalls[i].display(); //display them all
      arrayOfBalls[i].explode(); //explode them all
    }

    for (var i = 0; i < arrayOfBalls.length; i++) {

      if (arrayOfBalls[i].size === 0) {
        arrayOfBalls.splice(i, 1);
      }
    }

  } else if (scene4 === true) { //mission story
          playSwoosh();
              if (frameCount % 30 == 0) {
                cloudMovex = cloudMovex + 2;

              }
          image(Allclouds[3], round(cloudMovex) + 1000, 600, 135, 45); //get exact dimensions
          image(Allclouds[3], round(cloudMovex) + 1100, 320, 135, 45);
          image(Allclouds[0], floor(cloudMovex) + 810, 250, 135, 45);
          image(Allclouds[1], floor(cloudMovex) + 1200, 400, 135, 45);
          image(Allclouds[2], round(cloudMovex) + 850, 500, 135, 45);
            if (moveOnDebug == 2) {

              changeScene(7);
            }
          fill(255, 0, 0);
          // flyingOverhead.position(flythroughX - 40, flythroughY + 40);
          flyingOverhead2.position(flythroughX, flythroughY);


          flythroughX = flythroughX + 20;
          flythroughY = flythroughY - 20;
            if (flythroughX > windowWidth + 400) {
              $('.flyingoverhead').hide();
            }


          Scn4_textcounter++;
          dearEarthVO();
          if (Scn4_textcounter - lastCue > timings[index]) {
            currentText = scene4Script.html();
            lastCue = Scn4_textcounter;
            index = index + 1;
          }
          scene4Script.html(currentText + words[index]);

          Scn4_textcounter++;
          angleMode(DEGREES);
          angle = angle + .5;
            if (angle > 360) {
              angle = 0;
              firstround = false;
            }

          squeezeFistGif.position(squeezeFistGifX, squeezeFistGifY);
            if (Scn4_textcounter > 1490) {
              //change this to instructions about using your phone
              $('#squeezeFistGif').show();
              squeezeFistGifY = squeezeFistGifY - 20;
                if (squeezeFistGifY < height-800) {
                  squeezeFistGifY = height-800;
                }
            }

            //this is the circle of particles trialing the aniamtion
          var circl = map(millis(), 0, 30000, 0, 10); //30 sec to ten?
          var offsetX = ffcenterX;
          var offsetY = ffcenterY;
          var circx = cos(angle) * orbitRadius + ffcenterX + orbitRadius / 2 - 30;
          var circy = sin(angle) * orbitRadius + ffcenterY + orbitRadius / 2 - 30;
          flyingOrbitRate = (flyingOrbitRate + .55);
          flysmall.position(circx, circy).size(flyingSize, flyingSize).rotate(180 + flyingOrbitRate);


          if (Scn4_textcounter > 850) {
            asteroidHitandBounce();
          }

          if (Math.round(Scn4_frmct) >= earthSpinFrames) {
            Scn4_frmct = 0;
          }

          image(earthspin_frames[Math.round(Scn4_frmct)], ffcenterX, ffcenterY, 300, 300); //center of circle
          Scn4_frmct = Scn4_frmct + .3;


          if (angle < 360 && firstround == true) {
            particles.push(new FFParticle(circx + flyingSize / 2, circy + flyingSize / 2));
          }

          for (var i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].display();
          }

          if (readyfortrans == true) {
            transitionTicker = transitionTicker + .3;
            image(transitionToStory[round(transitionTicker)], 0, 0, windowWidth, windowHeight);
            if (transitionTicker > 12) {
              changeScene(7);
              readyfortrans = false;
            }
          }



  } else if (scene5 == true) {
      if (Scn5_frmct == 240) {
        takePhotoBurst = setInterval(photoBooth, 20);
      }

      Scn5_frmct++;
      if (readGameOver == true) {
        $('#userSpeedDiv').hide();
        gameoverclock++;
        if (gameoverclock > 240) {
          changeScene(6);
        }

      }
      if (Scn5_frmct > 180) {
        if (fuckthis == true) {
          CountDownTry4();
        }

      }
    if (AllScenesMPH > 520) { //hitting turbo
      for (var l = 0; l < 2; l++) {
        torus = createMesh(new THREE.TorusGeometry(37, 4, 10, 6, Math.PI * 2));
        torus.position.z = (camZ - 500) + (l * 30);
        torus.position.x = 0;
        torus.position.y = camY;
        scene.add(torus);
        torusMesh.push(torus);
      }
    }


    if (Scn5_frmct > 980 && Scn5_frmct < 1280) {
      image(keepgoing01, 0, 450);
    }
    document.getElementById("update-speed").innerHTML = AllScenesMPH;

    dearEarth.stop();



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
      document.getElementById('countdowntofly').innerHTML = '2';
    } else if (Scn5_frmct > 120 && Scn5_frmct < 180) {

      document.getElementById('countdowntofly').innerHTML = '1';
    } else if (Scn5_frmct > 180 && Scn5_frmct < 240) {
      document.getElementById('countdowntofly').innerHTML = 'FLY!';
    } else if (Scn5_frmct == 240) {
      $('#userSpeedDiv').show();
      document.getElementById('countdowntofly').innerHTML = '';
      gameSongPlaying();
      counter = setInterval(timer, 33); //1000 will  run it every 1 second
    }

  } else if (scene6 == true) {

    videoInput.position(windowWidth / 2 - 200, (windowHeight / 2) + 610);
    roveBothax = cos(millis() / 10) * 7;
    roveBothay = sin(millis() / 10) * 7;
    roveBothbx = sin(millis() / 10) * 7;
    roveBothby = cos(millis() / 10) * 7;
    for (var i = 0; i < scn6BGsprite.length; i++) {
      scn6BGsprite[i].display();
    }

    if (photoBurst.length > 0) {
      image(photoBurst[loopPhotos], (width / 2) - 215, (height / 2) + 35);
      loopPhotos = (loopPhotos + 1) % photoBurst.length;
    }

    Scene6counter++;
    for (var i = 0; i < arrayOfBalls.length; i++) {
      arrayOfBalls[i].display(); //display them all
      arrayOfBalls[i].explode(); //explode them all
    }

    for (var i = 0; i < arrayOfBalls.length; i++) {

      if (arrayOfBalls[i].size === 0) {
        arrayOfBalls.splice(i, 1);
      }
    }
    if (Scene6counter < 10) {
      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }
    }


  } else if (scene7 == true) {

    //callibration sceen

    //add these images
    image(spacebg, 0, 0, windowWidth, windowHeight);
    image(callibrationImage, calimgX, calimgY, 400, 400);
    image(shadow, (windowWidth / 2) - 92, windowHeight * .73);

    if (calibrateFinal == true) {
      console.log('cal final')
      calimgX = calimgX + 7;
      calimgY = calimgY - 7;
      textSize(100);
      textAlign(CENTER);
      $('#readyforschool').show();
      var up = -1;
      document.getElementById('calibrationHeaderid').innerHTML = '';
      readyforschool = true;

      $('.bluebgup').animate({
        height: '900'
      }, 1200);



      calcountdown = window.setInterval(function() { //
        calibrationOver(); //once over call this
        //this changes to scene 3 if calibrateFinal == true
      }, 3000); //every 3 seconds
    }



    if (callibrationStage === true) {
        console.log('callibrationStage')
      $('#readyforschool').hide();
      textSize(80);
      textAlign(CENTER);
      text('HOLD STEADY FOR:  ' + callibrationCountdown, windowWidth / 2, 730);
      calimgX = (windowWidth / 2) - 200;
      calimgY = (windowHeight / 2) - 160;

      if (callibrationCountdown <= 0) {
        //this will change 'calibrationfinal' to true
        CalibrationSensorValChangeges2();
        window.clearInterval(calcountdown);
      }
      textSize(20);

      //stream new numbers into this array, keep 100 numbers at a time
      NumstoCallibrate.push(newDataZ); //now that we're steady, lets gather the actual number
      if (NumstoCallibrate.length > 100) { // write over the 100 numbers in the array
        NumstoCallibrate.splice(0, 1);
      }

      sum = 0;
      for (var i = 0; i < NumstoCallibrate.length; i++) { //100 times
        var num = Number(NumstoCallibrate[i]); //raw sensor numbers
        sum = sum + num; //add them all up
      }
      CallibratedRestingNum = sum / NumstoCallibrate.length;


    } ///callibration over

    if (callibrationPreStage === true) {
      console.log('prestate')


      var t = document.getElementById('calibrateHoldSteady');
      t.innerHTML = '';
      textSize(30);
      textAlign(CENTER);
      calimgX = (windowWidth / 2) - 200;
      calimgY = (windowHeight / 2) - 160;
      textSize(60);
      if (distanceofvalues > 6) {
        textSize(80);
        textAlign(CENTER);
        text('NOT STEADY ENOUGH', windowWidth / 2, 730);

        // t.innerHTML = 'NOT STEADY';
      } else if (distanceofvalues < 6) {
        // t.innerHTML = 'HOLD STEADY FOR ' + callibrationCountdown;
        textSize(80);
        textAlign(CENTER);
        text('HOLD STEADY', windowWidth / 2, 730);
      }

      isCallibrationReady.push(distanceofvalues);
      if (isCallibrationReady.length > 10) { // write over the 10 numbers in the array
        isCallibrationReady.splice(0, 1);
      }
      sum = 0;
      for (var i = 0; i < isCallibrationReady.length; i++) {
        var num = Number(isCallibrationReady[i]);
        sum = sum + num;
      }
      averageValpreCal = sum / isCallibrationReady.length;
    } ///pre-callibration over


    if (averageValpreCal > 6) {

      window.clearTimeout(timer)

      timer = setTimeout(function() {
        //this function switches us to callibration stage
        CalibrationSensorValChangeges();
      }, 3000);



    }

  } //scene 7 ends



} ///DRAW ENDS////////





// function loadfirstinstruction() {
//   $('.class2').show();
// }


// function myHandler(e) {
//   scene1 = false;
//   scene7 = true;
//   changeScene(7);
// }

function toCalibration() {
  if ($('#loading').is(':visible')) {
    $('#loadingvideo').hide();
  }
  scene1 = false;
  scene7 = true;
  changeScene(7);
}

//scene1
function EndIntro() {
  if ($('#loadingvideo').is(':visible')) {
    $('#loadingvideo').hide();
  }
  scene1 = false;
  scene7 = true;
  changeScene(7);
}


//scene4
function asteroidHitandBounce() {
  var targetastx = ffcenterX - 150;
  var targetasty = ffcenterY;
  var targetastx2 = 300;
  var targetasty2 = 1200;
  if (dist(ast_x, ast_y, targetastx, targetasty) < 19) {
    switchAstMove = true;
  }
  if (switchAstMove == false) {
    var targetsize = 120;

    ast_x += (targetastx - ast_x) * .015;
    ast_y += (targetasty - ast_y) * .015;
    ast_size -= (ast_size - targetsize) * .05;
    image(asteroid, ast_x, ast_y, ast_size, ast_size);
  }
  if (switchAstMove == true) {
    ast_x += (targetastx2 - ast_x) * .018;
    ast_y += (targetasty2 - ast_y) * .018;

    image(asteroid, ast_x, ast_y, ast_size, ast_size);
  }

}

function FFParticle(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.initSize = random(5, 12);
  this.straySize = random(10, 35);
  this.size = this.initSize;
  this.h = 130 + random(70, 150);
  this.s = 100;
  this.b = 100;
  this.a = random(0.1, 1.0);
  this.spd = random(0.02, 0.08);
  this.noiseX = 0;
  this.noiseY = 0;
  this.noiseSpdX = random(0.001, 0.02);
  this.noiseSpdY = random(0.001, 0.02);

  this.update = function() {
    this.size = this.initSize + sin(frameCount * this.spd) * 8;
    this.noiseX = (noise(frameCount * this.noiseSpdX) - 0.5) * 20;
    this.noiseY = (noise(frameCount * this.noiseSpdY) - 0.5) * 20;
  }

  this.display = function() {
    push();
    noStroke();
    colorMode(HSB);
    fill(this.h, this.s, this.b, this.a);
    ellipse(this.x + this.straySize + this.noiseX, this.y + this.straySize + this.noiseY, this.size, this.size);

    ellipse(this.x + this.straySize + this.noiseX, this.y + this.straySize + this.noiseY, this.size, this.size);
    pop();
  }
}


//scene5
function CountDownTry4() {
  console.log('try 4 working')
  if (fuckthis == true) {
    countdownIdB = setInterval(countdownTry3, 1000);
    fuckthis = false;
  }
}

function countdownTry3() {
    console.log('try 3 working')
  if (clockB > 0) {
    clockB = clockB - 1;
    document.getElementById('timerStopWatch').innerHTML = '00:' + clockB;
    // clearInterval(countdownIdB);
  } else {
    playCheers();
    //Stop clock
    clearInterval(countdownIdB);
    $('.gamveoverDiv').show();
    var randomCongrats = round(random(0, 3.4));

    if (randomCongrats == 0) {
      document.getElementById('gameoverText').innerHTML = 'HOLEY MOLEY!';
    } else if (randomCongrats == 1) {
      document.getElementById('gameoverText').innerHTML = 'YOU DID IT';
    } else if (randomCongrats == 2) {
      document.getElementById('gameoverText').innerHTML = 'WOAHHHH';
    } else if (randomCongrats == 3) {
      document.getElementById('gameoverText').innerHTML = 'SUPER STAR';
    }
    // var milesFlown = String(floor((30000 - camZ)));

    document.getElementById('gameoverStat').innerHTML = 'You Flew  ' + addCommas(floor((30000 - camZ))) + '  Miles';
    readGameOver = true;
  }
}



//scene6
function savePicture() {
  save(canvas);
}



//scene7
function CalibrationSensorValChangeges() {
  if (callibrationPreStage == true) {

    callibrationPreStage = false;
    callibrationStage = true;
    Begincountdown(); //move onto real countdown
  }
}

function CalibrationSensorValChangeges2() {
  if (callibrationStage == true) {
    callibrationStage = false;
    UserArmOutNum = CallibratedRestingNum;
    calibrateFinal = true;
  }
}

function getCalibrationSensorValChange() {
  this.currentVal = newDataZ;
  this.previousVal = newDataZ;
  this.lastcheck = 0;

  this.display = function() {
    this.currentVal = newDataZ;

    if (millis() - this.lastcheck > 120) { //read every 10th of a second
      distanceofvalues = abs(this.currentVal - this.previousVal);

      this.previousVal = this.currentVal;
      this.lastcheck = millis();
    }
  }
}



function AverageAcellerometerNums() {
  NumstoCallibrateDuringFlight.push(newDataZ);
  if (NumstoCallibrateDuringFlight.length > 100) { // write over the 100 numbers in the array
    NumstoCallibrateDuringFlight.splice(0, 1);
  }
  sum = 0;
  for (var i = 0; i < NumstoCallibrateDuringFlight.length; i++) { //100 times
    var num = Number(NumstoCallibrateDuringFlight[i]); //raw sensor numbers
    sum = sum + num; //add them all up
  }
  // MovingAverage = sum / NumstoCallibrateDuringFlight.length;
  ////////if the sensor breaks!!!!////////
  if (sensorConnected == true) {
    if (scene3 == true && scene3B == true || scene5 == true) {
    distanceofvaluesFlying = speedMultiplier*round(abs(CallibratedRestingNum - newDataZ));
    } else if (scene3A == true && scene3 == true) {
      distanceofvaluesFlying = speedRnd1Multiplier* round(abs(CallibratedRestingNum - newDataZ));
    }
    // console.log(distanceofvaluesFlying);
  } else if (sensorConnected == false) {
    if (scene3 == true && scene3A == true) {
      // console.log('3A')
      distanceofvaluesFlying = random(35, 170);
    } else if (scene3B == true && scene3 == true) {
      // console.log('3B')
      distanceofvaluesFlying = random(200, 620);
    } else if (scene5 == true) {
      // console.log('5')
      distanceofvaluesFlying = random(155, 795);
    }
  }


}

function getSpeed() {
  if (distanceofvaluesFlying < 100) {

    range1 = 0;
    range1hit = true;
  }
  if (distanceofvaluesFlying > 120) {
    range2hit = true;
    range2 = range2 + 0.3;
    if (range2 > 3) {
      range2 = 3;
    }
  }
  if (distanceofvaluesFlying > 160) {
    range3hit = true;

    range3 = range3 + 0.5;
    if (range3 > 4) {
      range3 = 4;
    }

  }
  if (distanceofvaluesFlying > 250) {
    range4 = range4 + 0.6;
    range4hit = true;
    if (range4 > 4) {
      range4 = 4;
    }
  }
  if (distanceofvaluesFlying > 500) {
    range5hit = true;
    if (range5 == true) {

    }
    range5 = range5 + 0.6;
    if (range5 > 6.1) {
      range5 = 6.1;
    }
  }
  if (distanceofvaluesFlying > 750) {
    range6hit = true;
    range6 = range6 + 0.5;
    if (range6 > 10) {
      range6 = 10;
    }
  }


  CamSpeed = range1 + range2 + range3 + range4 + range5 + range6;
  if (frameCount % 15 == 0) {
    AllScenesMPH = round(map(CamSpeed, 0, 24, 0, 600));
  }
  if (range2hit == false) {
    range2 = range2 - 0.06 * decreasemult;
  }
  if (range3hit == false) {
    range3 = range3 - 0.04 * decreasemult;
  }
  if (range4hit == false) {
    range4 = range4 - 0.03 * decreasemult;
  }
  if (range5hit == false) {
    range5 = range5 - 0.02 * decreasemult;
  }
  if (range6hit == false) {
    range6 = range6 - 0.03 * decreasemult;
  }

  if (range2 < 0) {
    range2 = 0;
  }
  if (range3 < 0) {
    range3 = 0;
  }
  if (range4 < 0) {
    range4 = 0;
  }
  if (range5 < 0) {
    range5 = 0;
  }
  if (range6 < 0) {
    range6 = 0;
  }

  range1hit = false;
  range2hit = false;
  range3hit = false;
  range4hit = false;
  range5hit = false;
  range6hit = false;
}
