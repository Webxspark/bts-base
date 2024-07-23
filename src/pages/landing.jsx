import React, { useEffect } from 'react';
import Navbar from './components/landing/navbar';
import bled from '../assets/orange&black img.svg';
import arrow from '../../src/assets/arrow.svg';
import ulta from '../../src/assets/ulta arrow-PhotoRoom.png-PhotoRoom.svg'
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const { address, isConnected } = useAccount();
    const navigate = useNavigate();
    useEffect(() => {
      if (address && isConnected) {
        navigate("/dashboard");
      }
    }, [address, isConnected]);
    return (
        <div>
            <div>
                <Navbar />
                <div className='grid lg:grid-cols-2 lg:h-[80dvh]'>
                    <div className='flex order-2 lg:order-1 flex-col items-center justify-center gap-3 lg:gap-6 m-16'>
                        <div className=' text-[#fe570b] text-2xl md:text-2xl lg:text-5xl leading-6 font-bold '>
                            <span className='text-white'>Break The Silence:</span> Speak Up. Be Heard
                        </div>
                        <div className='text-white flex flex-col gap-5 ml-1 lg:gap-10'>
                            <div className='text-base md:text-md lg:text-xl'>
                                Break The Silence is an innovative online platform that provides a safe space
                                for victims of abuse to raise their voices and seek justice.
                                Together, we are creating an oasis of support, where every voice matters,
                                every survivor is empowered, and the cycle of this silence is shattered.
                            </div>
                            <div className='flex items-center gap-8 lg:gap-5 '>
                                <button className='text-white text-md lg:text-lg font-bold bg-[#fe570b] px-4 py-1 lg:px-6 lg:py-3 rounded-full'>
                                    File a report
                                </button>
                                <button className='bg-[#0d0101] text-white text-md lg:text-lg border-[1.5px] px-4 py-1 lg:px-7 lg:py-3 rounded-full'>
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7 lg:h-[80dvh] order-1 lg:order-2 flex items-center justify-center'>
                        <img className='w-[90%] h-auto drop-shadow-glow' src={bled} />
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-[#161618] text-white mx-36 my-10 py-8 rounded-lg grid grid-cols-3'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='text-[#fe570b] text-6xl font-bold'>
                            42+
                        </div>
                        <div className='text-md font-semibold'>
                            Cases Undertaken
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='text-[#fe570b] text-6xl font-bold'>
                            32+
                        </div>
                        <div className='text-md font-semibold'>
                            Cases Resolved
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='text-[#fe570b] text-6xl font-bold'>
                            10+
                        </div>
                        <div className='text-md font-semibold'>
                            Cases Ongoing
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-col gap-3 text-5xl text-[#fe570b] my-10 flex items-center justify-center '>
                <span>Know what's happening</span>
                <span className='text-white text-4xl'> BTS: Here's what's going on behind the scenes</span>
            </div>
            
            <div className='grid grid-cols-8 items-center justify-center mx-8'>
                <div className='flex col-span-2'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <button className='bg-[#fe570b] text-xl text-white font-semibold rounded-full w-16 h-16'>
                            1
                        </button>
                        <div className='text-md text-white font-semibold'>
                            <div className='flex flex-col gap-2 items-center justify-center'>
                                Report your abuse
                                <span className='text-base font-normal mb-10 px-10'>
                                    Your report is taken seriously and stored in blockchain, where data tampering is next to impossible.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='h-auto w-24' src={arrow} />
                </div>
                <div className='flex col-span-2'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <button className='bg-[#fe570b] text-xl text-white font-semibold rounded-full w-16 h-16'>
                            2
                        </button>
                        <div className='text-md text-white font-semibold'>
                            <div className='flex flex-col gap-2 items-center justify-center'>
                                Case transfered to Police
                                <span className='text-base font-normal mb-10 px-10'>
                                    The data is further sent securely to the police, ensuring privacy and effective communication.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='h-auto w-24' src={ulta} />
                </div>
                <div className='flex flex-col col-span-2 items-center justify-center gap-4'>
                    <button className='bg-[#fe570b] text-xl text-white font-semibold rounded-full w-16 h-16'>
                        3
                    </button>
                    <div className='text-md text-white font-semibold'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            Action taken and Updated
                            <span className='text-base font-normal mb-10 px-10'>
                                Police investigate, take necessary actions, and you can track the status of the case in your profile.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;