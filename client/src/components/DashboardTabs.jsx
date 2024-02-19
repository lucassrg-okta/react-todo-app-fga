
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle, HiHome, HiOutlineBriefcase } from 'react-icons/hi';
import { HiBolt } from "react-icons/hi2";
import { GiConsoleController } from "react-icons/gi";
import Personas from './Personas';
import Abstract from './Abstract';
import ValueProp from './ValueProp';
import SolutionSelector from './SolutionSelector';
import UseCases from './UseCases';

function DashboardTabs() {
  return (    
    <Tabs aria-label="Tabs with icons" style="underline">    
      <Tabs.Item active title="Overview" icon={HiHome}>
        <div className='w-2/3 sm:w-full x-lg:w-1/3'>
        <Abstract/>
        </div>
      </Tabs.Item>      
      <Tabs.Item title="Personas" icon={HiUserCircle}>
      <div className='w-2/3 sm:w-full x-lg:w-1/3'>
        <Personas/>
        </div>
      </Tabs.Item>
      <Tabs.Item title="Value Proposition" icon={HiOutlineBriefcase}>
      <div className='w-2/3 sm:w-full x-lg:w-1/3'>
        <ValueProp/>
        </div>
      </Tabs.Item>
      <Tabs.Item title="Use Cases" icon={HiBolt}>
      <div className='w-2/3 sm:w-full x-lg:w-1/3'>
        <UseCases/>
        </div>
      </Tabs.Item> 
      <Tabs.Item title="Authorization Game" icon={GiConsoleController}>
      <div className='w-2/3 sm:w-full x-lg:w-1/3'>
        <SolutionSelector/>
        </div>
      </Tabs.Item>
    </Tabs>
  );
}

export default DashboardTabs;