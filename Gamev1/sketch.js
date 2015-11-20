var scene, Gamecamera, renderer;
var moveforward = 0;
var sun, earth, building1;
var cubeB = [];

window.onload = function() {

  scene = new THREE.Scene(); //new scene
  var aspectRatio = window.innerWidth / window.innerHeight; //fill screen
  Gamecamera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000); //persecptive
  renderer = new THREE.WebGLRenderer(); //need this
  renderer.setSize(window.innerWidth, window.innerHeight); //set fill screen
  // Attach it to the body HTML element
  document.getElementById("container").appendChild(renderer.domElement); //put whole thing in this div



  var sphereGeometry = new THREE.SphereGeometry(5, 30, 30);


  // Create a mesh for the sun object. We're using a basic material, because
  // the sun doesn't need shading.
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });

  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  // for (var i = 0; i < 20; i++) {
  //   cubeB[i] = new THREE.Mesh(geometry, material);
  //   scene.add(cube[i]);
  // }

  sun = new THREE.Object3D();
  var sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xCCCCCC
  });
  var sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial); //a mesh gest geometry and material?
  sun.add(sunMesh);


  camera.position.z = moveforward;


 
  var sunlight = new THREE.PointLight(0xff0040, 2, 50);//can the light track with the camera?
  var light2 = new THREE.PointLight(0x0040ff, 2, 50);
  scene.add(sunlight);
  scene.add(light2);



  earth = new THREE.Object3D();
  building1 = new THREE.Object3D();
  cube.position.z = -10;

  cube.position.x = 10;
  cube2.position.z = 200;
  cube2.position.x = -10;
  // Offset the earth's position so that it rotates at a distance.
  earth.position.x = -15;


  // Create a mesh for the earth
  var earthMaterial = new THREE.MeshPhongMaterial({
    color: 0x99CCFF
  });
  var earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial); //mesh gets geometry and material
  earthMesh.scale.set(0.4, 0.4, 0.4);
  earth.add(earthMesh);


  // Now, create a moon that rotates around the earth.
  var moonMaterial = new THREE.MeshLambertMaterial({
    color: 0xCCCCCC
  });
  var moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
  // Scale it down and offset its position.
  moonMesh.scale.set(0.1, 0.1, 0.1);
  moonMesh.position.x = -3;

  // Add the moon object to our earth container, add our earth container to the
  // sun container, and add that to the scene. This sets up our object hierarchy.
  earth.add(moonMesh);
  sun.add(earth);
  scene.add(sun);


  // Now, set up a loop function for animation
  requestAnimationFrame(animate);
}

// Now, set up a looping function
function animate() {
  // Update the rotation of our sun and earth
  sun.rotation.y += 0.01;
  earth.rotation.y += 0.01;
  moveforward = moveforward - 10;
  camera.position.z = moveforward;

  // Finish with a new render call
  renderer.render(scene, camera);

  // Tell our function to loop again on the next frame
  requestAnimationFrame(animate);
}