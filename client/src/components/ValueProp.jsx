
'use client';

import { Card } from 'flowbite-react';
// import Image from 'next/image';

function ValueProp() {
  return (
    <>
    <div className='grid grid-row justify-between gap-x-6 gap-y-6'>
    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Collaboration, Security and Efficiency</h5>
    <div>
    FGA enables developers to implement authorization, from coarse grained to fine 
grained, in a way that’s centralized, flexible, fast, scalable and easy to use. 
It provides a solution that is more flexible, scalable, available, and auditable than 
traditional role-based or attribute-based access control. 
        </div>

    <div className='grid grid-cols-2 justify-between gap-x-6 gap-y-6'>

    <Card className="max-w-lg">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Primary Customer Challenges</h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Granularity</p>Customers need to be able to grant their users granular 
access to an application or object based on dynamic, relationship based 
attributes.
                
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Developer Efficiency</p>Developers need a way to consistently and 
efficiently manage authorization. Today, authorization is largely done at 
the application level which decreases developer efficiency.
                
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Compliance and Audit</p>Customers need to be able to efficiently audit
which users have access to which objects. Without a centralized view 
into authorization policies, customers cannot efficiently manage their 
compliance goals.
              </div>              
            </div>
          </li>          
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Security Posture</p>When authorization is implemented in the 
application code, it leads to inconsistent implementation of 
authorization which can increase the attack surface within each 
application.
              </div>              
            </div>
          </li>          
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Complexity</p>Customers don’t have a single-pane of glass view into 
authorization policies which leads to complexity across applications that
cannot scale
              </div>              
            </div>
          </li>          

        </ul>
      </div>
    </Card>    

    <Card className="max-w-lg">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Business Impact of not having the feature/product</h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Granularity</p>
                <p>Does not enable a least privilege access approach leading to 
increased risk of a security breach. </p>
<p>Makes it impossible to add flexible collaboration features where 
users share the content they create with others</p>
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Developer Efficiency</p>Lack of ability to scale and pursue new customer facing opportunities quickly
                
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Compliance and Audit</p>Inability to achieve compliance goals.
              </div>              
            </div>
          </li>          
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Security Posture</p>Increased risk of a security breach.
application.
              </div>              
            </div>
          </li>          
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white ">Complexity</p>Increased attack surface.
              </div>              
            </div>
          </li>          

        </ul>
      </div>
    </Card>    
    </div>
    </div>
    </>
  );
}

export default ValueProp;