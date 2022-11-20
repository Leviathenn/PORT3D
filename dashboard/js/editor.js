//Made By BioShot\\
$(document).ready(function (){
    var cubePlaced = false;
    var cubeData = {};
    $("#btn-import").remove();
    $("#btn-export").remove();
    $(".options").remove();
    $('.content').remove();
    $(document.body).append(` <div class="editor">
        <div class="sidebar">
            <div class="stage1">
                <h1 class="btn-Create">Create</h1>
                <h1 class="btn-import">Import</h1>
            </div>
             <div class="stage2">
                <div class="cube" id="cube"> </div>
                <h1 class="finish">Finish</h1>

                <div class="center">
                
                </div>
            </div>
        </div>
    </div>`)
    $('.stage2').slideUp(0);
    $(".btn-Create").click(function () {  
        $(".stage1").remove();
        $('.stage2').slideDown(1000);
       setTimeout(() => {
        
       }, 1000);
        
    })
    $('.cube').draggable({ revert: 'invalid' });
   
    $('body').droppable(
    {
        accept :        '.cube', 
        activeClass:    'dropactive', 
        hoverClass:     'drophover',
        tolerance:      'intersect',
        drop: function (event, ui) {  
            cubePlaced =true
           //console.log(cubePlaced);
           //const newCube = document.createElement("div");
           //newCube.className = "cube";
           //newCube.style = "position: relative; left: 62px; top: 52px;"
           //document.querySelector(".stage2").appendChild(newCube);
           //$(newCube).draggable({revert: 'invalid            '})
        }
    });
    $('.sidebar').droppable({
        accept :        '.cube', 
        activeClass:    'dropactive', 
        hoverClass:     'drophover',
        tolerance:      'intersect',
        drop: function(event, ui){
            $(ui.draggable).remove();
            const newCube = document.createElement("div");
           newCube.className = "cube";
           newCube.style = "position: relative; left: 62px; top: 52px;"
           document.querySelector(".stage2").appendChild(newCube);
           $(newCube).draggable({revert: 'invalid            '})
        }
    });
    $('.cube').click(async function(){
        console.log(cubePlaced);
        if(cubePlaced == true){
            console.log("mk");
           
            const { value: formValues } = await Swal.fire({
  title: 'Options For "Cube"',
  html:
    `size: X: <input type="number" name="x" class="inx">
                Y: <input type="number" name="y" class="iny"> Z: <input type="number" name="z" class="inz">`,
  focusConfirm: false,
  preConfirm: () => {
    return [
      $('.inx').val(),
      $('.iny').val(),
      $('.inz').val()
    ]
  }
})
if(formValues){
    console.log(formValues);
    //X and y are 0,1.
    $('.cube').css("width",formValues[0]+'in');
    $('.cube').css("height",formValues[1]+'in');
    cubeData = [formValues[0],formValues[1],formValues[2]];

}

        }else{
            console.log("cubePlaced is set to false")
        }
    })
    $('.finish').click(async function(){
         const { value: formValues } = await Swal.fire({
  title: 'Options For "Cube"',
  html:
    `Name This Form: <input type="text" name="name" class="formName">`,
  focusConfirm: false,
  preConfirm: () => {
    return $('.formName').val();
  }
})
    if(formValues){
    var jsonexport = {
            "$author":"port3dEditor",
            "$object":{
                "name":"New Cube",
                "type":"Cube",
                "source":"port3d.cube",
                "size":[cubeData[0], cubeData[1], cubeData[2]],
                "camera":{
                    "source":"port3d",
                    "position":"default",
                    "rotation":[
                        "port3d.movement.mouseY",
                        "port3d.movement.mouseX",
                    ],
                    "modules":[
                        "bioshot.camera",
                        "port3d.props.camera"
                    ]

                }
            },
            "$editorData":{
                "portName":formValues,
                "exportType":"json",
                "$scurl":"dashboard",
                "$parseImport":[
                    "$editorData",
                    "$object"
                ],
                "deprecated":[
                    "port3d.flat2D",
                    "bioshot.parse2D"
                ],
                "modules":[
                    "bioshot.conditionalRotation",
                    "port3d.object",
                    "camera.modules"  
                ]

            }
        }
        var fixJson = JSON.stringify(jsonexport);
        console.log(fixJson)
        var blob = new Blob([fixJson], {type: "text/plain;charset=utf-8"});

        saveAs(blob,formValues+".json");
    }
        
    })
})
