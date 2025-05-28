// Variables
// Tasks Dialog
const tasksDialog = document.querySelector(".tasks-dialog");
const openTasksDialogButton = document.querySelector(".open-tasks");
const closeTasksDialogButton = document.querySelector(".close-tasks");

// Event Listeners
// Tasks Dialog
openTasksDialogButton.addEventListener("click", () => {
	tasksDialog.showModal();
});
closeTasksDialogButton.addEventListener("click", () => {
	tasksDialog.close();
});