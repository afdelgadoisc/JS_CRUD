/*
    Clase con la lógica que actualiza el front
    y envía la información al modelo para actualizar el back
*/
import AddToDo from "./components/add-todo.js";

export default class View {
    constructor () {
        this.model = null;
        this.table = document.getElementById('table');
        this.addToDoForm = new AddToDo();
        // función anonima (par1,par2) => logica de la función
        this.addToDoForm.onClick((title,description) => this.addToDo(title,description));
    }

    setModel (model) {
        this.model = model;
    }

    /*
        Metodo encargado de enviar la información de una nueva
        tarea al modelo y crea la nueva linea en el HTML
    */
    addToDo( title, description) {
        const toDo = this.model.addToDo(title,description);
        this.createRow(toDo);
    }

    /*
        añade en el HTML una nueva fila en la tabla
        con la info de titulo, descripción, completado y
        las opciones de editar y borrar 
    */
    createRow(toDo) {
        const row = table.insertRow();
        row.setAttribute('id', toDo.id);
        row.innerHTML = `
          <td>${toDo.title}</td>
          <td>${toDo.description}</td>
          <td class="text-center">
                <input type="checkbox">
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
          </td>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        row.children[3].appendChild(removeBtn);
        removeBtn.onclick = () => this.removeToDo(toDo.id);
    }
    /*
        Con el id de la tarea se elimina del modelo
        y del HTML
    */
    removeToDo(id) {
        this.model.removeToDo(id);
        document.getElementById(id).remove();
    }

    

}