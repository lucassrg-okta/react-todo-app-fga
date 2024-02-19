import { useEffect, useState } from 'react';
import { useSolution } from '../context/SolutionContext';
import RolePermissionsCard from './RolePermissionCard';

const RoleList = () => {
    
    const { solutionKey, solution } = useSolution();
    const selectedSolution = solution[solutionKey];
    const roles = selectedSolution?.roles;

    useEffect(() => {
    }, [roles]);

    
    if (!selectedSolution || !roles || roles.length === 0) {
        return (<p>No roles available for this solution.</p>);
    }

    return (
        <>
        <div className="mb-2 text-lg font-bold grid grid-cols-1">
        <p>Solution: {selectedSolution.theme}</p> 
        </div>        
        <div className="grid grid-cols-4" key="abc">                        
            {roles.map((role) => (            
                <RolePermissionsCard key={role.id} default_role={role}/>
            ))}
            </div>            
        </>
        );
};

export default RoleList;