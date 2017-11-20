// ventana de inicio y de carga
window.addEventListener("click", inicio);

// variables
var addListBtn = document.getElementById('add-list-button');
var listItems = document.getElementById('list-items');
var input = document.getElementsByName('list-title')[0];
var createItemHTML = function(listItem){

	// comentado abajo

	var item = document.createElement('div');
	item.classList.add('item');

	// title
	var titleElement = document.createElement('p');
	titleElement.classList.add('title');
	titleElement.innerHTML = listItem.title
	// end title

	// tasks list
	var tasksElement = document.createElement('ol');
	tasksElement.classList.add('tasks');
	for(var i = 0; i < listItem.tasks.length; i++){
		var task = document.createElement('li');
		task.innerHTML = listItem.tasks[i];
		tasksElement.appendChild(task);
	}
	// end tasks list

	// agregar tasks
	var taskInput = document.createElement('input');
	var addTaskButton = document.createElement('button');
	addTaskButton.setAttribute('id', 'add-task-button');
	addTaskButton.innerHTML = 'Add Task';
	// end agregar tasks

	item.appendChild(titleElement);
	item.appendChild(tasksElement);
	item.appendChild(taskInput);
	item.appendChild(addTaskButton);

	addTaskButton.addEventListener('click', function(e){
		listItem.tasks.push(taskInput.value); // objecto
		var newTask = document.createElement('li');
		newTask.innerHTML = taskInput.value;
		tasksElement.appendChild(newTask); // agregando al html
	});

	return item;
}

var createNewList = function(title) {
	return {
		title: title,
		tasks: []
	}
}

var addList = function(newList) {
	myLists.push(newList); // objeto
	listItems.appendChild(createItemHTML(newList)) // agregar a el HTML
}

var addNewList = function(e){
	e.preventDefault();
	var title = input.value;
	if(title === '') return;
	var newList = createNewList(title)
	addList(newList)
}

var initialize = function(){
	for(var i = 0; i < myLists.length; i++){
		listItems.appendChild(createItemHTML(myLists[i]))
	}
}

addListBtn.addEventListener('click', addNewList)

initialize();




	// <div class='item'>
	//   <p class='title'>titulo lista 1</p>
	//   <ol class='tasks'>
	//       <li>taks: Coffee</li>
	//       <li>taks: Tea</li>
	//       <li>taks: Milk</li>
	//   </ol>
	//   <input type="text" placeholder="new task">
	//   <button id='add-task-button'>Add Task</button>        
	// </div>