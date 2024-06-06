document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  let textBox = document.querySelector(".input");


  const addtodoLocalstorage = (e) => {
    return localStorage.setItem("TaskData", JSON.stringify(e));
  }
  ;

  const gettodolocalstorage = (e) => {
    return localStorage.getItem();
  };

  let addList = (e) => {
    let inpText = document.querySelector(".input").value;
    if (inpText.trim() === "") {
      return;
    }
    addtodoLocalstorage(inpText);
    // console.log(gettodolocalstorage(inpText));
    let li = document.createElement("li");
    let div = document.createElement("div");
    let check = document.createElement("input");
    let whTask = document.createElement("div");

    whTask.appendChild(check);
    whTask.appendChild(li);
    whTask.setAttribute("class", "whTask");
    div.setAttribute("class", "task");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "check");
    check.addEventListener("change", (event) => {
      taskUpdate(li);
    });

    let close = document.createElement("img"); 
    close.setAttribute("src", "circle-xmark-regular.svg");
    close.addEventListener("click", () => {
      div.remove();
    });

    li.innerText = inpText;
    document.querySelector(".container").appendChild(div);
    div.appendChild(whTask);
    div.appendChild(close);

    document.querySelector(".input").value = ""; 
  };

  let taskUpdate = (value) => {
    console.log(value);
    value.classList.toggle("new");
  };

  button.addEventListener("click", addList);

  textBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addList();
    }
  });
});
