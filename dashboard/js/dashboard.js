//Made By BioShot\

$(document).ready(function () {
    $("#btn-import").click(function(){
        document.getElementById("importfile").click();
        $("#importfile").change(function (event){
            const files = event.target.files;
            
            const reader = new FileReader();
        
    reader.addEventListener('load', function (event){
        const content = JSON.parse(event.target.result);
        const object = content.$object
        if(object.name){

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