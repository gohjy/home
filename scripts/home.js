let userObj = JSON.parse(localStorage.getItem("userData-loginv2"));

const isGuest = !!userObj.guest;
{
    //add welcome header with name
	let username = userObj.name;
	let welcometext = document.querySelector("#welcome");
	
	welcometext.textContent = username;

	/*Do NOT change page header from the default "nushweb"*/
	/*
	if (!isGuest) {
		let pageheader = document.querySelector("#page-header");
		let GEPclass = userObj.GEPclass + " Portal"
		
		pageheader.innerText = document.title = GEPclass + " Home";
	} else {
        welcometext.parentElement.style.display = "none";
    }
		*/
}

{
	//widgets
	document.querySelectorAll(".widget").forEach(elem => {
		if (elem.dataset.to) {
			if (elem.id !== "hw-w") {
				elem.addEventListener("click", function() {
					window.open(elem.dataset.to);
				});
			} else {
				elem.addEventListener("click", function() {
					location.href = elem.dataset.to;
				});
			}
		}
	});
}

{
    //reset logo
	document.getElementById("iconlink").href = `/nushweb/logos/logo.png`;
}
	
{
    //set theme and configure button	
	document.getElementById("toggletheme").addEventListener("click", function(ev) {
		let btn = ev.target;
		let htmlel = document.body.parentNode;
		htmlel.classList.toggle("newtheme")
		btn.innerText = htmlel.classList.contains("newtheme") ? "Dark theme" : "Light theme"
		localStorage.setItem("theme", htmlel.classList.contains("newtheme") ? "l" : "d")
	})
}

{
    //fetch existing theme and change if required
	let theme = localStorage.getItem("theme"); // will be "l" or "d"
	if (theme == "l") {
		document.getElementById("toggletheme").click();
	}
}

{
	//For activating tools.
	for (tool of Array.from(document.querySelectorAll("div.tool"))) {
		tool.setAttribute("tabindex", "0");
		tool.addEventListener("click", function(ev) {
			window.open(ev.currentTarget.dataset.link);
		})
		let span = document.createElement("span");
		let text = document.createTextNode(tool.dataset.name);
		span.appendChild(text);
		span.classList.add("description");
		tool.appendChild(span);
	}
}

{
	let btn = document.querySelector("#sign-out-btn");
	btn.addEventListener("click", function() {
		localStorage.removeItem("userData-loginv2");
		location.assign("/nushweb/_landing/main");
	})
}
