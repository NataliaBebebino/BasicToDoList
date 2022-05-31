inputTarea = document.querySelector(".input");
botonAgregar = document.querySelector(".boton-agregar");
divContainer = document.querySelector(".container");


class Item {
    constructor(tarea) {
        this.crearDiv(tarea);
    }

    crearDiv(tarea) {
        let inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = tarea;

        let div = document.createElement("div");
        div.classList.add("item");

        let botonEditar = document.createElement("button");
        botonEditar.classList.add("boton-editar");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"; 

        let botonRemover = document.createElement("button");
        botonRemover.classList.add("boton-remover");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"; 

        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);

        divContainer.appendChild(div);

        botonEditar.addEventListener("click", function () {
            inputItem.disabled = !inputItem.disabled;

            if (inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            } else {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            }
        })

        botonRemover.addEventListener("click", function () {
            div.remove();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        })
    }
}


function chequearInput() {   
    return inputTarea.value !== "";
}

function addTask() {
    if (chequearInput()) {
        new Item(inputTarea.value);
        inputTarea.value = "";   
    }  
}


botonAgregar.addEventListener("click", function () {
    addTask();
})

inputTarea.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
})

