import React, { useState } from 'react';
import { Button, Dropdown } from 'flowbite-react';

const StatusButton = ({ todo, updateStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(todo.status);

  const handleClick = (newStatus) => {
    setStatus(newStatus);
    updateStatus(todo.id, { ...todo, status: newStatus });
    setIsEditing(false);
  };

  const NOT_STARTED_STYLE = 'bg-gray-400 w-32';
  const IN_PROGRESS_STYLE = 'bg-gray-600 w-32';
  const FINISHED_STYLE = 'bg-gray-800 w-32';


  const getButtonColor = () => {
    switch(status) {
        case 'Not Started': 
            return NOT_STARTED_STYLE;
        case 'In Progress':
            return IN_PROGRESS_STYLE;
        case 'Finished':
            return FINISHED_STYLE;
        default:
            return 'bg-gray-400';
    }
  }

  return (
    <div className="flex justify-between items-center p-2 border-b">
      {isEditing ? (
        <div className='flex flex-row gap-2'>
          <Button className={NOT_STARTED_STYLE} onClick={() => handleClick('Not Started')}>Not Started</Button>
          <Button className={IN_PROGRESS_STYLE} onClick={() => handleClick('In Progress')}>In Progress</Button>
          <Button className={FINISHED_STYLE}  onClick={() => handleClick('Finished')}>Finished</Button>
        </div>
      ) : (
        <div className='flex flex-row gap-2'>
          <Button className={getButtonColor()} onClick={() => setIsEditing(true)}>{status}</Button>          
        </div>
      )}
    </div>
  );
};

export default StatusButton;