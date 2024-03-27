var add = document.getElementById("add");
var list = document.getElementById("list");
// var remove = document.querySelectorAll("#remove");
var remove = document.getElementById("remove")

// remove all button 

remove.onclick = function(){
    list.innerHTML = "";
}
// adding a new list Element

add.onclick = function(){
    addlis(list);
    document.getElementById("userinput").value ="";
    document.getElementById("userinput").focus();
}

function addlis(targetUl){
    var inputText = document.getElementById("userinput").value;
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputText + " ");
    var removeButton = document.createElement("button");

    if(inputText !== ""){
        removeButton.className = "btn btn-sm btn-danger";
        removeButton.innerHTML = " &times; ";
        removeButton.setAttribute("onclick", "removeMe(this)");


        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    }else{
        alert("Please enter a TODO");
    }
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}