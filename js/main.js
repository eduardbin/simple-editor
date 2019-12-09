'use strict';

let mainDiv = document.querySelector('[data-saved-text]');
let editor = document.querySelector('#editor');

window.addEventListener('keydown', showEditor);
window.addEventListener('keydown', saveChanges);
window.addEventListener('keydown', escape);

function showEditor(event) {
	if (event.keyCode == 69 && event.ctrlKey == true && editor.hasAttribute("hidden")) {
		event.preventDefault();
		editor.querySelector('#editor-value').value = mainDiv.innerHTML;

		mainDiv.setAttribute("hidden", '');
		editor.removeAttribute("hidden", '');
	} else return;
};

function saveChanges(event) {
	if (event.keyCode == 83 && event.ctrlKey == true && mainDiv.hasAttribute("hidden")) {
		event.preventDefault();
		mainDiv.innerHTML = editor.querySelector('#editor-value').value;

		mainDiv.removeAttribute("hidden", '');
		editor.setAttribute("hidden", '');
	} else return;
};

function escape(event) {
	if (event.keyCode == 27 && mainDiv.hasAttribute("hidden")) {
		event.preventDefault();
		editor.querySelector('#editor-value').value = mainDiv.innerHTML;

		mainDiv.removeAttribute("hidden", '');
		editor.setAttribute("hidden", '');
	} else return;
};

