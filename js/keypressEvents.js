// in addition to sensor detection
function keyPressed() {

  if (scene3 === true) { //flightschool
    if (keyCode == 'J') {
      // console.log('J');
    }
    if (keyCode === 65 || keyCode === 97) { //A KEY // 'speed == 100mph'
      $("#flap1").addClass('FlyAway2');
      $("#flap2").show();
      document.getElementById('targetSpeed').innerHTML = '500';
      $("#flap2").addClass('FlyIn3');


      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 3, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }


    } else if (keyCode === 67 || keyCode === 99 || keyCode === ENTER) { //C KEY


      for (var i = 0; i < totalParticles; i++) {

        arrayOfBalls.push(new flapWin1(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

        arrayOfBalls.push(new flapWin2(width / 1.6, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      }
      readyfortrans = true;


    }
  } else if (scene1 === true) {
    if (keyCode === ENTER) {
      $('#defaultCanvas0').show();
      $('#loadingvideo').hide();
      $('#loadingOver').show();
      loadingOvervid.play();
      $('video#loadingOver').bind('ended', function() {
        $('#loading').remove();
        changeScene(4);
      });

    }
  } else if (scene7 === true) {
    if (keyCode === ENTER) {
      changeScene(3); //flightschool
    }
  } else if (scene4 === true) {
    if (keyCode === ENTER) {
      // readyfortrans = true;
      changeScene(7);
    }
  } else if (scene5 === true) { //game
    if (keyCode === ENTER) {
      changeScene(6);
    }
  } else if (scene6 === true) {
    // if (keyCode === ENTER) {
    //   changeScene(2);
    // }
  } else if (scene7 === true) {
    if (keyCode === ENTER) {
      changeScene(3);
    }
  }


} ///KEYPRESS ENDS/////////////
