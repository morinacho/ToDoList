

document.querySelector("#add-task").addEventListener("click",
    function(event){
        event.preventDefault(); 
        const task = document.querySelector("#task-name");

        if(task.value != ""){ 
            creatTask(task.value)
            task.value = "";
            let taskStorage = window.localStorage;taskStorage.removeItem('idTask'); 
            takse = taskStorage.getItem('idTask');
             
            //console.log(getPosition());
        }
    }
);
// Crear Tareas
function creatTask(task, geolocation){
    let container = document.querySelector(".container");
    let newTask = ` <section class="item">
                        <input type="checkbox">
                        <span class="completed">${task}</span>
                        <a href="javascript:void(0)" class="material-icons" onclick="deleteTask(event);">delete</a>
                        <a href="javascript:void(0)" class="material-icons" onclick="alert(event);">share</a>
                        <a href="javascript:void(0)" class="material-icons" onclick="copyText(event);">content_paste</a>
                    </section> `;
    
    container.insertAdjacentHTML("beforeend", newTask);
}

// Eliminar una tarea
function deleteTask(event){
    let container = document.querySelector(".container");
    container.removeChild(event.target.parentElement);
} 

// Copiar en cache el contenido de una tarea en cache
function copyText(event){
    var taskText = event.target.parentElement.children[1].textContent
    navigator.clipboard.writeText(taskText);
}

// Poner en full screen
function fullScreen(event){
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        event.target.textContent = "fullscreen_exit";
    } else if (document.exitFullscreen) {
        document.exitFullscreen(); 
        event.target.textContent = "fullscreen"; 
    }
}

// Local storage
function loadStorage(){
    let taskStorage = window.localStorage,
        amountTasks = taskStorage.getItem('cantTask');
    if(amountTasks == null){
        taskStorage.setItem('cantTask', 0);
    }
    else{
        for(i = 0; i < amountTasks; i++){

        }
    } 
}

// Geolocalizacion
function getPosition(){
    if(navigator.geolocation){
        var result = "Geolocation is not supported by your browser";
        navigator.geolocation.getCurrentPosition(
            function(position){
                result = "lat:" + position.coords.latitude + " - long:"+ position.coords.longitude;
                console.log(result);
            }, 
            function(){
                result =  "Unable to retrieve your location";
            }
        );
    } 
    return result;
}