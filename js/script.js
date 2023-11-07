function init(){
//add your javascrip between these two lines of code
  var out = document.getElementById('entrybutton');
  
  function output(){
    var input = document.getElementById('entryinput');
	document.getElementById('textoutput').innerHTML = input.value;
    alert("John Maravilla: " + input.value);
  }
  
  out.addEventListener('click', output);
}

window.addEventListener('load', init);
