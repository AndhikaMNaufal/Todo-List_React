import React, { useEffect, useRef, useState } from 'react';
import todo_icon from 'C:/Users/LENOVO/VSCode/Todo-App/src/assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => prvTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => 
      prevTodos.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className='bg-gradient-to-br from-purple-900 to-blue-500 shadow-2xl rounded-lg w-11/12 max-w-md p-7 flex flex-col min-h-[550px] transition-transform duration-500 transform hover:scale-105'>
      
{/* ------ title --------- */}
    <div className='flex items-center gap-3 mt-4 mb-5'>
      <img className='w-10 h-10' src={todo_icon} alt="To-Do Icon" />
      <h1 className='text-4xl font-bold text-gray-950'>To-Do List</h1>
    </div>
  
{/* ------ input box --------- */}
<   div className='flex items-center mb-7 bg-gray-100 rounded-full shadow-inner px-4 py-2'>
      <input
        ref={inputRef}
        className='flex-1 h-12 pl-2 bg-transparent border-0 outline-none placeholder-gray-500 text-gray-800'
        type="text"
        placeholder='Add your task'
      />
      <button
        onClick={add}
        className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-blue-400 hover:to-indigo-500 transition-all ml-2'
      >
        ADD 
      </button>
    </div>

  
{/* ------ todo list --------- */}
    <div className='space-y-3'>
      {todoList.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          id={item.id}
          isComplete={item.isComplete}
          deleteTodo={deleteTodo}
          toggle={toggle}
        />
      ))}
    </div>
  </div>
  );  
};

export default Todo;
