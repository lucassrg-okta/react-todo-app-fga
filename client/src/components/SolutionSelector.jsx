
'use client';

import { useState, useEffect, Suspense, lazy } from 'react';
import { Button, Tabs } from 'flowbite-react';
import { TbSquareNumber1, TbSquareNumber2, TbSquareNumber3, TbSquareNumber4, TbSquareNumber5 } from "react-icons/tb";
import { useSolution } from '../context/SolutionContext';
import RoleList from './RoleList';
const JobPostForm = lazy (() => import('./JobPostForm'));



const SolutionSelector = () => {
    const buttonStyle = 'text-center w-36 h-20 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
    const selectedButtonStyle = 'text-center w-36 h-20 mb-2 md:mb-0 text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
    const [activeTab, setActiveTab] = useState(0);
    const { solutionKey, setSolutionKey } = useSolution('hr'); 
    
    const solutions = [
        {key: 'hrSystem', label: 'HR, ATS, Job Posting'},
        {key: 'healthcare', label: 'Healthcare'},
        {key: 'finance', label: 'Finance'},
        {key: 'cloudInfrastructure', label: 'Cloud Infrastructure'},
        {key: 'collaboration', label: 'Collaboration'},
        {key: 'training', label: 'Training'},
        {key: 'projectManagement', label: 'Project Management'}
    ];

    useEffect(() => {
        console.log("Active tab is now: ", activeTab);
    }, [activeTab]);
    

    const selectTheme = (theme) => {
        setSelectedTheme(theme);
        setActiveTab(1);        
    };

    const handleSolutionSelection = (solutionKey) => {
        console.log('Selected solution: '+solutionKey);
        setSolutionKey(solutionKey);
    }

    return (
        <Tabs aria-label="Authorization Game" style="underline" onActiveTabChange={(tab) => setActiveTab(tab)}>
            <Tabs.Item active={activeTab === 'solutions'} title="Select a solution" icon={TbSquareNumber1} onClick={() => setActiveTab('solutions')}>
                <div className='grid grid-rows-1'>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg font-bold">
                        Click to select a solution:
                    </p>                
                    <div className="h-64 sm:h-64 xl:h-80 2xl:h-96">
                        <div className="grid grid-cols-4">
                            {solutions.map((solution) => (
                                    <Button key={solution.key} onClick={() => handleSolutionSelection(solution.key)}>
                                        <div className={solution.key === solutionKey ? selectedButtonStyle: buttonStyle}>{solution.label}</div>
                                    </Button>
                            ))}
                        </div>
                    </div>
                </div> 

            </Tabs.Item>
            <Tabs.Item active={activeTab === 1} title="Define Permissions" icon={TbSquareNumber2} onClick={() => setActiveTab('permissions')}>                                    
            <RoleList key={solutionKey}/>
            {/* {selectedTheme === 'HR, ATS, Job Posting' ? <PermissionForm game_theme={selectedTheme} game_resource={mapThemeResources.get('HR, ATS, Job Posting')}/> : null }
            {selectedTheme === 'Healthcare' ? <PermissionForm game_theme={selectedTheme} game_resource={mapThemeResources.get('Healthcare')}/> : null }
            {selectedTheme === 'Finance' ? <PermissionForm game_theme={selectedTheme} game_resource={mapThemeResources.get('Finance')}/> : null }
            {selectedTheme === 'Cloud Infrastructure' ? <PermissionForm game_theme={selectedTheme} game_resource={mapThemeResources.get('Cloud Infrastructure')}/> : null }
            {selectedTheme === 'Collaboration' ? <PermissionForm game_theme={selectedTheme} game_resource={mapThemeResources.get('Collaboration')}/> : null }
            {selectedTheme === 'Training' ? <PermissionForm game_theme={selectedTheme} game_resource={mapThemeResources.get('Training')}/> : null }
            {selectedTheme === 'Project Management' ? <PermissionForm game_theme={selectedTheme} game_resource={mapThemeResources.get('Project Management')}/> : null } */}
            

            </Tabs.Item>
            <Tabs.Item  title="Check Permissions" icon={TbSquareNumber3}>
                <Suspense fallback={<div>Loading...</div>}>
                    <JobPostForm/>
                </Suspense>
                
           </Tabs.Item>
      {/* <Tabs.Item  title="Define Permissions" icon={TbSquareNumber4}>
      </Tabs.Item>  */}
      {/* <Tabs.Item  title="Define Permissions" icon={TbSquareNumber5}>
      </Tabs.Item> */}
        </Tabs>


        // <Accordion arrowIcon={HiOutlineArrowCircleRight}>
        //   <Accordion.Panel>
        //     <Accordion.Title>Step 1.</Accordion.Title>
        //     <Accordion.Content>
        //       <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg font-bold">
        //         Click to select a theme:
        //       </p>        

        //     </Accordion.Content>
        //   </Accordion.Panel>
        //   <Accordion.Panel setOpen={true}>
        //     <Accordion.Title>Step 2.</Accordion.Title>
        //     <Accordion.Content>
        //     Selected theme: <div className='text-lg font-bold'>{selectedTheme}</div>
        //       <p className="mb-2 text-gray-500 dark:text-gray-400">
        //         Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
        //         has a design equivalent in our Figma file.
        //       </p>
        //       <p className="text-gray-500 dark:text-gray-400">
        //         Check out the
        //         <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
        //           Figma design system
        //         </a>
        //         based on the utility classes from Tailwind CSS and components from Flowbite.
        //       </p>
        //     </Accordion.Content>
        //   </Accordion.Panel>
        //   <Accordion.Panel>
        //     <Accordion.Title>Step 3.</Accordion.Title>
        //     <Accordion.Content>
        //       <p className="mb-2 text-gray-500 dark:text-gray-400">
        //         The main difference is that the core components from Flowbite are open source under the MIT license, whereas
        //         Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
        //         components, whereas Tailwind UI offers sections of pages.
        //       </p>
        //       <p className="mb-2 text-gray-500 dark:text-gray-400">
        //         However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
        //         technical reason stopping you from using the best of two worlds.
        //       </p>
        //       <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        //       <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
        //         <li>
        //           <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
        //             Flowbite Pro
        //           </a>
        //         </li>
        //         <li>
        //           <a
        //             href="https://tailwindui.com/"
        //             rel="nofollow"
        //             className="text-cyan-600 hover:underline dark:text-cyan-500"
        //           >
        //             Tailwind UI
        //           </a>
        //         </li>
        //       </ul>
        //     </Accordion.Content>
        //   </Accordion.Panel>
        // </Accordion>
    );
}
export default SolutionSelector;