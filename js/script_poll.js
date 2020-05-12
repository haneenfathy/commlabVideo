function pollHaneen() {
	

	document.getElementById("final").innerHTML="NOT THE KILLER";
	document.getElementById("time").innerHTML="NOW CONTINUE WATCHING TO FIND OUT WHO THE REAL KILLER IS";
	console.log("haneen print");
	document.getElementById("haneen").disabled = true;
	document.getElementById("logaine").disabled = true;
	document.getElementById("dania").disabled = true;


}
function pollDania() {
document.getElementById("final").innerHTML="NOT THE KILLER";
document.getElementById("time").innerHTML="NOW CONTINUE WATCHING TO FIND OUT WHO THE REAL KILLER IS";
	console.log("Dania print");
	document.getElementById("haneen").disabled = true;
	document.getElementById("logaine").disabled = true;
	document.getElementById("dania").disabled = true;

}
function pollLogaine() {

document.getElementById("final").innerHTML="KILLER";
document.getElementById("time").innerHTML="GOOD JOB! NOW CONTINUE WATCHING TO FIND OUT WHY";
	console.log("logaine print");
	document.getElementById("haneen").disabled = true;
	document.getElementById("logaine").disabled = true;
	document.getElementById("dania").disabled = true;

}