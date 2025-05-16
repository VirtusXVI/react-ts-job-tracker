import { useState } from 'react';
import { useDetail } from '../../context/DetailContext'

export default function NewJob() {
    const { toggleDetail } = useDetail();
    const [newJob, setNewJob] = useState({id: '', company: '', description: '', step: ''});

    return (
        <div className="w-100 rounded overflow-hidden border-2 border-black dark:border-white flex justify-center items-center " onClick={() => toggleDetail(newJob)}>
            <div className="px-6 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 dark:text-white dark:bg-white" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                </svg>
            </div>
        </div>
    )
}