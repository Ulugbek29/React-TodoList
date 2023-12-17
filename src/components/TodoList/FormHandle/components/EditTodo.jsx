import React, { useState } from 'react'

export default function EditTodo({editTask,cancelEdit,task}) {
    console.log(task)

    const [value, setValue] = useState(task.task)
    const handleSubmit = ()=> {
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
                <button className='save' onClick={handleSubmit}>SAVE</button>
                <button className='cancel' onClick={()=> cancelEdit()}>CANCEL</button>
            </div>
        </div>
    </>
  )
}
