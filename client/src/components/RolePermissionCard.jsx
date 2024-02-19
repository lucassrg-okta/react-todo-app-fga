import { useEffect, useState } from 'react';
import {  Card } from 'flowbite-react';
import PermissionListSwitch from './PermissionListSwitch';

const RolePermissionsCard = ({ default_role }) => {
    const [role, setRole] = useState(default_role);    
    const [permission, setPermission] = useState({});

    useEffect(() => {
    }, [role]);


    

    return (
        <>
            <Card key={role.id} className="min-w-60 max-w-60">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{role.name}</h5>
            </div>
            <PermissionListSwitch key = {role.id+'_'+permission} default_permissions = {role.permissions}/>
            </Card>
        </>
    )
}

export default RolePermissionsCard;