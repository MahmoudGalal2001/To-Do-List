let taskInput = document.getElementById("Do");
let tasks= document.getElementById("tasks");
let addbtn = document.getElementById("btnAdd");

let allData ;
let mood ="add"
let globalId;

if(localStorage.length!=0){
    allData= JSON.parse(localStorage.tasks)
}else{
    allData = [];
}
    




function addTasks(){
    if (mood=="add"){
        allData.push(taskInput.value)
    }else{
        allData[globalId]=taskInput.value;
        mood="add"
        addbtn.value="ADD"
    }
    
    window.localStorage.setItem("tasks",JSON.stringify(allData))
    showTasks()
    taskInput.value=""
}

addbtn.addEventListener("click",addTasks)

function showTasks(){
    let Task =``;
    if(allData.length!=0){
        for(let i=0;i<allData.length;i++){
            Task += `
            <div class="row my-2">
              <input type="text" class="col-9" readonly value="${allData[i]}" >
              <div class="col-3 text-center " >
               <button onclick="Edit(${i})" class="btn edit">Edit</button>
               <button onclick="Delete(${i})" class="btn delete">Detete</button>
              </div>
            </div>
           `
        }
    }

    tasks.innerHTML = Task;
  
    
}
showTasks()

function Delete(i){

    allData.splice(i,1);
    localStorage.tasks=JSON.stringify(allData)
    showTasks()
}

function Edit(i){
    mood="update"
    globalId = i
    taskInput.value=allData[i]
    addbtn.value="update"

}
