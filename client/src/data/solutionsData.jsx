const solutionsData = {
    hrSystem: {
        theme: 'HR',
        resource: 'Job Post',
        roles: [
            {
                id: 1,
                name: 'HR Manager',
                permissions: [{can_write: false}, {can_view:false}, {can_delete:false}, {view_applications:false}]
            },
            {
                id: 2,
                name: 'Applicant',
                permissions: [{can_write:false},
                    {can_view:false},
                    {can_delete:false},
                    {can_apply:false}
                ]
            },
            {
                id: 3,
                name: 'Employee',
                permissions: [{can_write:false},
                    {can_view:false},
                    {view_applications:false},
                    {refer_friend:false}
                ]
            },
            {
                id: 4,
                name: 'Public',
                permissions:
                    [
                        {can_view:false},
                        {can_save:false},
                        {can_share:false},

                    ]
            }
        ]
    },
    healthcare: {
        theme: 'Healthcare',
        resource: 'Patient Record',
        roles: [
            {
                id: 1,
                name: 'Doctor',
                permissions: [{can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_order_prescription:false},
                    {can_order_tests:false}
                ]
            },
            {
                id: 2,
                name: 'Patient',
                permissions: [{can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 3,
                name: 'Family Member',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 4,
                name: 'Receptionist',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            }
        ]
    },
    finance: {
        theme: 'Finance',
        resource: 'Bank Account',
        roles: [
            {
                id: 1,
                name: 'Account Onwer',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 2,
                name: 'Account Manager',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 3,
                name: 'Customer Service Representative',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 4,
                name: 'Anyone',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            }
        ]
    },
    cloudInfrastructure: {
        theme: 'Cloud Infrastructure',
        resource: 'Cloud Resource',
        roles: [
            {
                id: 1,
                name: 'IT Administrator',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 2,
                name: 'Software Developer',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 3,
                name: 'Security',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 4,
                name: 'Anyone',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            }
        ]
    },
    collaboration: {
        theme: 'Collaboration',
        resource: 'Document',
        roles: [
            {
                id: 1,
                name: 'Owner',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 2,
                name: 'Contributor',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 3,
                name: 'Manager',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 4,
                name: 'Anyone',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            }
        ]
    },
    training: {
        theme: 'Training',
        resource: 'Course',
        roles: [
            {
                id: 1,
                name: 'Content Creator',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 2,
                name: 'Support',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 3,
                name: 'Student',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 4,
                name: 'Guest',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            }
        ]
    },
    projectManagement: {
        theme: 'Project Management',
        resource: 'Project Plan',
        roles: [
            {
                id: 1,
                name: 'Project Manager',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 2,
                name: 'Business Analyst',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 3,
                name: 'Tecnical Lead',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            },
            {
                id: 4,
                name: 'Stakeholders',
                permissions: [
                    {can_read:false},
                    {can_write:false},
                    {can_delete:false},
                    {can_share:false}
                ]
            }
        ]
    }
}

export default solutionsData;