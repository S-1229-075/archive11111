$(document).ready(function(){

  //kimono
    $("#kimono1").hover(function(){
        $("#mirrorfull").toggle();
        });
    $("#mirrorblank").click(function(){
        $("#one").show();
        });
        $("#one").click(function(){
            $("#two").show();
            });
            $("#two").click(function(){
                $("#three").show();
                });
                $("#three").click(function(){
                    $("#four").show();
                    });
                    $("#four").click(function(){
                        $("#five").show();
                        });
                        $("#five").click(function(){
                            $("#six").show();
                            });
                            $("#six").click(function(){
                                $("#seven").show();
                                });
                                $("#mirrorblank").click(function(){
                                    $("#mirrorblank1").show();
                                    });
                                    $("#mirrorblank").click(function(){
                                        $("#mirrorblank").hide();
                                        });



})
