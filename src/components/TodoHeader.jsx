import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import '../styles/utilities/App.scss'
import TodoModel from './TodoModel'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilterStatus } from '../slices/todoSlice'

const TodoHeader = () => {
  const [modelOpen, setModelOpen] = useState(false)
  const filterStatus= useSelector((state)=> state.todo.filterStatus)
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  }

  return (
      <div className='todo-header'>
      <Button variant='primary'
        onClick={() => { setModelOpen(true) }}
      >
        Add Task
      </Button>
      
      <SelectButton id="status" value={filterStatus} onChange = {updateFilter} > 
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="in-progress">In-Progress</option>
          <option value="complete">Complete</option>
        </SelectButton>
        <TodoModel type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
      
    </div>
  )
}

export default TodoHeader