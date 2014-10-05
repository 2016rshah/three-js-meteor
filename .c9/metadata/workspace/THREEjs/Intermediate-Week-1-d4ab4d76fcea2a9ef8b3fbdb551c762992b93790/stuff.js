{"filter":false,"title":"stuff.js","tooltip":"/THREEjs/Intermediate-Week-1-d4ab4d76fcea2a9ef8b3fbdb551c762992b93790/stuff.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":17}},"text":"\t\t\tvar container;"},{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":76,"column":0}},"lines":["\t\t\tvar camera, scene, renderer, controls;","\t\t\tvar mouseX, mouseY;","\t\t\tvar windowHalfX = window.innerWidth / 2;","\t\t\tvar windowHalfY = window.innerHeight / 2;","\t\t\tvar particleMaterial; ","\t\t\tvar count;","\t\t\tvar ASPECT = window.innerWidth/window.innerHeight;","\t\t\tvar CAMZ = 100;","\t\t\t","\t\t\tinit();","\t\t\tanimate();","","\t\t\tfunction init(){","\t\t\t\tcontainer = document.createElement('div');","\t\t\t\tdocument.body.appendChild(container);","","\t\t\t\tcamera = new THREE.PerspectiveCamera( 45, ASPECT, 1, 1000 );","\t\t\t\tcamera.position.z = CAMZ;","\t\t\t\tscene = new THREE.Scene();","","\t\t\t\tcontrols = new THREE.TrackballControls(camera);","\t\t\t\tcount = 0;","\t\t\t\tvar PI2 = Math.PI * 2;","","\t\t\t\tparticleMaterial = new THREE.ParticleCanvasMaterial({","\t\t\t\t\tcolor: 0x66FF66,","\t\t\t\t\tprogram: function(context){","\t\t\t\t\t\tcontext.beginPath();","\t\t\t\t\t\tcontext.arc(0, 0, 1, 0, PI2, true);","\t\t\t\t\t\tcontext.fill();","\t\t\t\t\t}","\t\t\t\t});","\t\t\t\tparticles = [];","","\t\t\t\tfor(var i = -100; i<100; i++){","\t\t\t\t\tvar tempParticle = new THREE.Particle(particleMaterial.clone());","\t\t\t\t\ttempParticle.position.x = Math.random()*200-100;","\t\t\t\t\ttempParticle.position.y = Math.random()*200-100;","\t\t\t\t\ttempParticle.position.z = Math.random()*(200)-CAMZ;","\t\t\t\t\tscene.add(tempParticle);","\t\t\t\t\tparticles.push(tempParticle);","\t\t\t\t}","","\t\t\t\trenderer = new THREE.CanvasRenderer();","\t\t\t\trenderer.setSize(window.innerWidth, window.innerHeight);","","\t\t\t\tcontainer.appendChild(renderer.domElement);","\t\t\t\tdocument.addEventListener('mousemove', onDocumentMouseMove, false);","\t\t\t\twindow.addEventListener('resize', onWindowResize, false);","\t\t\t}","","\t\t\tfunction animate(){","\t\t\t\trequestAnimationFrame(animate);","\t\t\t\trender();","\t\t\t}","","\t\t\tfunction render(){","\t\t\t\tfor(var index in particles){","\t\t\t\t\tparticles[index].material.color = new THREE.Color().setHSL((count/100)%1, 0.5, 0.5);","\t\t\t\t\tparticles[index].position.z+=1;","\t\t\t\t\tif(particles[index].position.z>CAMZ){","\t\t\t\t\t\tparticles[index].position.z = 0;","\t\t\t\t\t}","\t\t\t\t}","","\t\t\t\t// renderer.setClearColor(","\t\t\t\t// \tparticles[0].material.color.clone().offsetHSL(0.5, 0, 0)","\t\t\t\t// );"," ","\t\t\t\tcamera.lookAt(scene.position);","\t\t\t\t","\t\t\t\tcontrols.update();","\t\t\t\trenderer.render(scene, camera);","      \t\t\tcount++;","\t\t\t}"]}]}]]},"ace":{"folds":[],"scrolltop":1121.900029182434,"scrollleft":0,"selection":{"start":{"row":8,"column":18},"end":{"row":8,"column":18},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":62,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1412449850572,"hash":"a00dd24ef775a835057dc3b9cb325870035e6d89"}