//Made By BioShot aka Levi-A\\
import * as THREE from './modules/three.js';
import { OrbitControls } from './modules/OrbitControls.js'
import { GLTFLoader } from './modules/GLTFLoader.js';


$(document).ready(function () {
    setTimeout(() => {
        $(".loader").remove();
        swal.fire({
            icon: 'question',
            title: "Read Me",
            
            html: `
                <h2 class="message">Hello, To whoever is reading this. This example was made for a school project. This website and render was Made By Levi A. The sign was made By Levi.A And Beau.P. You Can Move Around Using the Scroll Wheel, Mouse Button 1 And Mouse Button Two.</h2>
                <style>
                .swal2-title{
    color: white;
}
.message {
    color:white;
}</style>

            `,
            background:"rgb(48, 48, 48)"
        })
        const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.outputEncoding = THREE.sRGBEncoding;

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
dirLight.position.set( - 3, 10, - 10 );
scene.add( dirLight );

            const render = new THREE.WebGLRenderer();
           
    var loader = new GLTFLoader();
      //const url = window.URL.createObjectURL(new Blob([fileData]));
    // load the GLB file
    loader.load("p3d/object.glb", function (gltf) {
        var model = gltf.scene;
       // model.scale.set(1,1,1)
       
        scene.add( model);

const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.4 );
hemiLight.position.set( 0, 20, 0 );
scene.add( hemiLight );
camera.position.y = 1;
  camera.position.z = 3;
 
                       var controls = new OrbitControls(camera, renderer.domElement);
 
                         controls.target.set(4.5, 0, 4.5);
                        
                         controls.enableDamping = true;
                         // add the model to your scene
          function animate() {
				    
              
               

                         

                    requestAnimationFrame( animate );
				    renderer.render( scene, camera );
                }
                animate();
       
    });
    

    }, 3000);
});