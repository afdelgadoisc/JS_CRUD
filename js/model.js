/*
    Clase con la lógica que actualiza el back
    y notifica al front
*/

export default class Model {
    constructor() {
        this.view = null;
        this.toDos = [];
        this.currentId = 1;
    }

    setView(view) {
        this.view = view;
    }

    getToDos() {
        return this.toDos;
    }

    /*
        Añade un nuevo elemento dentro de la lista de 
        tareas definida como atributo
    */

    addToDo(title, description) {
        const toDo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }
        this.toDos.push(toDo);
        console.log(this.toDos)
        // retorna un clon
        //return Object.assign({},toDo);
        return {...toDo};
    }

    /*
        elimina un nuevo elemento dentro de la lista de 
        tareas mediante el id.
    */

    removeToDo(id) {
        const index  = this.toDos.findIndex((toDo) => toDo.id === id);
        this.toDos.splice(index,1);
    }
}