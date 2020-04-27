var items = [];

function addItemBlock(newTextItem) {
	items.push(newTextItem);
	saveToStorage(items);
	let itemDiv = document.createElement('div');
	itemDiv.innerText = newTextItem;
	document.querySelector('.item').appendChild(itemDiv);
}

function onSubmitButton() {
	let elementInput = document.querySelector('.todo-input');
	addItemBlock(elementInput.value);
	elementInput.value = '';
}

function saveToStorage(items) {
	localStorage.setItem('items', JSON.stringify(items))
}

function getFromStorage(items) {
	return JSON.parse(localStorage.getItem('items'))
}

function init() {
	getFromStorage().forEach(function(value) {
		addItemBlock(value);
	})
}

init();

document.querySelector('.btn').addEventListener('click', onSubmitButton);

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
	page.classList.toggle('light-theme');
	page.classList.toggle('dark-theme');
};
