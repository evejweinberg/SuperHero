var scene, camera, renderer;
var camZ = 30000;
var camY = 0;
var moveforwardRate = 0; //if 16...it will go 28,800 px is 30 sec
var sun, earth, building;
var bgcolor;
var gmapped = 0;
var rmapped = 0;
var bmapped = 0;
var light2;
var r;
var g;
var b;
var sliderTemp;
var UserArmNum = 500;
var range1 = 0;
var range2 = 0;
var range3 = 0;

function setup() {
  noCanvas();
  sliderTemp = createSlider(0, 1000, 500);
  sliderTemp.position(0, 0).class('class7');
}



window.onload = function() {
    // var stats = initStats();
    r = 100;
    g = 200;
    b = 250;
    bgcolor = "rgb(" + r + "," + g + "," + b + ")";
    // bgcolor = 0xffffff;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, .1, 500);
    renderer = new THREE.WebGLRenderer({
      alpha: true
    }); //have an alpha channel
    var x=0;
    var y=0;
    var z=0;
    camera.lookAt(new THREE.Vector3(x,y,z));
    renderer.setClearColor(bgcolor, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    scene.fog = new THREE.Fog("rgb(255,0,0)", 50, 1000); //red fog
    // scene.fog=new THREE.FogExp2( 0xffffff, 0.01 );
    document.getElementById("container").appendChild(renderer.domElement);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(100, 400);
    var planeMaterial = new THREE.MeshLambertMaterial({
      color: "rgb(255,0,0)"
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    // rotate and position the plane
    // plane.rotation.y = 50;
    plane.rotation.x = -99;
    plane.position.x = 0;
    plane.position.y = -10;
    plane.position.z = 29700;
    scene.add(plane);


    var geometry = new THREE.BoxGeometry(4, 10, 4);
    var geometryB = new THREE.BoxGeometry(4, 20, 4);
    var materialBlue = new THREE.MeshLambertMaterial({
      color: 0x7777ff//blue
    });
    var materialB = new THREE.MeshLambertMaterial({
      color: 0xb0af00 //mustard
    });
    // var cubeMaterialExample = new THREE.MeshLambertMaterial({color: 0xff0000});
  
for (var j = 0; j < (70); j++) {
      for (var i = 0; i < 5; i++) {
        var cubeGeometryB = new THREE.BoxGeometry(random(.5, 1.4), random(2, 9), 1);
        var rnd = Math.random() * 0.75 + 0.25;
        var cubeMaterial = new THREE.MeshLambertMaterial();
        var cubeMaterialExample = new THREE.MeshLambertMaterial({color: 0xff0000});//red
        cubeMaterial.color = new THREE.Color(rnd, rnd, rnd);
        var cubey = new THREE.Mesh(cubeGeometryB, materialBlue);
         cubey.castShadow = true;

        cubey.position.z = 30000 - (j * 10);
        cubey.position.x = 9 - (i * 5);
        cubey.position.y = -3;

        scene.add(cubey);
      }
    }





    var sphereGeometry = new THREE.SphereGeometry(2, 30, 30); //arguments?

    // basic lava ball
    // 	var lavaTexture = THREE.TextureLoader('assets/plat.png');
    var lavaMaterial = new THREE.MeshBasicMaterial();
    var lavaBall = new THREE.Mesh(sphereGeometry, lavaMaterial);
    lavaBall.position.set(0, 12, 29500);
    scene.add(lavaBall);

    // Now, create an empty object for the sun
    sun = new THREE.Object3D();

    // Create a mesh for the sun object. We're using a basic material, because
    // the sun doesn't need shading.
    var geometry = new THREE.BoxGeometry(6, 6, 6);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    var sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xCCCCCC
    });
    var sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    var cube = new THREE.Mesh(geometry, material);

    // Add it to our sun object
    sun.add(sunMesh);
    camera.position.z = camZ;
    camera.position.y = camY;
    scene.overrideMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff
    });



    // Add a point light to the center of the world, for the sunlight
    // var sunlight = new THREE.PointLight(0xffffff, 2, 50);
    light2 = new THREE.PointLight(0xffffff, 40, 80);
    var pointLight = new THREE.PointLight(0xff0000, 1000, 100);
    var light3 = new THREE.PointLight(0xffffff);
    light3.position.set(0, 150, 12000);
    scene.add(light3);
    var light4 = new THREE.PointLight(0xffffff);
    light4.position.set(0, 150, 14000);
    scene.add(light4);
    var ambientLight1 = new THREE.AmbientLight(0xffffff);
     var ambiColor = "#0c0c0c";
        var ambientLight = new THREE.AmbientLight(ambiColor);
        scene.add(ambientLight);
        
         // add spotlight for the shadows
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(100, 10, 39000);
        spotLight.castShadow = true;
        scene.add(spotLight);



    // Add it to our scene
    // scene.add(sunlight);
    // scene.add(light2);
    camera.add(pointLight);
    // scene.add(ambientLight1);






    // Create an empty object for the earth. This will rotate around the sun.
    earth = new THREE.Object3D();
    // Offset the earth's position so that it rotates at a distance.
    earth.position.x = -15;

    // Create a mesh for the earth
    // var earthTexture = THREE.ImageUtils.loadTexture("demo/tex/noise.png");
    var earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x99CCFF
    });
    var earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    // This should be smaller than the sun, so scale it down uniformly.
    earthMesh.scale.set(1, 1, 1);
    earth.add(earthMesh);


    // Now, create a moon that rotates around the earth.
    var moonMaterial = new THREE.MeshLambertMaterial({
      color: 0xCCCCCC
    });
    var moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    // Scale it down and offset its position.
    moonMesh.scale.set(3, 3, 3);
    moonMesh.position.x = -3;
    moonMesh.position.z = 29030;

    // Now, create a moon that rotates around the earth.
    var moonMaterial2 = new THREE.MeshLambertMaterial({
      color: 0xCCCCCC
    });
    var moonMesh2 = new THREE.Mesh(sphereGeometry, moonMaterial2);
    // Scale it down and offset its position.
    moonMesh2.scale.set(3, 3, 3);
    moonMesh2.position.x = 3;
    moonMesh2.position.z = 28000;

    // Add the moon object to our earth container, add our earth container to the
    // sun container, and add that to the scene. This sets up our object hierarchy.
    earth.add(moonMesh);
    sun.add(earth);
    scene.add(sun);

    //try LOADING
    // var loader = new THREE.JSONLoader(); // init the loader util

    // // init loading
    // loader.load('earth.js', function(geometry) {
    //   // create a new material
    //   var material = new THREE.MeshLambertMaterial({
    //     map: THREE.ImageUtils.loadTexture('assets/plat.png'), // specify and load the texture
    //     colorAmbient: [0.480000026226044, 0.480000026226044, 0.480000026226044],
    //     colorDiffuse: [0.480000026226044, 0.480000026226044, 0.480000026226044],
    //     colorSpecular: [0.8999999761581421, 0.8999999761581421, 0.8999999761581421]
    //   });

    //   // create a mesh with models geometry and material
    //   var meshX = new THREE.Mesh(
    //     geometry,
    //     material
    //   );
    //   meshX.position.z = 27030;
    //   meshX.position.x = 2;
    //   meshX.rotation.y = -Math.PI / 5;
    //   scene.add(meshX);
    // }); //END TRY LOADING


    // Now, set up a loop function for animation
    requestAnimationFrame(animate);
    // var gui = new dat.GUI();
    // gui.add(controls, 'rotationSpeed', 0, 0.5);
    // gui.add(controls, 'addCube');

    // function initStats() {

    //   var stats = new Stats();

    //   stats.setMode(0); // 0: fps, 1: ms

    //   // Align top-left
    //   stats.domElement.style.position = 'absolute';
    //   stats.domElement.style.left = '0px';
    //   stats.domElement.style.top = '0px';

    //   document.getElementById("Stats-output").appendChild(stats.domElement);

    //   return stats;
    // }

  } ///////ON LOAD ENDS///////////




