
'use client';

import { Accordion } from 'flowbite-react';


function UseCases() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>          
          HR, ATS, Job Posting
      </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Managing which permissions users have over different job postings, or the candidates that apply to them.
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-bold">
            Discovery Questions:
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            How do you manage which permissions users have over different job postings, or the candidates that apply to them?
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Healthcare</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Manage which physicians or other staff have access to patient data. Giving patients the ability to delegate access to their clinical records.
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-bold">
            Discovery Questions:
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            How do you manage which physicians have access to patient data or lab studies?
            Can patients delegate access to their clinical records?
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Finance</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Managing who has access to a bank account and giving customers the ability to delegate access to other people
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-bold">
            Discovery Questions:
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          How do you manage who has access to a specific bank account? Can bank account owners delegate access to other people?
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Cloud Infrastructure</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Managing which applications and/or users can access different cloud resources
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-bold">
            Discovery Questions:
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          How do you manage which applications and users can access different cloud resources?
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Collaboration</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Enabling users with the ability to share content with other users and control the level of access
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-bold">
            Discovery Questions:
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Can users share content with other users or groups, and control the level of access for each one?
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Training</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Controlling which users get access to what content.
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-bold">
            Discovery Questions:
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          How do you manage which users can access specific content?
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Project Management</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Enabling users to collaborate on different projects and assigning specific levels of access to each project.
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-bold">
            Discovery Questions:
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          How do you manage which users can collaborate in a specific project, and which permissions do they have?
          </p>
        </Accordion.Content>
      </Accordion.Panel>

    </Accordion>
  );
}
export default UseCases;