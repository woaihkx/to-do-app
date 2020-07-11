function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");
  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;
    if (title.length == 0) {
      return false;
    }


    // create a new li
    let newLi = document.createElement("Li");

    // create a new input
    let checkbox = document.createElement("input");

    // set the input's type to checkbox
    checkbox.type = "checkbox";
    checkbox.setAttribute("style", "transform: scale(1.5); position: relative; left: 12px");

    // set the title
    newLi.textContent = title;
    newLi.setAttribute("style", "font-size: 1.4em; font-weight: 400px");

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = "";

    let button = document.createElement("button");
    button.style.backgroundColor = "#2A9988";
    button.style.color = "white";
    button.style.position = "absolute";
    button.style.left = "350px";
    button.style.textAlign = "center";
    button.style.height = "22px";
    let textNode = document.createTextNode("Delete");
    button.appendChild(textNode);
    // button.className = "mdl-button mdl-js-button mdl-button--raised mdl-button--accent";
    newLi.appendChild(button);

    button.addEventListener("click", event => {
        newLi.parentNode.removeChild(newLi);
    });

  });

}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
