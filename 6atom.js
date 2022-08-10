$(document).ready(function(){

  //atoms
  $("#atomkevin").click(function(){
      $("#atomshan1, #atomshanbg, #atomkevin1, #atomkevinbg, #hishan, #hikevin, #hand").show();
      });
  $("#atomshan").click(function(){
      $("#atomshan1, #atomshanbg, #atomkevin1, #atomkevinbg, #hishan, #hikevin, #hand").show();
      });
  $("#hishan").click(function(){
      $("#shanmonologue, #mountaintext, #seatext").toggle();
      });
  $("#hikevin").click(function(){
      $("#kevinmonologue, #roadtext, #startext").toggle();
      });
  $("#mountaintext").hover(function(){
      $("#mountain").toggle();
      });
  $("#seatext").hover(function(){
      $("#sea").toggle();
      });
  $("#roadtext").hover(function(){
      $("#road").toggle();
      });
  $("#startext").hover(function(){
      $("#star").toggle();
      });
      $("#atomkevinbg").draggable();
      $("#atomshanbg").draggable();



})
