import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.add(camera);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfffff, 1);
document.body.appendChild(renderer.domElement);

let ambientLight = new THREE.AmbientLight(0x101010, 0.5);

ambientLight.position = camera.position;
scene.add(ambientLight);

let sunlight = new THREE.DirectionalLight(0xddddd, 0.5);
sunlight.position.y = 15
scene.add(sunlight);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 'blue' });
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);

renderer.render(scene, camera);