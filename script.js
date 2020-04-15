function addItemBlock(newTextItem) {
	let itemDiv = document.createElement('div');
	itemDiv.innerText = newTextItem;
	document.querySelector('.list-tems').appendChild(itemDiv);
}

function onSubmitButton() {
	let elementInput = document.querySelector('.todo-input');
	addItemBlock(elementInput.value);
	elementInput.value = '';
}

document.querySelector('.btn').addEventListener('click', onSubmitButton);







// if (false) {
// 	console.log('this true');
// } else if (true) {
// 	console.log('this else');
// } else {
// 	console.log('this default');
// }
// console.log('this end');

// a = true;
// b = false;
// c = false;
// d = true;

// if (a && b && c || c || d || a && c) {
// 	console.log('this true');
// }

