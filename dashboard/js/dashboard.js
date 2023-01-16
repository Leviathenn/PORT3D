//Made By BioShot Aaka Levi-A\\
import * as THREE from './modules/three.js';
import { OrbitControls } from './modules/OrbitControls.js'
import { GLTFLoader } from './modules/GLTFLoader.js';
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);
//Check the web perams
var url = new URL(window.location.href);
var action = url.searchParams.get("action");
if(action == null){}else{
    $.ajax({
        type: "GET",
        url: "actions/"+action+".action",
        success: function (responce) {
            console.log("action found.")
            console.log("opening "+action+".");
            var actions = document.createElement("script");
            actions.src = responce;
            document.head.appendChild(actions);
        },
        error: function(){
            error("Action Not Found! ("+action+").");
        }
});
}

function error(errorMessage){
    swal.fire({ 
                icon:"error",
                title:"Error!",
                html:`${errorMessage} <style>.swal2-popup {
  font-size: 1.2rem !important;
  font-family: sfpro;
}
.swal2-title{
    color: red;
}
.swal2-html-container{
    color:gray;
}</style>`,
              
                
                background:"rgb(48, 48, 48)"
    })
}
$(document).ready(async function () {

    $("#btn-import").click(function(){
        document.getElementById("importfile").click();
        $("#importfile").change(function (event){
            const files = event.target.files;
            const file =  event.target.result;
            const reader = new FileReader();
        
        reader.addEventListener('load', function (event){
        const fsty = document.getElementById('importfile').files[0].name
        if(fsty.lastIndexOf(".p3d") != -1){
           function onWindowResize() {
 
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
 
  renderer.setSize( window.innerWidth, window.innerHeight );
 
}
 
 
window.addEventListener('resize', onWindowResize);
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
            const zip = new JSZip();
zip.loadAsync(event.target.result)
  .then(() => {
    return zip.file("object.glb").async("blob");
  })
  .then((fileData) => {
    var loader = new GLTFLoader();
      const url = window.URL.createObjectURL(new Blob([fileData]));
    // load the GLB file
    loader.load(url, function (gltf) {
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
    
  });
 
        }else{
        const content = JSON.parse(event.target.result);
        const editorData = content.$editorData
        const object = content.$object
        const port3d = {}
        const bioshot = {}
        const deprecated = editorData.deprecated;
        var list = 0;
        var last = 0;
        
        
        bioshot.modules = editorData.modules;
        bioshot.conditionalRotation = {};
        bioshot.conditionalRotation.trigger = function(){
            if(object.camera.conditionalRotation[0]=="port3d.rotation.y"&&object.camera.conditionalRotation[1]=="port3d.rotation.x"){
                return `
                    requestAnimationFrame( renderN );
                    
				    cube.rotation.x += 0.01;
				    cube.rotation.y += 0.01;
                    
				    render.render( scene, camera );`
            }
        }
        Object.keys(deprecated).forEach(element => {
            console.log(element)
            if(deprecated[element] == bioshot[0]){
                error(`deprecated module (${bioshot.modules}). `);
                throw "error"
            }else{
                if(list == last){
                    list+1;
                    if(deprecated[element] == bioshot[0]){
                        error(`deprecated module (${bioshot.modules}). `);
                        throw "error"
                    }
                    
                }else if(list == last-1){
                    i+1;
                    if(deprecated[element] == bioshot[0]){
                       error(`deprecated module (${bioshot.modules}). `);
                       throw "error"
                    }
                }
            }
        });
        if(object.name){
            
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const render = new THREE.WebGLRenderer();
            render.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(render.domElement);
            $("#btn-import").remove();
            $("#btn-export").remove();
            if(object.source){
                const geometry = new THREE.BoxGeometry(object.size[0],object.size[1],object.size[2])
                const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
                const cube = new THREE.Mesh(geometry, material);
                scene.add( cube );
                
                camera.position.z = 5;
                if(object.camera.rotation[0] == "port3d.movement.mouseY" && object.camera.rotation[1] == "port3d.movement.mouseX" && object.camera.rotation[2] == undefined){
                     function renderN() {
                        requestAnimationFrame(renderN);
                        if(object.camera.conditionalRotation != undefined){
                           const promise1 = new Promise((resolve, reject) => {
                            if(eval(object.camera.conditionalRotation[2].code) == true){
                               eval(bioshot.conditionalRotation.trigger());
                            }else{
                                throw "error!"
                            }
                        });
                        promise1.catch(function (){
                            console.log("error!")
                            $(document).mousedown(function () {
                          $(document).mousemove(function (e) {
                            if(eval(object.camera.conditionalRotation[2].code) == true){
                               eval(bioshot.conditionalRotation.trigger());
                            }else{
                                console.log(e.pageX, e.pageY)       
                                cube.rotation.y = e.pageX / 100;
                                cube.rotation.x = e.pageY / 100;
                            }
                                
                            });
                        });
                        $(document).mouseup(function () {
                            $(document).unbind('mousemove');
                        });
                        render.render( scene, camera );
                            
                        })
                        
                    }else{
                        
                   $(document).mousedown(function () {
                          $(document).mousemove(function (e) {
                            
                                console.log(e.pageX, e.pageY)       
                                cube.rotation.y = e.pageX / 100;
                                cube.rotation.x = e.pageY / 100;
                            
                        });
                    });
                    render.render( scene, camera );
                    }
                        
                }
                    renderN();
                    
                }else{
                function animate() {
				    requestAnimationFrame( animate );
                    
				    cube.rotation.x += 0.01;
				    cube.rotation.y += 0.01;
                    
				    render.render( scene, camera );
                }
                animate();
                
			};

			
            }
        }else{
            swal.fire({
                icon:"error",
                title:"Error!",
                html:`This Port3D Object is invalid! (Forgot to add name in json) <style>.swal2-popup {
  font-size: 1.2rem !important;
  font-family: sfpro;
}
.swal2-title{

    color: red;
}
.swal2-html-container{
    color:gray;
}</style>`,
              
                
                background:"rgb(48, 48, 48)"
            })
        }
    }
    })
           reader.readAsBinaryString(files[0])

  
        })
    })
    $("#btn-export").click(function(){
        if(document.import != undefined){
            //Run the export function
        }else{
            swal.fire({
                icon:"error",
                title:"Error!",
                html:`There is nothing to export! <style>.swal2-popup {
  font-size: 1.2rem !important;
  font-family: sfpro;
}
.swal2-title{
    color: red;
}
.swal2-html-container{
    color:gray;
}</style>`,
              
                
                background:"rgb(48, 48, 48)"
            })
        
               
        }
    })
});