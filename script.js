"use strics"
//Variables
let addTask = document.querySelector(".addTask");
let listItems = document.querySelectorAll(".listItem");

let inputField = document.querySelector("#inputField");

let filterSelect = document.querySelector(".filterInputs");


//Sortable drag and drop API
let toDoList = document.querySelector(".toDoList");
new Sortable(toDoList, {
    animation: 350
});

// Add Task Function
addTask.addEventListener("click", addTaskFunction = () => {
    let newListItem = document.createElement("div");
    const containerForBtns = document.createElement("div");
    //new task
    newListItem.classList.add("listItem");
    newListItem.innerHTML = inputField.value;

    //check and dellete btns
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerHTML = "<i class='fas fa-check'></i>";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;


    if (inputField.value == "") {
        alert("Type Something");
    } else {
        toDoList.append(newListItem);
        newListItem.append(containerForBtns);
        containerForBtns.append(completeBtn);
        containerForBtns.append(deleteBtn);
        inputField.value = "";
    }

    //check and delete fucntions
    completeBtn.addEventListener("click", () => {
        newListItem.classList.toggle("completeBtnToggle");
        // setTimeout(() => {
        //     newListItem.style.display = "none";
        // }, 1000);
    })
    deleteBtn.addEventListener("click", () => {
        newListItem.remove()
    })




})
//"Enter" event
document.addEventListener("submit", (e) => {
    e.preventDefault()
    addTaskFunction();
})


//Create Local Storage

