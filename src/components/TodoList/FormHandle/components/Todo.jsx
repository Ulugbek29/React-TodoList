import React from 'react'
import EditTodo from './EditTodo'

export default function Todo({todos, setTodo, handleEditTodo}) {
  console.log(todos)


const doneTodo = (id)=> {
  setTodo(todos.map((todo)=>todo.id === id ? {...todo, completed: !todo.completed}: todo))
}

const deleteTodo = (id) => {
    setTodo(todos.filter((todo)=> todo.id !== id))
}

const editTask = (task, id) => {
  setTodo(todos.map((t)=> t.id ===id ? {...t, task, isEdited: !t.isEdited} : t))
}

const cancelEdit = (id)=> {
  setTodo(todos.map((todo)=>(todo.id === id ? {...todo, isEdited: false}: todo)))
}

  return (
    <div className='todo'>
        <div className='todo__actions'>
          <h2>Task</h2>
          <h2>Actions</h2>
        </div>


         { todos.map((todo)=> (
          
             todo.isEdited ? (
                <EditTodo task={todo} editTask={editTask} cancelEdit={cancelEdit} />
             ) : (
            <div className='todo__box' key={todo.id}>
            <div className='text'>
            <p type="text"   className={`${todo.completed ? "line__through" : ""}`} >{todo.task}</p>
            </div>
            <div className='action__btns'>
                <button className='edit' onClick={()=>handleEditTodo(todo.id)}>EDIT</button>
                <button className='done' onClick={()=>doneTodo(todo.id)}>DONE</button>
                <button className='delete' onClick={()=>deleteTodo(todo.id)}>DELETE</button>
            </div>
            </div>
             )
          ))
         }
    </div>
  )
}
