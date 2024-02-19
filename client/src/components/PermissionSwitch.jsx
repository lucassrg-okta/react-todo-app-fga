import { useState } from 'react';
import {  ToggleSwitch  } from 'flowbite-react';

const PermissionSwitch = ({ default_permission }) => {

    const [permission, setPermission] = useState(default_permission);
    
    const onChangePermission = (e, key) => {        
        const new_permission = {[key]:e};
        setPermission(new_permission);
    }

    return (
        <>            
        {Object.entries(permission).map(([key, value]) => (
            <ToggleSwitch key={key} checked={value} label={key} onChange={(e) => onChangePermission(e, key)} color='pink' />
        )
        )}                
        </>
    )
}

export default PermissionSwitch;