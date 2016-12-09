$(document).ready(function (){
  console.log("welcome ! ");
  var collection = localStorage;
});


$("#trigger").on("click", function(){
  console.log("button has been clicked !");
  collection.push($('#add_stuff').val);
});
