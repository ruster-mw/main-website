let noteSection = document.querySelector(".notesection")
let mainContainer = document.querySelector("main")
let container = document.querySelector("#tasklist")
let addInput = document.querySelector("#addNoteInput")
let addForm = document.querySelector(".addForm")
let dishes = document.querySelector("#dishes")
let conquer = document.querySelector("#conquer")
let learn = document.querySelector("#learn")
let tasks = document.querySelectorAll(".task")
let taskNames = document.querySelectorAll(".taskname")
let searchForm = document.querySelector(".searchForm")
let storedNotes = []
// ----------------------------------------------------------------------------------------------------------
function showNoteSection() {
    noteSection.style.display = "block";
}
function hideNoteSection(){
    noteSection.style.display = "none";
}
function statusColor(statusDiv){
    let child = statusDiv.firstChild
    let parent = statusDiv.parentElement
    statusDiv.addEventListener('click',function(){
        if(statusDiv.style.backgroundColor == 'red'){
            statusDiv.style.backgroundColor = "lime"
            child.style.clipPath = "polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%)"
            parent.style.textDecoration = "line-through"
        }
        else{
            statusDiv.style.backgroundColor ='red'
            child.style.clipPath = "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"
            parent.style.textDecoration = "none"
        }
    })
}
function saveNoteToLocalStorage(){
    let texts = document.querySelectorAll(".taskname")
    texts.forEach(item => {
        storedNotes.push(item.textContent)
    })
    localStorage.setItem("storedNotes",JSON.stringify(storedNotes))
}
function createSavedNotes(){
    const ur_data_noob = JSON.parse(localStorage.getItem("storedNotes"))
    ur_data_noob.forEach(item => {
    let li = document.createElement("LI")
    li.className = "task"
    let statusdiv = document.createElement("div")
    statusdiv.className = "statusdiv"
    let statussign = document.createElement("div")
    statussign.className = "statussign"
    let taskname = document.createElement("span")
    taskname.className = "taskname"
    let deletebtn = document.createElement("button")
    deletebtn.className = "delete"
    let xsign = document.createElement("div")
    xsign.className = "X"
    let value = item
    taskname.innerText = value
    statusdiv.appendChild(statussign)
    deletebtn.appendChild(xsign)
    li.appendChild(statusdiv)
    li.appendChild(taskname)
    li.appendChild(deletebtn)
    console.log(statusdiv)
    console.log(li)
    container.appendChild(li)
    deletebtn.addEventListener('click', function() {
        let parent = deletebtn.parentElement;
        parent.style.width = "0";
        let ur_data_noob2 = JSON.parse(localStorage.getItem("storedNotes"))
        setTimeout(() => {
            parent.remove();
            let new_data = ur_data_noob2.filter(item => item != taskname.innerText)
            console.log(new_data)
            localStorage.setItem("storedNotes",JSON.stringify(new_data))
        }, 500);
    });

    statusColor(statusdiv)
    addInput.value = ""
    })
}
function addNote(){
    let li = document.createElement("LI")
    li.className = "task"
    let statusdiv = document.createElement("div")
    statusdiv.className = "statusdiv"
    let statussign = document.createElement("div")
    statussign.className = "statussign"
    let taskname = document.createElement("span")
    taskname.className = "taskname"
    let deletebtn = document.createElement("button")
    deletebtn.className = "delete"
    let xsign = document.createElement("div")
    xsign.className = "X"
    let value = addInput.value
    taskname.innerText = value
    statusdiv.appendChild(statussign)
    deletebtn.appendChild(xsign)
    li.appendChild(statusdiv)
    li.appendChild(taskname)
    li.appendChild(deletebtn)
    console.log(statusdiv)
    console.log(li)
    container.appendChild(li)
    saveNoteToLocalStorage()
    deletebtn.addEventListener('click', function() {
        let parent = deletebtn.parentElement;
        parent.style.width = "0";
        let ur_data_noob2 = JSON.parse(localStorage.getItem("storedNotes"))
        setTimeout(() => {
            parent.remove();
            let new_data = ur_data_noob2.filter(item => item != taskname.innerText)
            console.log(new_data)
            localStorage.setItem("storedNotes",JSON.stringify(new_data))
        }, 500);
    });

    statusColor(statusdiv)
    addInput.value = ""
}
function removeButton(){
let deleteButtons = document.getElementsByClassName("delete")
let deleteButtonsArray = Array.from(deleteButtons)
deleteButtonsArray.forEach(button => {
    button.addEventListener('click', function(){
        let parent = button.parentElement
        parent.style.width = "0"
        setTimeout(() => {
            parent.remove()
        },500)
        
    })
})
}
addForm.addEventListener('submit', function(e){
    e.preventDefault()
    hideNoteSection()
    addNote()
    addInput.value = ""
})

searchForm.addEventListener('keyup', function(e){
    e.preventDefault();
    console.log("hi")
    let searchInput = searchForm.querySelector('input[type="text"]');
    let value = searchInput.value
    taskNames.forEach(function(item){
        let parent = item.parentElement
        console.log(parent)
        if (item.textContent.toLowerCase().includes(value.toLowerCase())) {
            parent.style.display = "flex"
        } else {
            parent.style.display = "none";
        }
    });
});


createSavedNotes()
// removeButton()
statusColor(dishes)
statusColor(conquer)
statusColor(learn)
