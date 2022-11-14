//Made By BioShot\\
$(document).ready(function (){
    $('.signup').hide(0);
    $('.signupt2').hide(0);
    var clickedalready = false;
    if(clickedalready == true){

    }else{
        $(".box").click(function (){
           $(".signup").slideDown(1000)
           
           clickedalready = true;
           $('.signupbtn').click(function (){
              if($('#username').val() != undefined && $('#password').val() != undefined){
                var username = $("#username").val();
                var password = $("#password").val();
                
                $('.box').css("background-color", "rgb(22, 254, 14)")
                $('.box').css("box-shadow","0 25px 25px hsl(118, 100%, 51%)")
                
                setTimeout(() => {
                    $('.box').slideUp(1000);
                    setTimeout(() => {
                        $('.txt').remove();
                        $('.signup').remove();
                        $('.box').slideDown(1000);
                        $('.box').css("background-color","hsl(300, 100%, 25%)")
                        $('.box').css("box-shadow","0 25px 25px  hsl(300, 81%, 49%)")
                        setTimeout(() => {
                            $('.signupt2').slideDown(1000);
                            $('.auth').click(function (){
                                 $('.box').css("background-color", "rgb(22, 254, 14)")
                                 $('.box').css("box-shadow","0 25px 25px hsl(118, 100%, 51%)")
                                 setTimeout(() => {
                                    $('.box').slideUp(1000)
                                    setTimeout(() => {
                                        document.location = "/dashboard"
                                    }, 2000);
                                 }, 2000);
                            })
                        }, 1000);
                        
                        
                    }, 2000);
                }, 2000);
                
              }
           });

        })
    }
})