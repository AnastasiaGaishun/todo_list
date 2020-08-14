document.querySelector('.btn').addEventListener('click', addTask);
document.querySelector('.list-items').addEventListener('click', removeTask);
let MyFuncCalls =  0;
let MyFuncCallsDiv = 'item';
function addTask() {
	MyFuncCalls++;
	let text = document.querySelector('.todo-input').value;
	
	let oldHtml = document.querySelector('.list-items').innerHTML;
	document.querySelector('.list-items').innerHTML = `${oldHtml}<div class = ${MyFuncCallsDiv + MyFuncCalls}>${text}<div><button id = ${MyFuncCalls}>x`;
	document.querySelector('.todo-input').value = '';
} 
function removeTask(event){
	let yesdiv = event.path[2];
	yesdiv.remove();
	MyFuncCalls = 0;
	let val = document.querySelector('.list-items').children;
	let valCount = document.querySelector('.list-items').childElementCount;
	let valName = String(val[0].className);

	for(index = 0;index<=valCount;index++) {
	MyFuncCalls++;	
	val[index].ClassList.remove(valName);
	val[index].ClassList.add(MyFuncCallsDiv + MyFuncCalls);		
	}
}

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
	page.classList.toggle('light-theme');
	page.classList.toggle('dark-theme');
};
