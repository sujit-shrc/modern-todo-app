import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const ListingContent = () => {
  const todoList = useSelector(state => state.todo.todoList);
  const filterStatus = useSelector(state => state.todo.filterStatus)
  
  const sortedTodoList = [...todoList];

  sortedTodoList.sort((x, y) => new Date(y.time) - new Date(x.time));

  const filteredTodoList = sortedTodoList.filter(item => {
    if (filterStatus == 'all') {
      return true;
    }
    return item.status === filterStatus;
  })

  return (
    <div className="content__wrapper">
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : <p className='empty-list'>Container is Empty </p> }
    </div>
  );
} 

export default ListingContent