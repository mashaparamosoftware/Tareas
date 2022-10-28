import './styles.css';
import { Todo, TodoList } from './classes/main';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo) );

const newTodo = new Todo('Aprender js ');
console.log('Todo', todoList.todos);

// const tarea = new Todo('Aprender javascript!!');
// todoList.nuevoTodo(tarea);


// console.log(todoList);
// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(()=>{

//     localStorage.removeItem('mi-key');

// }, 1500);

