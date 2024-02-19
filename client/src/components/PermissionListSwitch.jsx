import { useEffect, useState } from 'react';
import PermissionSwitch from './PermissionSwitch';

const PermissionListSwitch = ({ default_permissions }) => {

    const [permissions, setPermissions] = useState(default_permissions);

    useEffect(() => {
    }, [permissions]);
    
    const onChangePermission = (e, permission) => {        
        setPermissions([...permissions, permission]);
    }

    return (
        <>
            <div className="flow-root">
                <ul className="">
                {permissions.map((permission, index) => (                                                            
                        <li className="py-3 sm:py-4">                 
                            <PermissionSwitch key={index} default_permission={permission} onChange={(e) => onChangePermission(e, permission)} color='pink' />
                        </li>
                ))}                            
                </ul>
            </div>
        </>
    )
}

export default PermissionListSwitch;