console.log("theme.js: JS file execution started")

function update() {
	let htmlel = document.body.parentElement;
	let lighttheme = localStorage.getItem("theme");
	if (lighttheme === "l") {
		htmlel.classList.add("newtheme");
	} else {
		htmlel.classList.remove("newtheme");
	}
}

update();
window.addEventListener("storage", update);
console.log("theme.js: event listener succesfully registered");