
'use client';

import { Card } from 'flowbite-react';
// import Image from 'next/image';

function Personas() {
  return (
    <>
    <div className='grid grid-cols-2 justify-between gap-x-6 gap-y-6'>
    <Card className="max-w-lg">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Product</h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Owns/responsible for adding new product features that require 
Fine Grained Authorization. Sometimes it can be a Product 
Manager in a Platform team, that is asked to provide a FGA 
solution for multiple development team</p>
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                {/* <Image
                  alt="Neil image"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                  className="rounded-full"
                /> */}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Titles: VP of Product, Product Manager, Platform Product Manager</p>
              </div>              
            </div>
          </li>

        </ul>
      </div>
    </Card>    

    <Card className="max-w-lg">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Engineering</h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Owns/responsible for developing and maintaining underlying 
technology stacks that drive business outcomes and innovation</p>
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                {/* <Image
                  alt="Neil image"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                  className="rounded-full"
                /> */}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">CIAM buying role: Technical/Functional</p>
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                {/* <Image
                  alt="Neil image"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                  className="rounded-full"
                /> */}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Titles: Lead Engineers</p>
              </div>              
            </div>
          </li>

        </ul>
      </div>
    </Card>    
    <Card className="max-w-lg">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Secondary: Security Persona</h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">                
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Owns/responsible for protecting and safeguarding customer and 
company data, company’s overall security posture, and brand 
reputatio</p>
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                {/* <Image
                  alt="Neil image"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                  className="rounded-full"
                /> */}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Cares about being able to use FGA for things like auditing 
(features we may roll out in the future)</p>
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                {/* <Image
                  alt="Neil image"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                  className="rounded-full"
                /> */}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">CIAM buying role: Economic/Technical</p>
              </div>              
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                {/* <Image
                  alt="Neil image"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                  className="rounded-full"
                /> */}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Titles: CISO, CIO, VP of Security</p>
              </div>              
            </div>
          </li>

        </ul>
      </div>
    </Card>        
    </div>
    </>
  );
}

export default Personas;