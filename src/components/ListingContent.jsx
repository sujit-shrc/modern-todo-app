import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const ListingContent = () => {
  const todoList = useSelector(state=>state.todo.todoList);
  console.log(todoList)
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((x, y) => new Date(y.time) - new Date(x.time));
  return (
    <div className='content__wrapper'>
      {
        sortedTodoList && sortedTodoList.length > 0
          ? sortedTodoList.map((todo)=> <TodoItem key={todo.id} todo={todo} /> )
          : "Todo List is Empty"
      }
    </div>
  )
} 

export default ListingContent