// Your 3d scene will always need one of each of these
var scene, camera, renderer;
var camZ = 30000;
var moveforwardRate = 10; //if 16...it will go 28,800 px is 30 sec
var sun, earth, building;
var bgcolor;


window.onload = function() {
    Clock.start();
    bgcolor = 0x1B33E5;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer({
      alpha: true
    }); //have an alpha channel
    renderer.setClearColor(bgcolor, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("container").appendChild(renderer.domElement);


    var geometry = new THREE.BoxGeometry(4, 10, 4);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = 6;
    cube.position.z = 29000;
    scene.add(cube);

    var cuber = new THREE.Mesh(geometry, material);
    cuber.position.x = 5;
    cuber.position.z = 28500;
    scene.add(cuber);

    var cubea = new THREE.Mesh(geometry, material);
    cubea.position.x = 1;
    cubea.position.z = 30000;
    scene.add(cubea);

    var cubeb = new THREE.Mesh(geometry, material);
    cubeb.position.x = 1;
    cubeb.position.z = 29500;
    scene.add(cubeb);

    var cubec = new THREE.Mesh(geometry, material);
    cubec.position.x = 3;
    cubec.position.z = 26500;
    scene.add(cubec);

    var cubed = new THREE.Mesh(geometry, material);
    cubed.position.x = -3;
    cubed.position.z = 25500;
    scene.add(cubed);

    var cubee = new THREE.Mesh(geometry, material);
    cubee.position.x = 3;
    cubee.position.z = 24500;
    scene.add(cubee);

    var cubef = new THREE.Mesh(geometry, material);
    cubef.position.x = -3;
    cubef.position.z = 23500;
    scene.add(cubef);

    var cubeg = new THREE.Mesh(geometry, material);
    cubeg.position.x = -3;
    cubeg.position.z = 23500;
    scene.add(cubeg);


    var sphereGeometry = new THREE.SphereGeometry(2, 30, 30); //arguments?

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
    // camera.position.y = 0;



    // Add a point light to the center of the world, for the sunlight
    var sunlight = new THREE.PointLight(0xff0040, 2, 50);
    var light2 = new THREE.PointLight(0x0040ff, 2, 50);
    var pointLight = new THREE.PointLight(0x0040ff, 2, 50);

    // Add it to our scene
    scene.add(sunlight);
    scene.add(light2);
    camera.add(pointLight);

    // Using wireframe materials to illustrate shape details.
    var darkMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffcc
    });
    var wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true
    });
    var multiMaterial = [darkMaterial, wireframeMaterial];

    // octahedron
    var shape = THREE.SceneUtils.createMultiMaterialObject(
      new THREE.OctahedronGeometry(40, 0),
      multiMaterial);
    shape.position.set(0, 50, 100);
    scene.add(shape);

    // cube
    var shape = THREE.SceneUtils.createMultiMaterialObject(
      new THREE.CubeGeometry(50, 50, 50, 1, 1, 1),
      multiMaterial);
    shape.position.set(-200, 50, 100);
    scene.add(shape);



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


    // Now, set up a loop function for animation
    requestAnimationFrame(animate);

  } ///////ON LOAD ENDS///////////


function animate() { //looping function
  // Update the rotation of our sun and earth
  // sun.rotation.y += 0.01;
  // earth.rotation.y += 0.01;
  camZ = camZ - moveforwardRate;
  if (camZ < 28000) {
    bgcolor = 0x1B33E5;
  }

  // if (camZ >28000){
  //   bgcolor = 0x0A145B;
  // }
  console.log(camZ);
  camera.position.z = camZ;
  // if (camZ > 29000){
  //   camera.position.y = camera.position.y + .2;
  // }

  // Finish with a new render call
  renderer.render(scene, camera);
  // Tell our function to loop again on the next frame
  requestAnimationFrame(animate);
}