function animate() { //looping function
  // stats.update();
  range1 = 0;
  range2 = 0;
  range3 = 0;

  gmapped = round(map(camZ, 29000, 30000, 0, 255));
  rmapped = round(map(camZ, 29000, 30000, 10, 150));
  bmapped = round(map(camZ, 29000, 30000, 30, 150));
  //why does this go negative?


  renderer.setClearColor(bgcolor, 1);
  bgcolor = "rgb(" + rmapped + "," + gmapped + "," + b + ")";


  if (sliderTemp.value() < (UserArmNum - 400) || sliderTemp.value() > (UserArmNum + 400)) {
    range1 = 4;
    console.log('range1 = 4')
  }
  if (sliderTemp.value() < (UserArmNum - 250) || sliderTemp.value() > (UserArmNum + 250)) {
    range1 = 2;
  }
  if (sliderTemp.value() < (UserArmNum - 90) || sliderTemp.value() > (UserArmNum + 90)) {
    range1 = .5;
  } else {
    range1 = 0;
    range2 = 0;
    range3 = 0;
  }

  moveforwardRate = range1 + range2 + range3;
  camZ = camZ - moveforwardRate;
  // console.log('MoveCamrate  ' + moveforwardRate)
  // console.log('slider  ' + sliderTemp.value())
  if (camZ > 28000) {
    // camY=camY+.5;
    camY = map(camZ, 28000, 30000, 100, 0)
  }
  console.log('camY:   ' + camY)
  console.log('camZ:   ' + camZ)


  camera.position.z = camZ;
  camera.position.y = camY;
  // light2.position.z = camZ;


  // Finish with a new render call
  renderer.render(scene, camera);
  // Tell our function to loop again on the next frame
  requestAnimationFrame(animate);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize, false);