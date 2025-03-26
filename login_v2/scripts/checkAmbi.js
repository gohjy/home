/* Script for when the user can be redirected to either the home page or the landing page, for example when the url /home is accessed. */
try {
	let userObj = JSON.parse(localStorage.getItem("userData-loginv2"));
	// alert(userObj);
	if ((userObj === null) && (location.pathname !== "/home/assets/error/not-logged-in.html")) {
		location.href = "/home/_landing/main";
	} else {
		location.href = "/home/page/main";
	}
} catch(e) {
	location.replace("/home/login_v2/public/login_page");
	alert("We ran into an internal error. Please login again.");
}