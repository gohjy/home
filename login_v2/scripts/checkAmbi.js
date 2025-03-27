/* Script for when the user can be redirected to either the home page or the landing page, for example when the url /nushweb is accessed. */
try {
	let userObj = JSON.parse(localStorage.getItem("userData-loginv2"));
	// alert(userObj);
	if ((userObj === null) && (location.pathname !== "/nushweb/assets/error/not-logged-in.html")) {
		location.href = "/nushweb/_landing/main";
	} else {
		location.href = "/nushweb/page/main";
	}
} catch(e) {
	location.replace("/nushweb/login_v2/public/login_page");
	alert("We ran into an internal error. Please login again.");
}
