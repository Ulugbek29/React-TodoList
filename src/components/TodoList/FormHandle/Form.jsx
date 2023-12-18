import React, { useState } from 'react'
import Todo from './components/Todo'
import "./style.css"

export default function Form() {

  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])

  const handleSubmit = (e) => {
    const inputValue = input.trim()
    e.preventDefault()
    if(!inputValue) {
      setInput("")
      return
    }
    setTodo([...todo, {id: todo.length, task: inputValue, completed: false, isEdited: false}])
    setInput("")
  }


  
  const handleEditTodo = (id)=> {
    setTodo(todo.map((t)=> t.id === id ? {...t, isEdited: !t.isEdited} : t))
}

  return (
    <div className='todoForm'>
        <form>
          <div className='input__box'>
            <input type="text" onChange={(e)=> setInput(e.target.value)} value={input} placeholder="Add To-Do" className='todo__input'/>
          </div>
          
            <button onClick={handleSubmit} className={`add__btn ${input.length > 0 ? "add__btn": "disabled__add__btn"}`}>ADD</button>
        </form>
        
        <div className='todo__list'> 
        {todo.length > 0 ? (
        <Todo todos={todo} setTodo={setTodo} handleEditTodo={handleEditTodo}/>

        ) : (<h1>Nothing to do!</h1>)} 
        </div>
    </div>
  )
}
