function init(){
//add your javascrip between these two lines of code
  var out = document.getElementById('entrybutton');
  
  function output{
    var in = document.getAttribute("entryinput");
	document.getElementById('textoutput').innerHTML = textbox.value;
    alert("John Maravilla: " + in);
  }
  
  out.addEventListener('click', output);
}

window.addEventListener('load', init);
