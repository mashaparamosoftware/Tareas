import {Todo} from '../classes/todo.class';
import { todoList} from '../index';
import '../css/componentes.css';    
// import webpacklogo from '../assets/img/webpack-logo.png';


// export const saludar = ( nombre = 'sin nombre' ) => {
//     console.log('Creando etiqueta h1');

//     const h1 = document.createElement('h1');
//     h1.innerText = `Hola ${ nombre }`;

//     document.body.append( h1 );

    
//     // Img
//     // const img = document.createElement('img');
//     // img.src = webpacklogo;
//     // document.body.append( img );
// }

//referencias en el HTML
const divTodoList = document.querySelector('.todo-list');// selecciona al padre de los demas elementos
const txtInput 	  = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
console.log(ulFiltros);

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : '' }>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;




    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

//eventos
txtInput.addEventListener('keyup', (event) => {

if(event.keyCode === 13 && txtInput.value.length > 0 ) {

	const nuevoTodo = new Todo(txtInput.value);
	todoList.nuevoTodo(nuevoTodo);

	crearTodoHtml(nuevoTodo); 
	txtInput.value = '';


}





});// el keyup es cuando la persona sulta la tecla

divTodoList.addEventListener('click', (event) =>{

	const nombreElemento = event.target.localName; //button, label y input
	const todoElemento = event.target.parentElement.parentElement;
	const todoId = todoElemento.getAttribute('data-id');

	if(nombreElemento.includes('input')) {
		todoList.marcarCompletado(todoId)
		todoElemento.classList.toggle('completed');// toggle para cambiar, quitar o agregar una clase
		

	}else if(nombreElemento.includes('button')){ // eliminamos la tarea
		todoList.eliminarTodo(todoId);
		divTodoList.removeChild(todoElemento);
	}
});

btnBorrar.addEventListener('click', ()=> {
	todoList.eliminarCompletado();
	for(let i = divTodoList.children.length-1; i>= 0; i--){
		
		const elemento = divTodoList.children[i];
		console.log(elemento)

		if(elemento.classList.contains('completed')){
			divTodoList.removeChild(elemento);
		}

	}
	console.log(todoList);
});

ulFiltros.addEventListener('click', (event)=>{
	const filtro = event.target.text;
	if(!filtro) {return;};

	anchorFiltros.forEach(element => element.classList.remove('selected'));
	event.target.classList.add('selected')

	for(const elemento of divTodoList.children) {

		elemento.classList.remove('hidden');
		const completado = elemento.classList.contains('completed');

		switch(filtro) {
			case 'Pendientes':
			 if(completado) {
				elemento.classList.add('hidden');
			 }

			 break;

			 case 'Completados':
			 if(!completado) {
				elemento.classList.add('hidden');
			 }

			 break;

			
		}


	}

})