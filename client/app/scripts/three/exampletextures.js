'use strict';

var container, stats;

var camera, controls, scene, renderer, particleSystem, smoke, smokeParticles, loadedObject;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var clock = new THREE.Clock;


// init();
// animate();


function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
	camera.position.z = 500;

	// set camera behavior and controls
	controls = new THREE.TrackballControls( camera );
    controls.rotateSpeed = 5.0;
	controls.zoomSpeed = 5;
	controls.panSpeed = 2;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;

	// scene

	scene = new THREE.Scene();

	//$scope.lightingColor = data.lightingColor;
	var ambient = new THREE.AmbientLight( 0x444444 );
	scene.add( ambient );

	var directionalLight = new THREE.DirectionalLight( 0xffeedd );
	directionalLight.position.set( 1, 1, 1 ).normalize();
	scene.add( directionalLight );

	var pointLight = new THREE.PointLight(0x777777);
	pointLight.position.set(150, 250, -400);

	scene.add(pointLight);

	// background / effects / particles

	// particle: smoke

	smokeParticles = new THREE.Geometry;
	for (var i = 0; i < 1000; i++) {
		var particle = new THREE.Vector3(Math.random() * 150 - 75, Math.random() * 230, Math.random() * 50 - 25);
		smokeParticles.vertices.push(particle);
	}

	var smokeTexture = THREE.ImageUtils.loadTexture('../models/textures/smoke.png');
	var smokeMaterial = new THREE.ParticleBasicMaterial({ map: smokeTexture, transparent: true, blending: THREE.AdditiveBlending, size: 50, color: 0x111111 });

	smoke = new THREE.ParticleSystem(smokeParticles, smokeMaterial);
	smoke.sortParticles = true;
	smoke.position.y = -100;

	scene.add(smoke);

	// particles: snowflake

	var particles = new THREE.Geometry;

	for (var p = 0; p < 2000; p++) {
		var particle = new THREE.Vector3(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 500 - 250);
		particles.vertices.push(particle);
	}

	//the line below adds texture to the particles
	var particleTexture = THREE.ImageUtils.loadTexture('../models/textures/snowflake.png');

	// var particleMaterial = new THREE.ParticleBasicMaterial({ color: 0xeeeeee, size: 2 });

	var particleMaterial = new THREE.ParticleBasicMaterial({ color: 0xFFFFFF, map: particleTexture, transparent: true, size: 5, blending: THREE.AdditiveBlending });

	particleSystem = new THREE.ParticleSystem(particles, particleMaterial);

	scene.add(particleSystem);

	// model

	var loader = new THREE.OBJMTLLoader();
	loader.load( '../models/batman/Batman.obj', '../models/batman/Batman.mtl', function ( object ) {
	// loader.load( '../models/zero/zero.obj', '../models/zero/zero.mtl', function ( object ) {

		object.position.y = - 80;
		loadedObject = object;
		scene.add( object );

	} );

	//

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	// document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

// function onDocumentMouseMove( event ) {

// 	mouseX = ( event.clientX - windowHalfX ) / 2;
// 	mouseY = ( event.clientY - windowHalfY ) / 2;

// }

//


function animate() {

	requestAnimationFrame( animate );
	// render();

	var delta = clock.getDelta();
	particleSystem.rotation.y += delta;
	loadedObject.rotation.y -= delta;
	smoke.rotation.y -= delta;

	controls.update();

	var particleCount = smokeParticles.vertices.length;
	while (particleCount--) {
		var particle = smokeParticles.vertices[particleCount];
		particle.y += delta * 50;
		if (particle.y >= 230) {
			particle.y = Math.random() * 16;
			particle.x = Math.random() * 150 - 75;
			particle.z = Math.random() * 50 - 25;
		}
	}
	smokeParticles.__dirtyVertices = true;

	// camera.lookAt( scene.position );

	renderer.render(scene, camera);

}

// function render() {

// 	camera.position.x += ( mouseX - camera.position.x ) * .05;
// 	camera.position.y += ( - mouseY - camera.position.y ) * .05;

// 	// camera.lookAt( scene.position );

// 	renderer.render( scene, camera );

// }

init();
animate();