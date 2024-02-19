import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { HiOutlineArrowUp, HiOutlineArrowDown, HiOutlineArrowRight } from 'react-icons/hi';

const PriorityButton = ({ todo, updatePriority }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [priority, setPriority] = useState(todo.priority);

  const handleClick = (newPriority) => {
    setPriority(newPriority);
    updatePriority(todo.id, { ...todo, priority: newPriority });
    setIsEditing(false);
  };

  const LOW_STYLE = 'bg-green-500 w-24';
  const MEDIUM_STYLE = 'bg-yellow-300 w-24';
  const HIGH_STYLE = 'bg-red-500 w-24';

  const getButtonColor = () => {
    switch(priority) {
        case 'Low': 
            return LOW_STYLE;
        case 'Medium':
            return MEDIUM_STYLE;
        case 'High':
            return HIGH_STYLE;
        default:
            return 'bg-gray-500 w-24';
    }
  }

  const getButtonIcon = () => {
    switch(priority) {
        case 'Low': 
            return <HiOutlineArrowDown className="mr-2 h-5 w-5"/>;
        case 'Medium':
            return <HiOutlineArrowRight className="mr-2 h-5 w-5"/>;
        case 'High':
            return <HiOutlineArrowUp className="mr-2 h-5 w-5"/>;
        default:
            return '';
    }
  }

  return (
    <div className="flex justify-between items-center p-2 border-b">
      {isEditing ? (
        <div className='flex flex-row gap-2'>
          <Button className={LOW_STYLE} onClick={() => handleClick('Low')}>Low <HiOutlineArrowDown className="mr-2 h-5 w-5"/></Button>
          <Button className={MEDIUM_STYLE} onClick={() => handleClick('Medium')}>Medium <HiOutlineArrowRight className="mr-2 h-5 w-5"/></Button>
          <Button className={HIGH_STYLE}  onClick={() => handleClick('High')}>High <HiOutlineArrowUp className="mr-2 h-5 w-5"/></Button>
        </div>
      ) : (
        <div className='flex flex-row gap-2 '>
          <Button className={getButtonColor()} onClick={() => setIsEditing(true)}>{priority} {getButtonIcon()} </Button>          
        </div>
      )}
    </div>
  );
};

export default PriorityButton;