$(document).ready(function(){

  //housewife and salt
  $("#wifeintro").draggable();
  $("#saltintro").draggable();
$("#wifename").click(function(){
      $("#wifeintro, #monologue, #hwbg").toggle();
      });
  $("#saltname").click(function(){
      $("#saltintro, #price, #salt2").toggle();
      });
      $("#head").click(function(){
            $("#story").show();
            });
            $("#head").click(function(){
                  $("#head").hide();
                  });




})
