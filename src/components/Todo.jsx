import React from 'react'
import{AiFillEdit} from 'react-icons/ai'
// import{BsFillTrashEdit} from 'react-icons/bs'
import { FaTrash } from "react-icons/fa";


const Todo = ( {task,deleteTodo,editTodo} ) => {
  console.log("todo",task);
  return (
    <div className='flex justify-between items-center  bg-gray-900 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
      <p className='font-primary'>{task.task}</p>
      <div className='flex items-center gap-x-4' >
        <AiFillEdit className ='text-xl ' onClick={()=>editTodo(task.id)} />
        <FaTrash className ='text-xl ' onClick={()=>deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default Todo