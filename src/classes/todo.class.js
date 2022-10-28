
export class Todo {

static fromJson({id,tarea,completado,creado}){

    const tempTodo = new Todo(tarea);
    
    tempTodo.id = id;
    tempTodo.tarea = tarea;
    tempTodo.completado = completado;
    tempTodo.creado = creado;

    return tempTodo;

}


    constructor(tarea){
        this.tarea = tarea,
        this.id = new Date().getTime();//18131263637 representacion actual de la hora,minutos,segundos y milisegundos que han pasado, esto lo vamos a tomar como id
        this.completado = false,
        this.creado = new Date();
    }

    imprimirClase (){
        console.log(`${this.tarea} - ${this.id}`);
    }
}

