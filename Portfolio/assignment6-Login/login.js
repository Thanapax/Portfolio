const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const registerUserName = urlParams.get("username");
const registerPassWord = urlParams.get("password");

window.onload = loginLoad;
function loginLoad(){
	var loginForm = document.getElementById("myLogin");
	loginForm.onsubmit = checkLogin;
}

function checkLogin(){
	var loginForm = {
		loginUserName : document.forms["myLogin"]["username"].value,
		loginPassWord : document.forms["myLogin"]["password"].value
	};
	
	if(loginForm.loginUserName !== registerUserName || loginForm.loginPassWord !== registerPassWord){
		alert("กรอกใหม่");
		return false;
	}
	alert("ถูกต้อง");
	return true;
}

