document.querySelector("#add-task").addEventListener("click",
    function(event){
        event.preventDefault(); 
        const task = document.querySelector("#task-name");

        if(task.value != ""){
            let newTask = `<section class="item">
                            <input type="checkbox">
                            <span class="completed">${task.value}</span>
                            <a href="javascript:void(0)" class="material-icons" onclick="deleteTask(event);">delete</a>
                        </section> `;
            let container = document.querySelector(".container");
            container.insertAdjacentHTML("beforeend", newTask);
            task.value = "";
        }
    }
);

function deleteTask(event){
    let container = document.querySelector(".container");
    container.removeChild(event.srcElement.parentNode);
} 