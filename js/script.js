function init(){
//add your javascrip between these two lines of code
  var out = document.getElementById('entrybutton');
  
  function output(){
    var in = document.getElementById('entryinput');
	document.getElementById('textoutput').innerHTML = textbox.value;
    alert("John Maravilla: " + textbox.value);
  }
  
  out.addEventListener('click', output);
}

window.addEventListener('load', init);
