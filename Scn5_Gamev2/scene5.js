var scene, camera, renderer;
var turbo = false;
var camZ = 30000;
var camY = 0;
var torusY = 40,
  torusMesh = [];
var cubeBs = [];
var allRainbows=[];
var Allclouds=[];
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
var t = 0;
var text1;
var text2;
var stars;
var numStars = 10;
var cloud;

function setup() {
  noCanvas();
  sliderTemp = createSlider(0, 1000, 500);
  sliderTemp.position(0, 0).class('class7');
}

function draw() {

}

function keyPressed() {
  console.log('key was pressed');
  // if (!turbo){
  for (var l = 0; l < 12; l++) {
    torus = createMesh(new THREE.TorusGeometry(37, 4, 10, 6, Math.PI * 2));
    torus.position.z = (camZ - 500) + (l * 30);
    torus.position.x = 0;
    torus.position.y = camY;
    scene.add(torus);
    torusMesh.push(torus);
  }

  // turbo = true;
  // }
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
} ////CREATE MESH OVER
$(document).ready(function() {

  materialPlatGreen = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture("assets/platgreen.png")
  });
  materialPlat = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture("assets/plat.png")
  });

  // sphere = new THREE.Mesh(new THREE.SphereGeometry(12, 12, 12), material);

  window.onload = function() {
      //------------------------------------------------//
      var stats = initStats();
      r = 100;
      g = 200;
      b = 250;
      bgcolor = "rgb(" + r + "," + g + "," + b + ")";
      // bgcolor = 0xffffff;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, .1, 1000);
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
      scene.fog = new THREE.Fog("rgb(100,0,100)", 50, 1000); // fog
      // scene.fog=new THREE.FogExp2( 0xffffff, 0.01 );
      document.getElementById("container").appendChild(renderer.domElement);

      //----------------TEXT begin----------------///
      var textDetails = new function() {
        this.asGeom = function() {
          // remove the old plane
          scene.remove(text1);
          scene.remove(text2);
          // create a new one

          var options = {
            size: 70,
            height: 40,
            // weight: "normal",
            // font: "helvetiker",
            // bevelThickness: 0,
            // bevelSize: 0,
            // bevelSegments: 0,
            // bevelEnabled: true,
            // curveSegments: 0,
            // steps: 1
          };
          text1 = createTextMesh(new THREE.TextGeometry("Keep", options));
          text1.position.z = 26500;
          text1.position.y = camY-100;
          text1.position.x = -3;

          scene.add(text1);
          text2 = createTextMesh(new THREE.TextGeometry("Going", options));
          text2.position.z = 26500;
          text2.position.y = camY-180;
          scene.add(text2);
        };

      };

      textDetails.asGeom();

      function createTextMesh(geom) {

        var meshMaterial = new THREE.MeshPhongMaterial({
          specular: 'rgb(0,255,0)',
          color: 'rgb(255,9,0)',
          shininess: 100,
          metal: true
        });
        var plane = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

        return plane;
      }
      //----------------TEXT OVER----------------///
      //------------RAINBOW BEGINS-----------------
      function helper(o, x, y, z, w, h, d, c) {
        var material = new THREE.MeshLambertMaterial({
          color: c
        });
        var geometry = new THREE.CubeGeometry(w, h, d, 1, 1, 1);
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = x + (w / 2);
        mesh.position.y = y - (h / 2);
        mesh.position.z = z + (d / 2);
        o.add(mesh);
      }
      rainbow = new THREE.Object3D();
      // rainbowL = new THREE.Object3D();
      for (var c = 0; c < 30 - 1; c++) {
        var yOffset = 8;
        if (c % 2 == 1) yOffset = 7;
        var xOffset = (-c * 8) - 16.5;
        helper(rainbow, xOffset, yOffset, 0, 8, 3, 1, 0xff0000);
        helper(rainbow, xOffset, yOffset - 3, 0, 8, 3, 1, 0xff9900);
        helper(rainbow, xOffset, yOffset - 6, 0, 8, 3, 1, 0xffff00);
        helper(rainbow, xOffset, yOffset - 9, 0, 8, 3, 1, 0x33ff00);
        helper(rainbow, xOffset, yOffset - 12, 0, 8, 3, 1, 0x0099ff);
        helper(rainbow, xOffset, yOffset - 15, 0, 8, 3, 1, 0x6633ff);
      }
      scene.add(rainbow);
      
      rainbow.position.z = 29000;
      rainbow.position.y = camY;
      rainbow.position.x = 40;
      rainbow.rotation.y = 30;
      allRainbows.push(rainbow);
      // scene.add(rainbow);
      // rainbow.position.x = -40;
      // allRainbows.push(rainbow);
    

      //--------------RAINBOW LINES END------------------------//
      //-------------STARS BEGIN--------------------//
      stars = new Array();
      for (var state = 0; state < 6; state++) {
        stars.push(new Array());
        for (var c = 0; c < numStars; c++) {
          var star = new THREE.Object3D();
          star.position.x = Math.random() * 200 - 100;
          star.position.y = Math.random() * 700;
          star.position.z = random(27500, 28500);
          buildStar(star, state);
          scene.add(star);
          stars[state].push(star);
        }
      }

      function buildStar(star, state) {
        switch (state) {
          case 0:
            helper(star, 0, 0, 0, 1, 1, 1, 0xffffff);
            break;
          case 1:
            helper(star, 1, 0, 0, 1, 1, 1, 0xffffff);
            helper(star, -1, 0, 0, 1, 1, 1, 0xffffff);
            helper(star, 0, 1, 0, 1, 1, 1, 0xffffff);
            helper(star, 0, -1, 0, 1, 1, 1, 0xffffff);
            break;
          case 2:
            helper(star, 1, 0, 0, 2, 1, 1, 0xffffff);
            helper(star, -2, 0, 0, 2, 1, 1, 0xffffff);
            helper(star, 0, 2, 0, 1, 2, 1, 0xffffff);
            helper(star, 0, -1, 0, 1, 2, 1, 0xffffff);
            break;
          case 3:
            helper(star, 0, 0, 0, 1, 1, 1, 0xffffff);
            helper(star, 2, 0, 0, 2, 1, 1, 0xffffff);
            helper(star, -3, 0, 0, 2, 1, 1, 0xffffff);
            helper(star, 0, 3, 0, 1, 2, 1, 0xffffff);
            helper(star, 0, -2, 0, 1, 2, 1, 0xffffff);
            break;
          case 4:
            helper(star, 0, 3, 0, 1, 1, 1, 0xffffff);
            helper(star, 2, 2, 0, 1, 1, 1, 0xffffff);
            helper(star, 3, 0, 0, 1, 1, 1, 0xffffff);
            helper(star, 2, -2, 0, 1, 1, 1, 0xffffff);
            helper(star, 0, -3, 0, 1, 1, 1, 0xffffff);
            helper(star, -2, -2, 0, 1, 1, 1, 0xffffff);
            helper(star, -3, 0, 0, 1, 1, 1, 0xffffff);
            helper(star, -2, 2, 0, 1, 1, 1, 0xffffff);
            break;
          case 5:
            helper(star, 2, 0, 0, 1, 1, 1, 0xffffff);
            helper(star, -2, 0, 0, 1, 1, 1, 0xffffff);
            helper(star, 0, 2, 0, 1, 1, 1, 0xffffff);
            helper(star, 0, -2, 0, 1, 1, 1, 0xffffff);
            break;
        }
      }

      //-------------STARS END--------------------//
      //----------particle system begins---------------//
      var controls = new function() {
        this.size = 4;
        this.transparent = true;
        this.opacity = 0.6;
        this.vertexColors = true;
        this.color = 0xffffff;
        this.sizeAttenuation = true;
        this.rotateSystem = true;

        this.redraw = function() {
          if (scene.getObjectByName("particles")) {
            scene.remove(scene.getObjectByName("particles"));
          }
          createParticles(controls.size, controls.transparent, controls.opacity, controls.vertexColors, controls.sizeAttenuation, controls.color);
        };
      };
      controls.redraw();

      function createParticles(size, transparent, opacity, vertexColors, sizeAttenuation, color) {


        var geom = new THREE.Geometry();
        var material = new THREE.PointCloudMaterial({
          size: size,
          transparent: transparent,
          opacity: opacity,
          vertexColors: vertexColors,

          sizeAttenuation: sizeAttenuation,
          color: color
        });


        var range = 1200;
        var rangeZ = 10200;
        var minY = 200;
        for (var i = 0; i < 16000; i++) {
          var particle = new THREE.Vector3(Math.random() * range - range / 2, Math.random() * range + minY, Math.random() * rangeZ + 18000);
          geom.vertices.push(particle);
          var color = new THREE.Color(0x000000);
          color.setHSL(color.getHSL().h, color.getHSL().s, Math.random() * color.getHSL().l);
          geom.colors.push(new THREE.Color(Math.random() * 0x00ffff));
          // geom.colors.push(color);

        }

        cloud = new THREE.PointCloud(geom, material);
        cloud.name = "particles";
        scene.add(cloud);
      }

      //----------partucle system ends---------------//




      var geometry = new THREE.BoxGeometry(4, 10, 4);
      var geometryB = new THREE.BoxGeometry(4, 20, 4);
      var materialBlue = new THREE.MeshLambertMaterial({
        color: 0x7777ff //blue
      });
      var materialB = new THREE.MeshLambertMaterial({
        color: 0xb0af00 //mustard
      });


      for (var j = 0; j < 70; j++) {
        for (var i = 0; i < 5; i++) {
          var depthMat = new THREE.MeshDepthMaterial();
          var planerepeated = new THREE.PlaneGeometry(90, 40);
          var planeMaterial = new THREE.MeshLambertMaterial({
            color: "rgb(0,255,0)"
          });
          var planeRep = new THREE.Mesh(planerepeated, materialPlatGreen);
          planeRep.receiveShadow = true;
          var cubeB = createMesh(new THREE.BoxGeometry(random(3, 20), random(3, 20), random(3, 20), 1, 1, 1));
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
          var cubey = new THREE.SceneUtils.createMultiMaterialObject(cubeGeometryB, [cubeMaterial, depthMat]);
          cubeB.castShadow = true;
          cubeB.position.set(90 - (40 * i), 1, 31000 - (j * 40));
          cubeB.rotation.x = 0;
          planeRep.position.z = 31000 - (j * 40);
          planeRep.position.x = 100 - (i * 90);
          planeRep.position.y = -4;
          planeRep.rotation.x = 30;
          scene.add(planeRep);
          scene.add(cubeB);
          cubeBs.push(cubeB.name);

        }
      }



      // function drawShape() {
      //   var svgString = document.querySelector("#cloudId").
      //   getAttribute("d");
      //   var shape = transformSVGPathExposed(svgString);
      //   return shape;
      // }
      // var options = {
      //   amount: 10,
      //   bevelThickness: 2,
      //   bevelSize: 1,
      //   bevelSegments: 3,
      //   bevelEnabled: true,
      //   curveSegments: 12,
      //   steps: 1
      // };
      // shape = createMesh(new THREE.ExtrudeGeometry(drawShape(),
      //   options));


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
      for (var k = 0; k < 70; k++) {
        var randomZ = random(-700, 1000);
        var randomX = random(-200, 100);
        var randomY = random(-10, 10);
        var faceMaterial = new THREE.MeshFaceMaterial(matArray);
        var cubeColorfulGeom = new THREE.BoxGeometry(5, 3, 3);
        var cubeColorful = new THREE.Mesh(cubeColorfulGeom, faceMaterial);
        cubeColorful.position.z = randomZ + 28900 + (18 * k);
        cubeColorful.position.x = randomX + (k * 10);
        cubeColorful.position.y = randomY + 60;
        scene.add(cubeColorful);
        Allclouds.push(cubeColorful);
      }






      var sphereGeometry = new THREE.SphereGeometry(2, 30, 30); //arguments?
      var geometry = new THREE.BoxGeometry(6, 6, 6);
      var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
      });






      camera.position.z = camZ;
      camera.position.y = camY;


      //---------------lights-------------------//
      var pointColor = "#ffffff";
      var spotLight = new THREE.SpotLight(pointColor);
      spotLight.position.set(-40, 60, 29900);
      spotLight.castShadow = true;
      spotLight.target = cubeB;
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

      var directionalLight = new THREE.DirectionalLight(pointColor); //default point to center
      directionalLight.position.set(-40, 400, 32000);
      directionalLight.castShadow = true;
      directionalLight.shadowCameraNear = 2;
      directionalLight.shadowCameraFar = 400;
      directionalLight.shadowCameraLeft = -50;
      directionalLight.shadowCameraRight = 50;
      directionalLight.shadowCameraTop = 50;
      directionalLight.shadowCameraBottom = -50;

      directionalLight.distance = 0;
      directionalLight.intensity = 0.7;
      directionalLight.shadowMapHeight = 1024;
      directionalLight.shadowMapWidth = 1024;


      scene.add(directionalLight);

      requestAnimationFrame(animate); //


      function initStats() {
        var stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.getElementById("Stats-output").appendChild(stats.domElement);
        return stats;
      }

      ////////////////////////////////////////////////////////////////////
      /////////////////animation ////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////
      function animate() { //looping function
        stats.update();
        range1 = 0;
        range2 = 0;
        range3 = 0;

        gmapped = round(map(camZ, 29000, 30000, 0, 255));
        rmapped = round(map(camZ, 27000, 30000, 0, 150));
        bmapped = round(map(camZ, 25000, 29000, 0, 250));
        if (rmapped < 0) {
          rmapped = 0;
        }
        if (gmapped < 0) {
          gmapped = 0;
        }

        renderer.setClearColor(bgcolor, 1);
        bgcolor = "rgb(" + rmapped + "," + gmapped + "," + bmapped + ")";
        console.log(bgcolor)

        if (sliderTemp.value() < (UserArmNum - 300) || sliderTemp.value() > (UserArmNum + 300)) {
          range1 = 8;
          // console.log('range1 = 4')
        } else if (sliderTemp.value() < (UserArmNum - 250) || sliderTemp.value() > (UserArmNum + 250)) {
          range1 = 3;
        } else if (sliderTemp.value() < (UserArmNum - 90) || sliderTemp.value() > (UserArmNum + 90)) {
          range1 = .5;
        }

        rainbow.position.y = camY;
        moveforwardRate = range1 + range2 + range3;
        camZ = camZ - moveforwardRate;
        spotLight3.position.set(0, 120, camZ);
        if (camZ > 28000) {
          // camY=camY+.5;
          camY = map(camZ, 28000, 30000, 500, 0)
        }
        camera.position.z = camZ;
        camera.position.y = camY;

        cubeColorful.rotation.y = cubeColorful.rotation.y + .05;
        cubeColorful.rotation.x = cubeColorful.rotation.x + .05;

        //------------stars--update----------------//
        // for(var c=0;c<numStars;c++){
        // 						var tempX=stars[5][c].position.x,
        // 							tempY=stars[5][c].position.y,
        // 							tempZ=stars[5][c].position.z;
        // 						for(var state=5;state>0;state--){
        // 							var star=stars[state][c];
        // 							var star2=stars[state-1][c];
        // 							star.position.x=star2.position.x-8;
        // 							star.position.y=star2.position.y;
        // 							star.position.z=star2.position.z;

        // 						// 	if(star.position.x<-100){
        // 								// star.position.x+=200;
        // 								// star.position.y = Math.random() * 200 - 100;
        // 								// star.position.z = Math.random() * 200 - 100;
        // 						// 	}
        // 						}
        // 						stars[0][c].position.x=tempX;
        // 						stars[0][c].position.y=tempY;
        // 						stars[0][c].position.z=tempZ;
        // 					}


        for (var i = 0; i < torusMesh.length; i++) {
          torusMesh[i].position.y = camY;
        }
         text1.position.y = camY-100;
          text2.position.y = camY-200;
        for (var j=0; j<Allclouds.length; j++){
          Allclouds[j].rotation.x= Allclouds[j].rotation.x+.2;
        }

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
});