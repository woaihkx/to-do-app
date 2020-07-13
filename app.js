function onReady() {
  let toDos = [];
  loadFromStorage();

  // TODO use ID rigorous uuid Node.js package
  // console.log("Time stamp " + Date.now());
  // import { v4 as uuidv4 } from 'uuid';

  let myStorage = window.localStorage;
  const addToDoForm = document.getElementById("addToDoForm");
  function createNewToDo() {
    const newToDoText = document.getElementById("newToDoText");
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: Date.now()
    });
    myStorage.setItem("toDos", JSON.stringify(toDos));
    // id += 1;  // this is a bad idea for dynamic changes
    newToDoText.value = "";
    renderTheUI();
  }

  function loadFromStorage() {
    let myStorage = window.localStorage;
    var toDosString = myStorage.getItem("toDos");
    if (toDosString != null) {
      toDos = JSON.parse(toDosString);
    }
    console.log("Loaded to-dos array from storage");
    console.table(toDos);
  }

  function renderTheUI() {
    const toDoList = document.getElementById("toDoList");
    toDoList.textContent = "";
    toDos.forEach(function(toDo) {
      const newLi = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;
      checkbox.addEventListener("change", function() {
        if(this.checked) {
          toDo.complete = true;
        } else {
          toDo.complete = false;
        }
        myStorage.setItem("toDos", JSON.stringify(toDos));
      })
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      let button = document.createElement("button");
      let textNode = document.createTextNode("Delete");
      button.appendChild(textNode);
      newLi.appendChild(button);
      button.addEventListener("click", event => {
        //delete toDos[toDo.id];  // caution id may not equal index
        toDos = toDos.filter(eachToDo => eachToDo.id != toDo.id);
        myStorage.setItem("toDos", JSON.stringify(toDos));
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
