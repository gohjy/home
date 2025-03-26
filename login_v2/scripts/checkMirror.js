try {
	let userObj = JSON.parse(localStorage.getItem("userData-loginv2"));
	if (userObj !== null) {
		location.href = "/home/page/main";
    }
} catch(e) {
	location.replace("/home/login_v2/public/login_page");
	alert("We ran into an internal error. Please login again.");
}