import React, { useState } from 'react';
import logo from '../assets/Logo.svg'
import auth1 from '../assets/Auth1.svg'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const AuthPage = () => {
  const [viewPage, setViewPage] = useState('screen-2');
  return (
    <>
      <div className='grid grid-cols-12 h-screen'>
        <div className='bg-[#0e0e0e] col-span-5'>
          <div className='my-6 mx-4 lg:my-12 lg:mx-8'>
            <div>
              <Link to="/"><img className='w-48 h-auto' src={logo} /></Link>
              <div className='mt-12 mx-2'>
                <h1 className='text-3xl font-bold text-white'>Where Healing Begins <br /><span className='text-[#fe570b]'>Justice Prevails</span></h1>
              </div>
              <div className='mt-12 absolute bottom-10 w-[45%] right-0 left-0'>
                <img className='w-[90%] h-auto' src={auth1} />
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-7 '>
          {viewPage == 'screen-1' && <>
            <div className='my-16'>
              <div className='flex flex-col items-center gap-3'>
                <h1 className='text-3xl font-semibold text-[#fe570b]'>Welcome</h1>
                <p className='text-white'>Sign In/Create an account to start using BreakTheSilence</p>
              </div>
            </div>
            <div className='mt-8 flex flex-col justify-center items-center'>
              <form onSubmit={e => e.preventDefault()} className='flex w-[80%] flex-col items-center justify-center'>
                <div className='flex flex-col w-full items-center'>
                  <div className='w-full '>
                    <label className='text-white font-semibold'>Phone Number</label>
                    <input className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2 w-full my-3' type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>
                <div className='my-6 flex justify-end w-full'>
                  <button className='bg-[#fe570b] flex gap-2 items-center text-white text-sm px-8 py-3 rounded-md uppercase'>Next <AiOutlineArrowRight /></button>
                </div>
              </form>
            </div>
          </>
            || viewPage == 'screen-2' && <>
              <div className='my-16'>
                <div className='flex flex-col items-center gap-3'>
                  <h1 className='text-3xl font-semibold text-[#fe570b]'>Welcome - OTP Verification</h1>
                  <p className='text-white'>We’ve sent an OTP to your number via SMS</p>
                </div>
              </div>
              <div className='mt-8 flex flex-col justify-center items-center'>
                <form onSubmit={e => e.preventDefault()} className='flex w-[80%] flex-col items-center justify-center'>
                  <div className='flex flex-col w-full items-center'>
                    <div className='w-full '>
                      <label className='text-white font-semibold'>Enter your OTP</label>
                      <div className='grid grid-cols-4 gap-6 w-[50%]'>
                        <input onChange={(e) => e.target.nextElementSibling.focus()} maxLength={1} className='border-[1px] text-center bg-[#222222] border-[#0E1B2E] focus:outline-none rounded-md px-3 py-2 mt-2 h-12 w-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder="_" />
                        <input onChange={(e) => e.target.nextElementSibling.focus()} maxLength={1} className='border-[1px] text-center bg-[#222222] border-[#0E1B2E] focus:outline-none rounded-md px-3 py-2 mt-2 h-12 w-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder="_" />
                        <input onChange={(e) => e.target.nextElementSibling.focus()} maxLength={1} className='border-[1px] text-center bg-[#222222] border-[#0E1B2E] focus:outline-none rounded-md px-3 py-2 mt-2 h-12 w-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder="_" />
                        <input onChange={(e) => document.getElementById('submit-btn').click()} maxLength={1} className='border-[1px] text-center bg-[#222222] border-[#0E1B2E] focus:outline-none rounded-md px-3 py-2 mt-2 h-12 w-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder="_" />
                      </div>
                    </div>
                  </div>
                  <div className='my-6 flex justify-end w-full'>
                    <button id="submit-btn" className='bg-[#fe570b] flex gap-2 items-center text-white text-sm px-8 py-3 rounded-md uppercase'>Verify otp <AiOutlineArrowRight /></button>
                  </div>
                </form>
              </div>
            </>}
        </div>
      </div>
    </>
  );
}

export default AuthPage;