import React, { useContext, useEffect, useRef } from 'react';
import { FaUserEdit } from 'react-icons/fa'
import { GlobalContext } from '../../../../context/global-context';
import { message } from 'antd';
import { readContract, waitForTransaction, writeContract } from '@wagmi/core';
import { contract_abi, contract_address } from '../../../../constants';
import { useAccount, useContract, useProvider, useSigner } from 'wagmi';
import { wagmiConfig } from '../../../../hooks/wagmi-config';
const DashboardFormPage = () => {
    const { Aside, PageTitle } = useContext(GlobalContext);
    const isMounted = useRef(false);
    const ethprovider = useProvider();
    const {data: signer} = useSigner();

    const firstnameref = useRef(null),
        lastnameref = useRef(null),
        emailref = useRef(null),
        addressref = useRef(null),
        cityref = useRef(null),
        pinref = useRef(null),
        aadharref = useRef(null);
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            Aside.update('dashboard');
            PageTitle.set('OnBoard Details');
        }
    }, []);
    const processingRef = useRef(false)
    const { address } = useAccount()
    
    const contract = useContract({
        addressOrName: contract_address,
        contractInterface: contract_abi,
    });

    const handleElement = async (e) => {
        e.preventDefault()
        if (processingRef.current) return

        //validation
        if (firstnameref.current.value === '') {
            message.info('First Name is required');
            return;
        }
        if (lastnameref.current.value === '') {
            message.info('Last Name is required');
            return;
        }
        if (emailref.current.value === '') {
            message.info('Email is required');
            return;
        }
        if (addressref.current.value === '') {
            message.info('Address is required');
            return;
        }
        if (cityref.current.value === '') {
            message.info('City is required');
            return;
        }
        if (pinref.current.value === '') {
            message.info('Pincode is required');
            return;
        }
        if (aadharref.current.value === '') {
            message.info('Aadhar Card Number is required');
            return;
        }
        //submit form
        const userData = {
            first_name: firstnameref.current.value,
            last_name: lastnameref.current.value,
            email: emailref.current.value,
            address: addressref.current.value,
            city: cityref.current.value,
            pincode: pinref.current.value,
            aadhar: aadharref.current.value
        }
        processingRef.current = true
        const test = await readContract(wagmiConfig, {
            address: contract_address,
            abi: contract_abi,
            functionName: "addNewUser",
            args: [
                Math.floor(Math.random() * 100000),
                JSON.stringify(userData),
                '[]',
                'token',
                address
            ]
        })
        // var transaction = await waitForTransaction(wagmiConfig, {
        //     hash: hash,
        // })
        console.log(test);
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
                                <input ref={firstnameref} placeholder='Enter your first name' className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2' />
                            </div>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>Last Name</div>
                                <input ref={lastnameref} placeholder='Enter your last name' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 lg:w-[80%]'>
                            <div className='font-semibold'>Email ID</div>
                            <input ref={emailref} placeholder='Enter your email id' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                        </div>
                        <div className='flex flex-col gap-3 lg:w-[80%]'>
                            <div className='font-semibold'>Address</div>
                            <textarea ref={addressref} placeholder='Enter your home address' rows={3} className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2 resize-none' />
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-10 lg:w-[80%]'>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>City</div>
                                <input ref={cityref} placeholder='Enter your city name' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                            </div>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>Pincode</div>
                                <input ref={pinref} placeholder='Enter your pincode' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 lg:w-[80%]'>
                            <div className='font-semibold'>Aadhar Card Number</div>
                            <input ref={aadharref} placeholder='Enter your aadhar card number' className='border-2 bg-[#222222] border-transparent rounded-md focus:outline-none focus:border-[#333333] px-3 py-2' />
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