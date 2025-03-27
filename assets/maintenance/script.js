let isUnderMaintanence = new Date() < new Date(2023, 5, 8, 7, 0, 0, 0);
if ((isUnderMaintanence === true) && (location.hostname.split(".")[1] !== "id")) {
	localStorage.setItem("expectedCompletionTime", "Thu 8 June 2023, 07:00:00");
	location.replace("/nushweb/assets/maintenance");
}
