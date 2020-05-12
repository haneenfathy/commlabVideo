
window.onload=function(){
	


  	var input = document.getElementById("myInput");
	input.addEventListener("keyup", function(event) {
		console.log("here");
	  if (event.keyCode === 13) {
	  	console.log("here again");
	   document.getElementById("myBtn").click();
	  }
	});
}



function openNav() {
	console.log("open");
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
var i = 0;
var txt = 'WELCOME PLEASE SCAN FOR SECURITY CLEARANCE. ';
var speed = 150;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function data() {

	
	var name = "  "+ document.getElementById("myInput").value;
	document.getElementById("data").innerHTML = name.toUpperCase();
	document.getElementById("myInput").value = " ";

}







