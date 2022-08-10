$(document).ready(function(){

  //cap and spy

  $("#capname").click(function(){
      $("#capintro").toggle();
      });
  $("#spyname").click(function(){
      $("#spyintro, #human, #saturn").toggle();
      });
  $("#captain").hover(function(){
      $("#caphover").toggle();
      });
  $("#bug").hover(function(){
      $("#caphover").toggle();
      });
  $("#missionlog").click(function(){
      $("#missionlog").hide();
      });
  $("#missionlog").click(function(){
      $("#missionloglong").show();
      });
  $("#capintro").draggable();
  $("#spyintro").draggable();


})
