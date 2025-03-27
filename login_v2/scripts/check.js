try {
	let userObj = JSON.parse(localStorage.getItem("userData-loginv2"));
	// alert(userObj);
	if ((userObj === null) && (location.pathname !== "/nushweb/assets/error/not-logged-in.html")) {
		let newURL = new URL("/nushweb/assets/error/not-logged-in.html", location.origin);
		newURL.searchParams.append("to", location.pathname);
		location.href = newURL;
	} else {
		if (userObj.restrictedAccess === true) {
			let allowed = userObj.allowed;
			if (!(allowed.includes(location.pathname + location.search + location.hash))) {
				location.assign("/nushweb/assets/error/no-access-right.html");
			}
		} else {
            if (document.body) {
                document.body.removeAttribute("style");
            }
		}
	}
} catch(e) {
	location.replace("/nushweb/login_v2/public/login_page");
	alert("We ran into an internal error. Please login again.");
}
