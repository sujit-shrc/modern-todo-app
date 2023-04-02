import { useState } from 'react';
import '../styles/utilities/TodoModel.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { enIE } from 'date-fns/locale';

const TodoModal = ({ modelOpen, setModelOpen }) => {

  const [title, setTitle] = useState(" ")
  const [status, setStatus] = useState("incomplete")

  const handleSubmit = (e)=> {
    e.preventDefault();
    
  }

  return (
    modelOpen && (
      <div className="wrapper">
        <div className="container">
          <div
            className="closeButton"
            onClick={() => setModelOpen(false)}
            onKeyDown={() => setModelOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className="form"
            onSubmit={(e)=>{handleSubmit(e)}}
          >
            <h1 className="formTitle">Add Task</h1>
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
                Add Task
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
        </div>
      </div>
    )
  );
}

export default TodoModal