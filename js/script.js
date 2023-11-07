function init(){
//add your javascrip between these two lines of code
  var out = document.getElementById('entrybutton');
  function output{
    var in = document.getAttribute("entryinput");
    alert("John Maravilla: " + in);
  }
  out.addEventListener('click', output);
}
window.addEventListener('load', init);
