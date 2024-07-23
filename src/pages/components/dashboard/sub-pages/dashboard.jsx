import React, { useContext, useEffect, useRef } from 'react';
import { FaUserEdit } from 'react-icons/fa'
import { GlobalContext } from '../../../../context/global-context';

const DashboardFormPage = () => {
    const { Aside, PageTitle } = useContext(GlobalContext);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            Aside.update('dashboard');
            PageTitle.set('Dashboard');
        }
    }, []);

    const handleElement = (e) => {
        e.preventDefault()
        console.log("form submitted!")
    }
    return (
        <>
            <div className='ml-1 md:ml-10 text-white'>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                        <FaUserEdit />
                        Personal Info
                    </div>
                    <div className='bg-[#fff] w-32 h-[2px]'></div>
                </div>
                <form onSubmit={handleElement} className='my-10'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col lg:flex-row items-center gap-10 lg:w-[80%]'>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>First Name</div>
                                <input placeholder='Enter your first name' className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2' />
                            </div>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>Last Name</div>
                                <input placeholder='Enter your last name' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 lg:w-[80%]'>
                            <div className='font-semibold'>Email ID</div>
                            <input placeholder='Enter your email id' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                        </div>
                        <div className='flex flex-col gap-3 lg:w-[80%]'>
                            <div className='font-semibold'>Address</div>
                            <textarea placeholder='Enter your home address' rows={3} className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2 resize-none' />
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-10 lg:w-[80%]'>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>City</div>
                                <input placeholder='Enter your city name' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                            </div>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>Pincode</div>
                                <input placeholder='Enter your pincode' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 lg:w-[80%]'>
                            <div className='font-semibold'>Aadhar Card Number</div>
                            <input placeholder='Enter your aadhar card number' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                        </div>
                    </div>
                    <button type='submit' className='bg-[#fe570b] text-white font-semibold rounded-full my-10 w-[100%] lg:w-[80%] py-2'>
                        UPDATE INFO
                    </button>
                </form>
            </div>
        </>
    )
}
export default DashboardFormPage;