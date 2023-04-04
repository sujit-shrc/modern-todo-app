import { useEffect, useState } from 'react';
import '../styles/utilities/TodoModel.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../slices/todoSlice';
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 20,
      stiffness: 400,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};


const TodoModal = ({ type, modelOpen, setModelOpen, todo }) => {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("incomplete")
  const dispatch = useDispatch();

  useEffect(() => {
    if (type == 'update' && todo) {
      setTitle(todo.title)
      setStatus(todo.status)
    } else {
      setTitle('')
      setStatus('incomplete')
    }
  }, [type, todo, modelOpen])

  const handleSubmit = (e)=> {
    e.preventDefault();
    if (title === '') {
      toast.error("Title is Required")
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task Added Successfully");
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo(
              { ...todo, title, status }
            )
          )
          toast.success("Todo Updated Successfully")
        }
        else {
          toast.error("No Changes Detected")
          return;
        }
      }
      setModelOpen(false);
    }
  }

  return (
    <AnimatePresence>
      {modelOpen && (
        <motion.div
          className="wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="closeButton"
              onClick={() => setModelOpen(false)}
              onKeyDown={() => setModelOpen(false)}
              tabIndex={0}
              role="button"
              // animation
              initial={{ top: 30, opacity: 0 }}
              animate={{ top: -10, opacity: 1, }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>
            <form
              className="form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <h1 className="formTitle">
                {type === "update" ? "Update" : "Add"} Task
              </h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="status">
                Title
                <select
                  name="status-type"
                  id="status"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="in-progress">In-Progress</option>
                  <option value="complete">Complete</option>
                </select>
              </label>

              <div className="buttonContainer">
                <Button type="submit" variant="primary">
                  {type === "update" ? "Update" : "Add"} Task
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setModelOpen(false);
                  }}
                  onKeyDown={() => {
                    setModelOpen(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal