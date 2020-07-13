function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById("addToDoForm");
  function createNewToDo() {
    const newToDoText = document.getElementById("newToDoText");
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id += 1;
    newToDoText.value = "";
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById("toDoList");
    toDoList.textContent = "";
    toDos.forEach(function(toDo) {
      const newLi = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      let button = document.createElement("button");
      let textNode = document.createTextNode("Delete");
      button.appendChild(textNode);
      newLi.appendChild(button);
      button.addEventListener("click", event => {
        //delete toDos[toDo.id];
        toDos = toDos.filter(eachToDo => eachToDo.id != toDo.id);
        newLi.parentNode.removeChild(newLi);
        renderTheUI();
      });

    });
  }

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {

  onReady();
};
