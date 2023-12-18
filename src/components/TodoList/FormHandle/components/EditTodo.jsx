import React, { useState } from 'react'

export default function EditTodo({editTask,cancelEdit,task}) {
    console.log(task)

    const [value, setValue] = useState(task.task)
    const handleEditSubmit = ()=> {
      editTask(value, task.id)
      
      setValue("")
    }

  return (
    <>
        <div className='todo__box'>
            <div className='edit__input'>
            <input type="text" onChange={(e)=> setValue(e.target.value)} value={value}/>
            </div>
            <div className='action__btns'>
                <button className='save' onClick={handleEditSubmit}>SAVE</button>
                <button className='cancel' onClick={()=> cancelEdit(task.id)}>CANCEL</button>
            </div>
        </div>
    </>
  )
}
