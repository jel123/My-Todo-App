import React from 'react'
import gradient from 'random-gradient';

function Tasks({todos, onFinish, onEdit, saveItem, editItem, deleteItem}) {
    const bgGradient = (task) =>  ({background: gradient(task), type: 'horizontal'}); 

    return (
        <div className="tasks-wrapper">
        {todos.map((todo, index) => (
           
          <div key={todo.task}  className="tasks-container">
          {todo.editMode ? 
          (<input type="text" style={bgGradient(todo.task)}
          onChange={(e) => onEdit(index, e)}
          />)
          :(<p style={bgGradient(todo.task)} className={todo.isFinished ? 'finished' : ''}>
              <input  
              type="checkbox" 
              onClick={(e) => onFinish(index,e)}
              checked={todo.isFinished ? true: false}
              />
              {todo.task}
              </p>)}
          {todo.editMode ? 
          (<button type="button" style={bgGradient(todo.task)} onClick={()=> saveItem(index)}> Save </button>)
            : (<button style={bgGradient(todo.task)} type="button" onClick={()=> editItem(index)}> Edit </button>)
          }
          <button style={bgGradient(todo.task)} type="button" onClick={(e) => deleteItem(index, e)}> Delete </button>
          </div>
        ))}
        </div>
    )
}

export default Tasks
