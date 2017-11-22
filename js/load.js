document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       $('table').css("visibility", "hidden");
       $('#title').css("visibility", "hidden");
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         $('#load').css("visibility", "hidden");
         $('#title').css("visibility", "visible");
         $('table').css("visibility", "visible");
      },100);
  }
}