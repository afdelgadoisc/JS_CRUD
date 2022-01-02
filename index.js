/* Se usa el DOMContentLoaded para asegurarnos que 
   el HTML ha cargado por completo.
*/
document.addEventListener('DOMContentLoaded', function() {

    // Variables que traen info del HTML

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let id = 1;

    /*
        Función que recibe un id y elimina el elemento
        al que se hace referencia de la lista de tareas.
    */
    function removeToDo (id) {
        document.getElementById(id).remove();
    }
    
    /*
        Función que agrega un nuevo elemento a la lista
    */

    function addToDo() {

        // Si no se ingresan datos salta un error
        // d-none es la clase que oculta la alerta

        if ( title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'Titulo y descripcion requeridos';
            return;
        }

        // creamos una fila en la tabla y le asignamos un id

        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++);
        row.innerHTML = `
          <td>${title.value}</td>
          <td>${description.value}</td>
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
        removeBtn.onclick = function () {
            removeToDo(row.getAttribute('id'));
        }
    }

    btn.onclick = addToDo;

});




