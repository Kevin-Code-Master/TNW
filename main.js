//function for opening the dropdowns
document.getElementById("event").addEventListener("mouseover", myFunction);
document.getElementById("event").addEventListener("mouseout", myFunctionOut);
document.getElementById("business").addEventListener("mouseover", business);
document.getElementById("business").addEventListener("mouseout", businessOut);

function myFunction(){
	document.getElementById("dropdown").style.display = "block";
}
//When you hover out of the list item
function myFunctionOut(){
	document.getElementById("dropdown").style.display = "none";
}
//for the business drop down on hover
function business(){
	document.getElementById("dropdown2").style.display = "block";
}
function businessOut(){
	document.getElementById("dropdown2").style.display = "none";
}

//for the time display
let date = new Date();
document.getElementById("local-time").innerHTML = date.toLocaleString();