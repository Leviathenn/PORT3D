//Made By BioShot\\
$(document).ready(function (){
   
    $("body").terminal({
         build: function(args,rbuildInfo){
            if(args == "-e" && rbuildInfo == "-f"){
                $("body").append(`<input type="file" id="ip" style="visibility: hidden;">`);
                const ip = document.getElementById("ip")
                $(ip).click();
                $(ip).change(function (event){
                    const reader = new FileReader();
                    const files = event.target.files;
                    reader.addEventListener("load", function(event){            
                         var buildInfo = JSON.parse(event.target.result);
                        console.log(buildInfo)
                         if(buildInfo.type == "json"){
                    var Size = buildInfo.size;
                    var object = buildInfo.object;
                    var cameraRotation = buildInfo.cameraRotation;
                    var Finish = {
                        "$author":"port3dEditor",
                    "$object":{
                        "name":"New Cube",
                        "type":"Cube",
                        "source":"port3d.cube",
                        "size":Size,
                        "camera":{
                            "source":"port3d",
                            "position":"default",
                            "rotation":cameraRotation,
                            "modules":[
                                "bioshot.camera",
                                "port3d.props.camera"
                            ]

                        }
                    },
                    "$editorData":{
                        "portName":"buildPortConsole",
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
                    };
                    var fixJson = JSON.stringify(Finish);

                    var blob = new Blob([fixJson], {type: "text/plain;charset=utf-8"});

                    saveAs(blob,"build.json");
                    ip.remove();
        
        }else{

        }
         })
          reader.readAsBinaryString(files[0])
        })
            }
        
       
        
    }
},{ 
    greetings: "Port3D Terminal" 
    })
})