//Adding a deleting button to all the tasks
var myTaskList = document.getElementsByTagName("li");
for (var i = 0; i < myTaskList.length; i++){


}

function addRemoveButton(taskElement){
    var span = document.createElement("button");
    var text = document.createTextNode("Remove");
    span.className = "remove";
    span.appendChild(text);
    taskElement.appendChild(span);

    span.onclick = function(){
        var currentElement = this.parentElement;
        currentElement.remove();
    }
}

function addCheckedToggle(taskElement){
    taskElement.onclick = function(){
        taskElement.classList.toggle("checked");
    }
}
//Adding task
document.getElementById("button").onclick = function(){newTask()}

// Adding task when the Enter key is pressed
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        newTask();
    }
});

function newTask(){
    const Tasks = document.getElementById("myTask");
    const newtask = document.getElementById("input").value;

    var li = document.createElement("li");
    var t = document.createTextNode(newtask);
    li.setAttribute("id", "task")
    li.appendChild(t);

    if(newtask === ''){
        alert("The input field is empty!!!");
    }
    else {
        Tasks.appendChild(li);
    }

    //resetting the input field
    var inputBox = document.getElementById("input");
    inputBox.value = "";

    addRemoveButton(li);

    addCheckedToggle(li);
}

//Cross out the task when clicked on
