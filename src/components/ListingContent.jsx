import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';


const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


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
    <motion.div className="content__wrapper"
      variants={container}
      initial='hidden'
      animate="visible"
    >
      <AnimatePresence></AnimatePresence>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : <motion.p className=' empty-list' variants={child} >No Todo Found In Bucket</motion.p> }
    </motion.div>
  );
} 

export default ListingContent