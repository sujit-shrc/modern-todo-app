import React from 'react'
import Button, { SelectButton } from './Button'
import '../styles/utilities/App.scss'

const TodoHeader = () => {
  return (
      <div className='todo-header'>
          <Button variant='primary'>Click Me</Button>
          <SelectButton id="status">
              <option value="all">All</option>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
          </SelectButton>
    </div>
  )
}

export default TodoHeader