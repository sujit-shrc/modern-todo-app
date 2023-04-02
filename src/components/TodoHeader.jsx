import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import '../styles/utilities/App.scss'
import TodoModel from './TodoModel'

const TodoHeader = () => {
  const [modelOpen, setModelOpen] = useState(false)
  return (
      <div className='todo-header'>
      <Button variant='primary'
        onClick={() => { setModelOpen(true) }}
      >
        Add Task
      </Button>
      
      <SelectButton id="status">
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </SelectButton>
        <TodoModel type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
      
    </div>
  )
}

export default TodoHeader