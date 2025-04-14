// Nav
const homeArrow = document.querySelector("#home-arrow");
const height = window.innerHeight;

// Features
const features = document.querySelector("#features");
const features_height = features.offsetTop;

// Tasks Dialog
const tasksDialog = document.querySelector(".tasks-dialog");
const openTasksDialogButton = document.querySelector(".open-tasks");
const closeTasksDialogButton = document.querySelector(".close-tasks");

// Event Listeners
// Tasks Dialog
openTasksDialogButton.addEventListener("click", () => {
	console.log("hello");
	tasksDialog.showModal();
});
closeTasksDialogButton.addEventListener("click", () => {
	tasksDialog.close();
});

// Functions
// Onscroll
window.onscroll = function () {
	// Nav
	if (window.scrollY > height) {
		homeArrow.style.display = "block";
	} else {
		homeArrow.style.display = "none";
	}

	// Features
	if (window.scrollY > features_height) {
		features.style.backgroundColor = "#fff";
	} else {
		features.style.backgroundColor = "#fefefe";
	}
};
