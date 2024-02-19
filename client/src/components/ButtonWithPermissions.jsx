import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

const ButtonWithPermission = ({label, subject, relation, object}) => {
    const [isAllowed, setIsAllowed] = useState(false);

    const _subject = subject.replace(/ /g,"_");
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const allowedBtnStyle='text-white bg-blue-700';
    const notAllowedBtnStyle='text-white bg-white-700';

    useEffect(() => {
        const fetchPermission = async () => {
            try {
                const response = await fetch('/api/isallowed', {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(
                        {
                        'subject': _subject,
                        'relation': relation,
                        'object': object
                        }
                    ),                    
                });
                

                if(!response.ok) {
                    console.log("_____Server response was not ok_____");
                    setError('Error checking permission. Status:'+response.status);
                }

                const result = await response.json();
                setIsAllowed(result);
                console.log("result",result);

            }
            catch(err) {
                console.log(">>>Error: ",err);
                setError(err.message);
            }
            finally {
                setLoading(false);
            }            
        };
        fetchPermission();
        console.log(`subject: ${_subject} | relation: ${relation} | object: ${object} => isAllowed: ${isAllowed}`);
    }, [subject]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data!</div>
    }

    return (
        <>
        <Button size='sm' className={isAllowed ? allowedBtnStyle: notAllowedBtnStyle} color="blue">{label}</Button>
        </>
    )
}

export default ButtonWithPermission;