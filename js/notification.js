var notification = document.getElementById('notification');

var close = document.getElementById("close");
window.onload = function() {
    checkCookie();
}
close.onclick = function() {
    notification.style.display = "none";
    createCookie('closeNotification',"true",7);
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function checkCookie() {
  if (readCookie('closeNotification') === 'true') {
      notification.style.display = "none";
  } else {
      notification.style.display = "block";
  }
}
