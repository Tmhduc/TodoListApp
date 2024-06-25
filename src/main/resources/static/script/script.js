//Adding a deleting button to all the tasks
var myTaskList = document.getElementsByTagName("li");
for (var i = 0; i < myTaskList.length; i++){
    var span = document.createElement("button");
    var text = document.createTextNode("Remove");
    span.className = "remove";
    span.appendChild(text);
    myTaskList[i].appendChild(span);
}

//Click on the delete button to remove the task
var close = document.getElementsByClassName("remove");
for (var i = 0; i < close.length; i++){ //iterating through the close button list
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

//Adding a checked symbol when clicking on a task


