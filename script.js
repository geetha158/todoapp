let addTask = document.getElementById("addToList");
console.log(addTask);

let card = document.getElementsByClassName("card");

let plusbutton = document.getElementById("plus");
const todolist = document.querySelector(".todolist");

let clearbutton = document.getElementById("clear");

let num = document.getElementById("num");

let removetask2 = document.getElementById("removetask");

let changecolor = document.getElementsByClassName("task");

let tasks = [];

function details() {
  let userentered = addTask.value;
  if (userentered == "") {
    console.log("No task is Added");
  } else {
    console.log(userentered);
    tasks.push(userentered);
    console.log(tasks);
    addTask.value = "";
    showdata();
  }
}
plusbutton.addEventListener("click", function () {
  details();
});

function showdata() {
  let newlisttoadd = "";
  tasks.forEach((Element, index) => {
    newlisttoadd += `<li class="task" ondblclick="completed(${index})">${Element} <button class="fa fa-remove btn-task" id="removetask" onClick="deletetask(${index})"style="font-size:20px;color:red"></button></span></li>`;
  });
  let length = `${tasks.length}`;
  todolist.innerHTML = newlisttoadd;
  num.innerHTML = length;
}

clearbutton.addEventListener("click", function () {
  tasks = [];
  console.log(tasks);
  showdata();
});

function completed(index) {
  //   tasks.splice(index, 1);
  //   let length = `${tasks.length}`;
  //   num.innerHTML = length;
}

function deletetask(index) {
  tasks.splice(index, 1);
  showdata();
  //   card.classList.add("remove");
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    details();
  }
});
