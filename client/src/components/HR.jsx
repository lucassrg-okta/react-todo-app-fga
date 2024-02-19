import React, { useState } from 'react';
import { Button, Dropdown } from 'flowbite-react';
import PriorityButton from './PriorityButton';
import StatusButton from './StatusButton';
import { HiOutlineTrash } from 'react-icons/hi';

const HR = ({ todo, deleteTodo, updatePriority, updateStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [priority, setPriority] = useState(todo.priority);

  return (
    <div className="flex justify-between items-center p-2 border-b" key={todo.id}>
      <span className={`w-96 font-bold text-slate-500 hover:text-blue-600 ${todo.status === 'Finished' ? 'line-through':''}`}>{todo.title}</span>            
      <PriorityButton todo={todo} updatePriority={updatePriority}></PriorityButton>
      <StatusButton todo={todo} updateStatus={updateStatus}></StatusButton>  

      <div className='flex flex-row gap-2'>
      <Button color="failure" onClick={() => deleteTodo(todo.id)}>Delete <HiOutlineTrash className="mr-2 h-5 w-5"/></Button>
      </div>
    </div>
  );
};

export default HR;