/*
    Aquí se inicializa todo lo necesario para el funcionamiento 
    general, (se inicia view y model)
*/

import Model from './model.js'
import View from './view.js'

/* Se usa el DOMContentLoaded para asegurarnos que 
   el HTML ha cargado por completo.
*/
document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);
});