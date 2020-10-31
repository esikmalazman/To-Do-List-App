//1.get element and store in variable
var addButton=document.getElementsByName("add")[0];
var deleteButton = document.getElementsByName("delete")[0];



//2. add event listener
addButton.addEventListener("click",addList);
deleteButton.addEventListener("click",deleteList);

//3. create function to add,delete to-do-list


//6. varible target location
var target = document.getElementById("taskList");
//5. get value form text and add to list 
function addList()
{
    //get elements from texbox
    var getText = document.getElementById("toDoList");
    //4. create variblae to add new element
    var newListTag = document.createElement("li");
    //5.variable add text
    var Task = document.createTextNode(getText.value);
    // append textNode to <li>  node
    newListTag.appendChild(Task);

    //newListTag ready to append to target location
    target.appendChild(newListTag);

    
    document.body.insertBefore(newListTag,target);
    console.log("Add button click");
    
}

function deleteList()
{
    console.log("Delete button click");
}


