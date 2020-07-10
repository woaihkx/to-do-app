function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");
  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement("Li");

    // create a new input
    let checkbox = document.createElement("input");

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = "";

    let button = document.createElement("button");
    let textNode = document.createTextNode("Delete");
    button.appendChild(textNode);
    // button.className = "mdl-button mdl-js-button mdl-button--raised mdl-button--accent";
    toDoList.appendChild(button);

    button.addEventListener("click", event => {
        toDoList.parentNode.removeChild(toDoList);
    });

  });

}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
