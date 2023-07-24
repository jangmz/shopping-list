var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
var counter = items.length + 1;

// returns the length of the input value
function inputLength() {
	return input.value.length;
}

// creates "li" item in ul
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	// adds id and event listener
	li.id = counter;
	counter++;
	li.addEventListener("click", toggleDone);
	// adds delete button
	createDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}

// adds item to the list with click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// adds item to the list with "enter"
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// toggles "done" class on/off
function toggleDone(event) {
	var itemId = event.target.id;
	var item = document.getElementById(itemId);

	if (item.classList.contains("done")){
		item.classList.remove("done");
	} else if (!(item.classList.contains("done"))){
		item.classList.add("done");
	}
}

// creates a "delete" button
function createDeleteButton(item) {
	var button = document.createElement("button");
	button.id = item.id;
	button.innerText = "Delete";
	// event listener for each button -> to delete item
	button.addEventListener("click", deleteItem);
	item.appendChild(button);
}

// deletes an item from the list
function deleteItem(event) {
	var id = event.target.id;
	delete_item = document.getElementById(id);
	if (delete_item) {
		ul.removeChild(delete_item);
		console.log("removed");
	} else {
		console.log("item not found / not deleted");
	}
}

// adds event listener to all the "li" items in "ul"
for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", toggleDone);
	// add a "delete" button
	createDeleteButton(items[i]);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
