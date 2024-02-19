'use client';
import React, { useState } from "react";
import { Modal, Checkbox, Label, TextInput, Badge, Button, Dropdown, Card, ButtonGroup } from "flowbite-react";
import ButtonWithPermission from "./ButtonWithPermissions";

const JobPostForm = () => {
    const [selectedRole, setSelectedRole] = useState("Public");

    const allowedBtnStyle = 'text-white bg-blue-700';
    const notAllowedBtnStyle = '';

    const roles = ['HR Manager', 'Public', 'Employee', 'Applicant'];

    const jobDetails = {
        id: 'CIC001',
        title: 'Software Engineer',
        location: 'United States',
        type: 'Full-Time',
        description: 'We are looking for a skilled software engineer to join our team. \n ' +
            'Be a part of a collaborative and agile team, interfacing with the product managers and other teams to support shared services ' +
            'Work with technical leaders to help find opportunities for optimization of existing services' +
            'Debug and resolve production issues and implement fixes for them' +
            'Support existing services by ensuring that security issues and dependency updates are addressed in a timely manner' +
            'Support other teams by reviewing changes to shared services and addressing bugs' +
            'Work using NodeJS (Javascript/Typescript), MongoDB, and PostgreSQL on AWS and Azure.'
    }

    return (
        <>

            <div className="center max-w-3xl gap-7 ml-10">
                <Card className="mb-2 text-lg font-bold">
                    <p>Solution: HR</p>

                    <div className="flex flex-row gap-2">
                        <span className="h-10">Role:</span>
                        <div className="w-64 h-8">
                            <Dropdown label={selectedRole === '' ? "Select a Role" : selectedRole} dismissOnClick={true} color="blue">
                                {roles.map((role) => (
                                    <Dropdown.Item key={role} onClick={() => setSelectedRole(role)}>{role}</Dropdown.Item>
                                ))}
                            </Dropdown>
                        </div>
                    </div>
                </Card>

                <div className='align-center min-w-fit space-y-4'>
                    <Card>
                        <h5 className='text-2xl font-bold text-center'>{jobDetails.id} - {jobDetails.title}</h5>
                        <p className="text-sm font-medium text-gray-500">{jobDetails.location}</p>
                        <Badge color="default">{jobDetails.type}</Badge>
                        <p className='py-6'>{jobDetails.description}</p>
                    </Card>

                    <div className="mb-2 text-lg font-bold">
                        <p>Actions:</p>
                    </div>

                  <Card>
                    <div className="grid grid-rows-3 grid-cols-3 align-center gap-6 h-60">
                        <ButtonWithPermission label={'Edit'} relation={'can_write'} subject={'role:'+selectedRole} object={'JobPost:'+jobDetails.id} />
                        <ButtonWithPermission label={'Delete'} relation={'can_delete'} subject={'role:'+selectedRole} object={'JobPost:'+jobDetails.id} />
                        <ButtonWithPermission label={'View Applications'} relation={'view_applications'} subject={'role:'+selectedRole} object={'JobPost:'+jobDetails.id} />
                        <ButtonWithPermission label={'Save for Later'} relation={'can_save'} subject={'role:'+selectedRole} object={'JobPost:'+jobDetails.id} />
                        <ButtonWithPermission label={'Share'} relation={'can_share'} subject={'role:'+selectedRole} object={'JobPost:'+jobDetails.id} />
                        <ButtonWithPermission label={'Refer'} relation={'refer_friend'} subject={'role:'+selectedRole} object={'JobPost:'+jobDetails.id} />
                        <ButtonWithPermission label={'Apply'} relation={'can_apply'} subject={'role:'+selectedRole} object={'JobPost:'+jobDetails.id} />
                    </div>
                    </Card>


                </div>

            </div>

        </>
    )
}

export default JobPostForm;