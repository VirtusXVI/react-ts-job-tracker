import { useState } from 'react'
import Modal from '../modal/Modal';
import { useLogin } from '../../context/LoginContext';

export default function Body() {
    const { openLoginModal } = useLogin();
    const [openFilters, setOpenFilters] = useState<Boolean>(false);
    const [appliedFilters, setAppliedFilters] = useState<String[]>([]);


    return (
    <div className='bg-white dark:bg-black h-lvh overflow-y-auto w-dvw text-black dark:text-white px-2 lg: pt-15'>

        {openFilters ? <Modal type='Filter' appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} setOpenFilters={setOpenFilters}/> : null}
        {openLoginModal ? <Modal type='Login'/> : null}

        {/* Filter Section */}
        <span className='grid justify-end mb-2'>
            <button onClick={() => setOpenFilters(true)} className={` px-4 py-2 rounded ${appliedFilters.length > 0 ? 'bg-blue-300': 'bg-gray-300'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4" fill="black">
                    <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/>
                </svg>
            </button>
        </span>
        {/* Content Section */}
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et dicta nostrum ratione qui ut architecto repudiandae perferendis dolorum eveniet accusamus aut dignissimos inventore, sed rem laudantium asperiores voluptates quam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quo aliquam omnis facere magni minima expedita. Repellendus adipisci modi praesentium! Eius facilis praesentium veniam voluptas. Dignissimos eos expedita reiciendis! Quis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero, velit autem officia recusandae harum reiciendis, voluptate quae, tenetur itaque nesciunt dicta. Voluptatem cum doloremque repellat nesciunt distinctio quibusdam placeat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et dicta nostrum ratione qui ut architecto repudiandae perferendis dolorum eveniet accusamus aut dignissimos inventore, sed rem laudantium asperiores voluptates quam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quo aliquam omnis facere magni minima expedita. Repellendus adipisci modi praesentium! Eius facilis praesentium veniam voluptas. Dignissimos eos expedita reiciendis! Quis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero, velit autem officia recusandae harum reiciendis, voluptate quae, tenetur itaque nesciunt dicta. Voluptatem cum doloremque repellat nesciunt distinctio quibusdam placeat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et dicta nostrum ratione qui ut architecto repudiandae perferendis dolorum eveniet accusamus aut dignissimos inventore, sed rem laudantium asperiores voluptates quam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quo aliquam omnis facere magni minima expedita. Repellendus adipisci modi praesentium! Eius facilis praesentium veniam voluptas. Dignissimos eos expedita reiciendis! Quis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero, velit autem officia recusandae harum reiciendis, voluptate quae, tenetur itaque nesciunt dicta. Voluptatem cum doloremque repellat nesciunt distinctio quibusdam placeat.
        </span>
    </div>
    )
}
