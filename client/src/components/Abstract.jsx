
'use client';

import { Card } from 'flowbite-react';
// import Image from 'next/image';

function Abstract() {
  return (
    <>
    <div className='grid grid-row justify-between gap-x-6 gap-y-6'>
    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Abstract</h5>
    <p>
    This demo will showcase how FGA enables developers to design authorization models from coarse grained to fine grained and everything in between in a way that’s centralized, fast, and easy to use. 
    </p>
    <p>
    This means that customers can get much more granular with access rules, increasing security posture. 
    </p>
    <p>
    They can define authorization models for all of their applications in FGA, taking authorization out of the application, increasing developer efficiency. And, since FGA allows developers to define authorization models based on the relationship a user has to a resource, they can better manage complexity as they add more users who need access to more resources. 
    </p>

With FGA, you can: 
<ul className='list-disc'>
    <li>
    Define Authorization Models
    </li>
<li>
Model user groups, roles, resource relationships, and permissions
</li>
<li>
Write Authorization Data
</li>
<li>
Programmatically write authorization related data to Okta FGA including user access, group membership, and relationships between objects
</li>
<li>
Add Authorization to your API
</li>
<li>
Update your API to check a user's permissions before certain actions
</li>
</ul>

    </div>
    </>
  );
}

export default Abstract;