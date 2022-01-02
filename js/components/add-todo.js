/*
    Clase con la lógica para añadir una tarea
    cuando se presiona el botón agregar.
*/
export default class AddToDo {
    constructor () {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if ( this.title.value === '' || this.description.value === '') {
                // alert.classList.remove('d-none');
                // alert.innerText = 'Titulo y descripcion requeridos';
                // return;
                console.error('incorrecto');
            } else {
                callback(this.title.value, this.description.value);
            }
        }
    }
}