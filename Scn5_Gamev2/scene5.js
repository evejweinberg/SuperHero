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

    var stats = initStats();
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
    var x = 0;
    var y = 0;
    var z = 0;
    camera.lookAt(new THREE.Vector3(x, y, z));
    renderer.setClearColor(bgcolor, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    scene.fog = new THREE.Fog("rgb(255,0,0)", 50, 1000); //red fog
    // scene.fog=new THREE.FogExp2( 0xffffff, 0.01 );
    document.getElementById("container").appendChild(renderer.domElement);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(100, 400, 10);
    var planeMaterial = new THREE.MeshLambertMaterial({
      color: "rgb(255,0,0)"
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -99;
    plane.position.x = 0;
    plane.position.y = -10;
    plane.position.z = 29700;
    scene.add(plane);




    var geometry = new THREE.BoxGeometry(4, 10, 4);
    var geometryB = new THREE.BoxGeometry(4, 20, 4);
    var materialBlue = new THREE.MeshLambertMaterial({
      color: 0x7777ff //blue
    });
    var materialB = new THREE.MeshLambertMaterial({
      color: 0xb0af00 //mustard
    });
    // var cubeMaterialExample = new THREE.MeshLambertMaterial({color: 0xff0000});

    for (var j = 0; j < (70); j++) {
      for (var i = 0; i < 5; i++) {
        var depthMat = new THREE.MeshDepthMaterial();
        var planerepeated = new THREE.PlaneGeometry(16, 12, 3);
        var planeMaterial = new THREE.MeshLambertMaterial({
          color: "rgb(0,255,0)"
        });
        var planeRep = new THREE.Mesh(planerepeated, planeMaterial);
        planeRep.receiveShadow = true;
        var cubeGeometryB = new THREE.BoxGeometry(random(.5, 1.4), random(2, 9), 1);
        var rnd = Math.random() * 0.75 + 0.25;
        var cubeMaterial = new THREE.MeshLambertMaterial();
        var cubeMaterialExample = new THREE.MeshLambertMaterial({
          color: 0xff0000
        }); //red
        cubeMaterial.color = new THREE.Color(rnd, rnd, rnd);
        //these two lines to try blending:
        var colorMaterial = new THREE.MeshBasicMaterial({
          color: 0x00ff00,
          transparent: true,
          blending: THREE.MultiplyBlending
        })
        var cubey = new THREE.SceneUtils.createMultiMaterialObject(cubeGeometryB, [colorMaterial, depthMat]);
        //or this one simpler:
        // var cubey = new THREE.Mesh(cubeGeometryB, materialBlue);
        cubey.castShadow = true;
        cubey.position.z = 30000 - (j * 10);
        planeRep.position.z = 30000 - (j * 16);
        planeRep.position.x = 4 - (i * 16);
        planeRep.position.y = -4;
        planeRep.rotation.x = 30;
        cubey.position.x = 9 - (i * 5);
        cubey.position.y = -3;
        scene.add(planeRep);
        scene.add(cubey);
      }
    }

    function createMesh(geom) {
      // assign two materials
      var meshMaterial = new THREE.MeshNormalMaterial();
      meshMaterial.side = THREE.DoubleSide;
      var wireFrameMat = new THREE.MeshBasicMaterial();
      wireFrameMat.wireframe = true;
      // create a multimaterial
      var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);
      return mesh;
    }


    var matArray = [];
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0x009e60
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0x009e60
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0x0051ba
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0x0051ba
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0xffd500
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0xffd500
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0xff5800
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0xff5800
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0xC41E3A
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0xC41E3A
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0xffffff
    }));
    matArray.push(new THREE.MeshBasicMaterial({
      color: 0xffffff
    }));
    for (var k = 0; k < 20; k++) {
      var randomZ = random(0, 2000);
      var randomX = random(-10, 10);
      var faceMaterial = new THREE.MeshFaceMaterial(matArray);
      var cubeColorfulGeom = new THREE.BoxGeometry(3, 3, 3);
      var cubeColorful = new THREE.Mesh(cubeColorfulGeom, faceMaterial);
      cubeColorful.position.z = 29700 + (18 * k);
      cubeColorful.position.x = (k * 10);
      cubeColorful.position.y = 10;
      scene.add(cubeColorful);
    }






    var sphereGeometry = new THREE.SphereGeometry(2, 30, 30); //arguments?
    var geometry = new THREE.BoxGeometry(6, 6, 6);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });

    camera.position.z = camZ;
    camera.position.y = camY;



    var pointColor = "#ffffff";
    var spotLight = new THREE.SpotLight(pointColor);
    spotLight.position.set(-40, 60, 29900);
    spotLight.castShadow = true;
    spotLight.target = cubey;
    scene.add(spotLight);
    var spotLight2 = new THREE.SpotLight(pointColor);
    spotLight2.position.set(-40, 60, 33000);
    spotLight2.castShadow = true;
    spotLight2.target = cubey;
    scene.add(spotLight2);
    var spotLight3 = new THREE.SpotLight(pointColor);
    spotLight3.position.set(0, 120, camZ);
    spotLight3.castShadow = true;
    // spotLight3.target = cubey;
    scene.add(spotLight3);

    var directionalLight = new THREE.DirectionalLight(pointColor);
    directionalLight.position.set(-40, 60, 27000);
    directionalLight.castShadow = true;
    directionalLight.shadowCameraNear = 2;
    directionalLight.shadowCameraFar = 400;
    directionalLight.shadowCameraLeft = -50;
    directionalLight.shadowCameraRight = 50;
    directionalLight.shadowCameraTop = 50;
    directionalLight.shadowCameraBottom = -50;

    directionalLight.distance = 0;
    directionalLight.intensity = 0.5;
    directionalLight.shadowMapHeight = 1024;
    directionalLight.shadowMapWidth = 1024;


    scene.add(directionalLight);

    requestAnimationFrame(animate);


    function initStats() {
      var stats = new Stats();
      stats.setMode(0); // 0: fps, 1: ms
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.getElementById("Stats-output").appendChild(stats.domElement);
      return stats;
    }

    function animate() { //looping function
      stats.update();
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
        // console.log('range1 = 4')
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
      
      for (var l = 0; l < 12; l++) {
    torus = createMesh(new THREE.TorusGeometry(37, 6, 10, 6, Math.PI * 2));
     torus2 = createMesh(new THREE.TorusGeometry(37, 6, 10, 6, Math.PI * 2));
    // TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
    torus.position.z = camZ-1000+(l*80);
    // torus2.position.z = 29900;
    torus.position.x = 0;
    torus.position.y = 0;
    scene.add(torus);
    // scene.add(torus2);
}

      moveforwardRate = range1 + range2 + range3;
      camZ = camZ - moveforwardRate;
      spotLight3.position.set(0, 120, camZ);
      if (camZ > 28000) {
        // camY=camY+.5;
        camY = map(camZ, 28000, 30000, 100, 0)
      }
      camera.position.z = camZ;
      camera.position.y = camY;

      cubeColorful.rotation.y = cubeColorful.rotation.y + .05;
      cubeColorful.rotation.x = cubeColorful.rotation.x + .05;



      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

  } ///////ON LOAD ENDS///////////






function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize, false);