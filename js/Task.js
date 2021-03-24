var locate = "Geolocation is not supported by your browser";

class Task{
    constructor(id, name, status){
        this.id     = id;
        this.name   = name;
        this.status = status;
        this.geo    = this.location;
    }
    
    create(){
        let newTask = ` <section class="item">
                            <input type="checkbox">
                            <span class="completed">${this.name}</span>
                            <a href="javascript:void(0)" class="material-icons" onclick="deleteTask(event);">delete</a>
                            <a href="javascript:void(0)" class="material-icons" onclick="alert(event);">share</a>
                            <a href="javascript:void(0)" class="material-icons" onclick="copyText(event);">content_paste</a>
                        </section> `;
        
        container.insertAdjacentHTML("beforeend", newTask);
    }

    get location() {
        if(navigator.geolocation){    
            function error(){ locate = "Unable to retrieve your location";}
            function success(position){ locate = "lat:" + position.coords.latitude + " - long:"+ position.coords.longitude;}
            navigator.geolocation.getCurrentPosition(success, error);
        } 
        return locate;
        
    }

    setStatus(){

    }

    setName(){

    }

    delete(){
         
    }

}