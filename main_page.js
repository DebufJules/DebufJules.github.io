 function openDiv(id,label) {
	
	index = document.getElementById(id).zIndex;
	 
	 
    document.getElementById(id).style.display = "block";
	 document.getElementById(label).style.backgroundColor = "transparent";
	document.getElementById(label).style.color = "black";
	 document.getElementById(id).style.zIndex = index + 100;
}

function closeDiv(id) {
    document.getElementById(id).style.display = "none";
}
function dubbelClick(id){
	document.getElementById(id).style.backgroundColor = "blue";
	document.getElementById(id).style.color = "white";
	
}
 function openVideo(id,closeid,closeid2,closeid3,closeid4,closeid5,closeid6) {
	
	 
	 
    document.getElementById(id).style.display = "block";
	document.getElementById(closeid).style.display = "none";
	document.getElementById(closeid2).style.display = "none";
	document.getElementById(closeid3).style.display = "none";
	document.getElementById(closeid4).style.display = "none";
	document.getElementById(closeid5).style.display = "none";
	document.getElementById(closeid6).style.display = "none";
}
function playVideo(id){
	
}
function pauzeVideo(id){
	
}
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if (h == 0) {
        h = 12; // Midnight case
    }
    
    if (h > 12) {
        h = h - 12; // PM case
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    
    // Use innerText (or textContent, but avoid setting both)
    document.getElementById('tijd').innerText = time;
    
    setTimeout(showTime, 1000); // Update time every second
}

  document.addEventListener("DOMContentLoaded", function() {
    showTime();
  });
window.onload = function() {
        showTime();
    };