//1.get element and store in variable
var addButton=document.getElementsByName("add")[0];
var clearButton = document.getElementsByName("clear")[0];

//2. add event listener

addButton.addEventListener("click",addList);
clearButton.addEventListener("click",clearList);

//3. create function to add,cross to-do-list


//6. varible target location
var target = document.getElementById("taskList");
//5. get value form text and add to list 

var getText,newListTag,Task;
function addList()
{
    //get elements from texbox
     getText = document.getElementById("toDoList");
    //4. create variblae to add new element
     newListTag = document.createElement("li");
    newListTag.style.cssText = "list-style-type:none;";
    newListTag.innerHTML += '<input class="check-btn" type="checkbox" name="completedTask" onclick="myList(this)">';
    //insert xtext element inside <li> , get value form getText
    newListTag.appendChild(document.createTextNode(getText.value));
    // insert <li> into div
    target.appendChild(newListTag);
    console.log("Add button click");
    
}
function clearList()
{
    target.remove();
    location.reload();//window reload after clicked
    console.log("remove all elements");   
}

var checkList = target.querySelectorAll("input[type = 'checkbox']");

//this return inside the element to this function
function myList(checkboxElem){
    checkboxElem.parentElement.style.textDecoration = "line-through";
    
  }