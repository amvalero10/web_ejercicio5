import React from 'react';

let condition ='';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

  if (todo.done) {
    condition = <p onClick={() => handleToggle(todo)}>
                  <del>
                    {index + 1}. {todo.desc}
                  </del>
  </p>
  } else {
    condition = <p onClick={() => handleToggle(todo)}>
                  {index + 1}. {todo.desc}
  </p>
  }


  return (
    <li key={todo.id} className='list-group-item'>

      {condition}
      
      <button
        className='btn btn-danger' 
        onClick={() => handleDelete(todo) }
      >
        Borrar
      </button>


    </li>
  );
};
