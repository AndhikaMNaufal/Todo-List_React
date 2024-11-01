import React from 'react';
import tick from 'C:/Users/LENOVO/VSCode/Todo-App/src/assets/tick.png';;
import not_tick from 'C:/Users/LENOVO/VSCode/Todo-App/src/assets/not_tick.png';;
import delete_icon from 'C:/Users/LENOVO/VSCode/Todo-App/src/assets/delete.png';;

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center gap-3 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100 hover:bg-gray-200 transform hover:scale-105'>
      <div onClick={() => toggle(id)} className='flex items-center flex-1 cursor-pointer'>
        <img src={isComplete ? tick : not_tick} alt="status icon" className='w-6 h-6 transition-all duration-150' />
        <p
          className={`ml-4 text-lg font-medium ${
            isComplete ? 'line-through text-gray-400' : 'text-gray-700'
          } transition-all duration-200`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="delete icon"
        className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-150'
      />
    </div>
  );
};

export default TodoItems;
