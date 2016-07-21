(function() {
  //variables
  var tareaInput    = document.getElementById('tareaInput'),
      btnNuevaTarea = document.getElementById('btn-agregar'),
      lista         = document.getElementById('lista');
  //Utilitarios
  // var tareas            = lista.children;
  // var longitudListaTarea= lista.children.length;
  //Funciones
  var agregarTarea=function() {
    var tarea       = tareaInput.value,
        nuevaTarea  = document.createElement('li'),
        enlace      = document.createElement('a'),
        contenido   = document.createTextNode(tarea);
        if (tarea==="") {
          tareaInput.setAttribute('placeholder',"Agrega una tarea válida");
          tareaInput.className="error";
          return false;
        }
        //Agregar Tarea
        enlace.appendChild(contenido);
        enlace.setAttribute('href',"#");
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);
        //Limpiar Input
        tareaInput.value="";

        for (var i = 0; i < lista.children.length; i++) {
          lista.children[i].addEventListener('click',eliminarTarea);
        }

  };
  var comprobarInput=function() {
    tareaInput.className="";
    tareaInput.setAttribute('placeholder',"Agrega Tu Tarea");
  };
  var eliminarTarea =function() {
    var result=confirm('Quieres ELIMINAR esta tarea?');
    if (result) {
      this.parentNode.removeChild(this);
      console.log(this);
    }else{
      return false;
    }
  };
  //Inicializaciones
  tareaInput.value="";
  //eventos
  //nueva tarea
  btnNuevaTarea.addEventListener('click',agregarTarea);
  //comprobar input
  tareaInput.addEventListener('click',comprobarInput);

  for (var i = 0; i < lista.children.length; i++) {
    lista.children[i].addEventListener('click',eliminarTarea);
  }
}());
