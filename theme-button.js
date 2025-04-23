document.getElementById("theme-button").addEventListener("click", function () {
	var currentTheme = window.localStorage.getItem("theme") || "light";
	window.localStorage.setItem(
		"theme",
		currentTheme == "dark" ? "light" : "dark"
	);
	loadAndSetTheme();
});

function loadAndSetTheme() {
	var body = document.body;
	var currentTheme = window.localStorage.getItem("theme") || "dark";

	if (currentTheme == "dark") {
		body.classList.add("dark-theme");
	} else {
		body.classList.remove("dark-theme");
	}
}

loadAndSetTheme();
