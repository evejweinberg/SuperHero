// var gameSong1, gameSong2, gameSong3,gameSong4,gameSong5;
//var gameSong = {gameSong1, gameSong2, gameSong3,gameSong4,gameSong5 }

var gameSongs = [];
function preload() {
  gameSongs[0] = loadSound('audio/game01.mp3');
  gameSongs[1] = loadSound('audio/fuge1.m4a');
  gameSongs[2] = loadSound('audio/fuge2.m4a');
  gameSongs[3] = loadSound('audio/letItHappen.m4a');
  gameSongs[4] = loadSound('audio/DosesAndMimosas.wav');
  
}

function setup() {
  
}

function mousePressed() {
  var songPicker = floor(random(gameSongs.length));//round(random(1,5));
  console.log(songPicker)
  //if (frameCount % 60 == 0){
  gameSongs[songPicker].play();
  //}
}




