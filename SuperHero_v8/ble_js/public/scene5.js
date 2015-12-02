function createMesh(geom) {
  // assign two materials
  var meshMaterial = new THREE.MeshNormalMaterial();
  meshMaterial.side = THREE.DoubleSide;
  var wireFrameMat = new THREE.MeshBasicMaterial();
  wireFrameMat.wireframe = true;
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



  window.onload = function() {
      //------------------------------------------------//
      var knot;
      var Allknots = [];
      var stats = initStats();
      r = 100;
      g = 200;
      b = 250;
      bgcolor = "rgb(" + r + "," + g + "," + b + ")";
      // bgcolor = 0xffffff;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, .1, 1000);
      // renderer = new THREE.WebGLRenderer({
      //   alpha: true
      // }); //have an alpha channel
      var x = 0;
      var y = 0;
      var z = 0;
      var webGLRenderer = new THREE.WebGLRenderer();
      webGLRenderer.setClearColor(new THREE.Color(0x000000, 1.0));
      webGLRenderer.setSize(window.innerWidth, window.innerHeight);
      scene.fog = new THREE.Fog("rgb(100,0,100)", 50, 1000); // fog
      document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);


      //----------------TEXT begin----------------///
      var textDetails = new function() {
        this.asGeom = function() {
          // remove the old plane
          scene.remove(text1a);
          scene.remove(text1b);
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
          text1a = createTextMesh(new THREE.TextGeometry("Keep", options));
          text1a.position.z = 26500;
          text1a.position.y = camY - 100;
          text1a.position.x = -150;

          scene.add(text1a);
          text1b = createTextMesh(new THREE.TextGeometry("Going", options));
          text1b.position.z = 26500;
          text1b.position.y = camY - 180;
          text1b.position.x = -150;
          scene.add(text1b);


          text2a = createTextMesh(new THREE.TextGeometry("Don't Stop Believing", options));
          text2a.position.z = 21500;
          text2a.position.x = -400;
          text2a.position.y = camY - 180;
          scene.add(text2a);


          text3a = createTextMesh(new THREE.TextGeometry("Only You", options));
          text3a.position.z = 17500;
          text3a.position.x = -200;
          text3a.position.y = camY - 180;
          scene.add(text3a);
          text3b = createTextMesh(new THREE.TextGeometry("Can Save The World", options));
          text3b.position.z = 17000;
          text3b.position.x = -500;
          text3b.position.y = camY - 180;
          scene.add(text3b);
        };

      };

      textDetails.asGeom();

      function createTextMesh(geom) {

        var meshMaterial = new THREE.MeshPhongMaterial({
          specular: 'rgb(0,255,0)',
          color: 'rgb(255,9,0)',
          // color: Math.random() * 0x00ffff;
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
      rainbowR = new THREE.Object3D();
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
        helper(rainbowR, xOffset, yOffset, 0, 8, 3, 1, 0xff0000);
        helper(rainbowR, xOffset, yOffset - 3, 0, 8, 3, 1, 0xff9900);
        helper(rainbowR, xOffset, yOffset - 6, 0, 8, 3, 1, 0xffff00);
        helper(rainbowR, xOffset, yOffset - 9, 0, 8, 3, 1, 0x33ff00);
        helper(rainbowR, xOffset, yOffset - 12, 0, 8, 3, 1, 0x0099ff);
        helper(rainbowR, xOffset, yOffset - 15, 0, 8, 3, 1, 0x6633ff);
      }
      // scene.add(rainbow);
      // scene.add(rainbowR);

      rainbow.position.z = 28500;
      rainbow.position.y = camY;
      rainbow.position.x = 30;
      rainbow.rotation.y = PI*.6;
       rainbowR.position.z = 28700;
      rainbowR.position.y = camY;
      rainbowR.position.x = -100;
      rainbowR.rotation.y = -PI*.6;
      RainbowGroup = new THREE.Group();
				RainbowGroup.position.z = 500;
				scene.add( RainbowGroup );
				RainbowGroup.add( rainbow );
				RainbowGroup.add( rainbowR );
   


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
        var rangeZ = 24200;
        var minY = 200;
        for (var i = 0; i < 39000; i++) {
          var particle = new THREE.Vector3(Math.random() * range - range / 2, Math.random() * range + minY, Math.random() * rangeZ + 3000);
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
      //sea of PacMan Monsters Begins-------------------//
      var getPacManTexture = function() {
        var canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;

        var ctx = canvas.getContext('2d');
        // the body
        ctx.translate(-81, -84);

        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();

        // the eyes
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();

        // the pupils
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();


        var PacMantexture = new THREE.Texture(canvas);
        PacMantexture.needsUpdate = true;
        return PacMantexture;
      };



      var PacMancontrols = new function() {
        this.size = 15;
        this.transparent = true;
        this.opacity = 0.6;
        this.color = 0xffffff;
        this.rotateSystem = true;
        this.sizeAttenuation = true;

        this.redraw = function() {
          if (scene.getObjectByName("pointcloudMosters")) {
            scene.remove(scene.getObjectByName("pointcloudMosters"));
          }
          createMonsterCloud(PacMancontrols.size, PacMancontrols.transparent, PacMancontrols.opacity, PacMancontrols.sizeAttenuation, PacMancontrols.color);
        };
      };



      PacMancontrols.redraw();

      function createMonsterCloud(size, transparent, opacity, sizeAttenuation, color) {

        var geomPacMan = new THREE.Geometry();


        var materialPacMan = new THREE.PointCloudMaterial({
          size: size,
          transparent: transparent,
          opacity: opacity,
          map: getPacManTexture(),
          sizeAttenuation: sizeAttenuation,
          color: color
        });


        var PacManrange = 500;
        var PacManRangeZ = 2000;
        var PacManRangeY = 1000;
        for (var i = 0; i < 5000; i++) {
          var particle = new THREE.Vector3(Math.random() * PacManrange - PacManrange / 2, Math.random() * PacManRangeY + 400, Math.random() * PacManRangeZ + 24000);
          geomPacMan.vertices.push(particle);
        }

        seaofMonsters = new THREE.PointCloud(geomPacMan, materialPacMan);
        seaofMonsters.name = 'pointcloudMosters';
        seaofMonsters.sortParticles = true;
        scene.add(seaofMonsters);
      }


      var step = 0;

      //-------------------sea of PacMan Monsters Ends-------------------//
      ///////------------KNOT STARTS--------------------/////////


      // setup the control gui
      var Knotcontrols = new function() {
        // we need the first child, since it's a multimaterial
        this.radius = 63;
        this.tube = 1.7;
        this.radialSegments = 156;
        this.tubularSegments = 12;
        this.p = 5;
        this.q = 4;
        this.heightScale = 3.5;
        this.asParticles = false;

        this.redraw = function() {
          // remove the old plane
          if (knot) scene.remove(knot);
          // create a new one
          var geom = new THREE.TorusKnotGeometry(Knotcontrols.radius, Knotcontrols.tube, Math.round(Knotcontrols.radialSegments), Math.round(Knotcontrols.tubularSegments), Math.round(Knotcontrols.p), Math.round(Knotcontrols.q), Knotcontrols.heightScale);


          knot = createKnotMesh(geom);
          knot2 = createKnotMesh(geom);
          knot3 = createKnotMesh(geom);


          // add it to the scene.
          scene.add(knot);
          knot.position.set(0, 50, 22800);
          scene.add(knot2);
          knot2.position.set(0, 80, 22800);
          scene.add(knot3);
          knot3.position.set(0, 80, 22800);
          // for (var kn = 0; kn < 12; kn++) {
          //   scene.add(knot);
          //   Allknots.push(knot);
          //   Allknots.position.y = kn * 20;
          // }
        };

      };

      Knotcontrols.redraw();


      // from THREE.js examples
      function generateKnotSprite() {

        var canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;

        var context = canvas.getContext('2d');
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
        gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
        gradient.addColorStop(1, 'rgba(0,0,0,1)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;

      }

      function createKnotPointCloud(geom) {
        var material = new THREE.PointCloudMaterial({
          color: 0xffffff,
          size: 3,
          transparent: true,
          blending: THREE.AdditiveBlending,
          map: generateKnotSprite()
        });

        var cloud = new THREE.PointCloud(geom, material);
        cloud.sortParticles = true;
        return cloud;
      }

      function createKnotMesh(geom) {

        // assign two materials
        var meshMaterial = new THREE.MeshNormalMaterial({});
        meshMaterial.side = THREE.DoubleSide;

        // create a multimaterial
        var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

        return mesh;
      }
      /////////////////---------KNOT ENDS------------//////

      for (var j = 0; j < 70; j++) {
        for (var i = 0; i < 5; i++) {
          var depthMat = new THREE.MeshDepthMaterial();
          var planerepeated = new THREE.PlaneGeometry(280, 40);
          var planeMaterial = new THREE.MeshLambertMaterial({
            color: "rgb(0,255,0)"
          });
          var planeRep = new THREE.Mesh(planerepeated, materialPlatGreen);
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
            // var cubey = new THREE.SceneUtils.createMultiMaterialObject(cubeGeometryB, [cubeMaterial, depthMat]);

          planeRep.position.z = 31000 - (j * 40);
          planeRep.position.x = 600 - (i * 280);
          planeRep.position.y = -4;
          planeRep.rotation.x = 30;
          scene.add(planeRep);
          var cubeB = createMesh(new THREE.BoxGeometry(random(3, 20), random(3, 100), random(3, 20), 1, 1, 1));
          cubeB.castShadow = true;
          cubeB.position.set(200 - (40 * i), 1, 31000 - (j * 40));
          cubeB.rotation.x = 0;
          scene.add(cubeB);
          cubeBs.push(cubeB.name);
          var cubeA = createMesh(new THREE.BoxGeometry(random(3, 20), random(3, 100), random(3, 20), 1, 1, 1));
          cubeA.castShadow = true;
          cubeA.position.set(-50 - (40 * i), 1, 31000 - (j * 40));
          cubeA.rotation.x = 0;
          scene.add(cubeA);
          // cubeBs.push(cubeA.name);

        }
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
      for (var k = 0; k < 140; k++) {
        var randomZ = random(-700, 1000);
        var randomX = random(-400, 100);
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
      // spotLight2.target = cubey;
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
        if (scene5 == true) {
          if (Scn5_frmct > 180 && Scn5_frmct < 350) {

            camZ = camZ - (CamSpeed * .3);
          } else if (Scn5_frmct >= 350){
            camZ = camZ - (CamSpeed * .8);
          }
        }
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
        if (bmapped < 0) {
          bmapped = 0;
        }

        webGLRenderer.setClearColor(bgcolor, 1);
        bgcolor = "rgb(" + rmapped + "," + gmapped + "," + bmapped + ")";
      

        rainbow.position.y = camY;
        rainbowR.position.y = camY;

        knot.rotation.y = step += 0.01;
        knot.position.y = camY;
        knot2.position.y = camY - 200;
        knot3.position.y = camY + 200;
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
        text1a.position.y = camY - 100;
        text1b.position.y = camY - 200;
        text2a.position.y = camY - 180;
        text3a.position.y = camY - 180;
        text3b.position.y = camY - 50;
        // for (var j = 0; j < Allclouds.length; j++) {
        //   Allclouds[j].rotation.x = Allclouds[j].rotation.x + .2;
        // }

        webGLRenderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

    } ///////ON LOAD ENDS///////////






  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // webGLRenderer.setClearColor(new THREE.Color(0x000000, 1.0));
    // webGLRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onResize, false);
});