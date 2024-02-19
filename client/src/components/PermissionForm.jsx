import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import PermissionRole from './PermissionRole';
import mapThemeResources from '../data/solutionsData';
import PermissionRoleList from './PermissionRoleList';


const PermissionForm = ({ game_theme}) => {

    // const [permissionRole, setPermissionRole] = useState();
    const [theme, setTheme] = useState(game_theme);
    // const [resource, setResource] = useState(mapThemeResources.get(theme).resource);


// useEffect(() => {
//     console.log("game_resource  is now: ", game_resource);
// }, [game_resource]);

    // const listItems = [];
    // for (const [key, value] of permissionRole.permissionRoles) {
    //     listItems.push(
    //         <PermissionRole user_role={value.role} can_read={value.can_read} can_write={value.can_write} can_delete={value.can_delete} can_share={value.can_share}/>
    //     );
    // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    // addTodo({ title: input, priority: 'Low', create_date: new Date(), status: 'Not Started', owner: 'john.doe@atko.email'});
    // setInput('');
  };


  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className='grid grid-rows-2 justify-between gap-x-6 gap-y-6 content-center'>
            Selected theme:<div className='pl-4 text-lg font-bold'> {theme}</div>

            {/* Resource:<div className='pl-4 text-lg font-bold'> {resource}</div> */}

            <div className='grid grid-cols-4 justify-between gap-x-6 gap-y-6'>
                <PermissionRoleList theme={theme} />
            </div>
            <div>
                <Button className='bg-blue-500' type="submit">Save</Button>
            </div>
      </div>
    </form>
  );
};

export default PermissionForm;
