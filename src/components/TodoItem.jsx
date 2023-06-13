import { format } from 'date-fns'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { MdDelete ,MdEdit } from 'react-icons/md'
import   '../styles/utilities/TodoItem.scss'
import getClasses from '../utils/getClasses'
import { useDispatch } from 'react-redux'
import {deleteTodo} from '../slices/todoSlice'
import {updateTodo} from '../slices/todoSlice'
import TodoModal from './TodoModel'
import CheckButton from './CheckButton'
import { motion } from 'framer-motion'


const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [updateModelOpen, setUpdateModelOpen] = useState(false)
  const [checked, setChecked] = useState(false)
    
    const handleUpdate = () => {
        setUpdateModelOpen(true)
        console.log("Editing")
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
        toast.success("Todo Deleted Succefully")

    }
  
  const handleCheck = () => {
    setChecked(!checked)
    dispatch(updateTodo({
      ...todo,
      status: checked ? 'incomplete' : 'complete'
      }))
    }
  return (
    <>
      <motion.div className="item" variants={child} >
        <div className="todoDetails">
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className="texts">
            <p
              className={getClasses([
                "todoText",
                todo.status === "complete" && ["todoText--completed"],
              ])}
            >
              {todo.title}
            </p>
            <p className="time">
              {todo.time}
            </p>
          </div>
        </div>
        <div className="todoActions">
          <div
            className="icon"
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
          <div
            className="icon"
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
        </div>
      </motion.div>

      <TodoModal
        type="update"
        todo = {todo}
        modelOpen={updateModelOpen}
        setModelOpen={setUpdateModelOpen}
      />
    </>
  );
}

export default TodoItem