import React from 'react';
import logo from '../../../assets/logo-remake.svg'
import { Link } from 'react-router-dom';
import { ConnectButton } from "@rainbow-me/rainbowkit";
const Navbar = () => {
    return (
        <>
            <nav className='flex my-6 items-center mx-5 justify-between'>
                <div className='flex gap-10'>
                    <Link to="/"><img className='w-40 h-auto lg:w-16 lg:h-auto lg:mt-1 lg:mx-10' src={logo} /></Link>
                </div>
                <div className='flex lg:mr-7 gap-3 lg:gap-6 items-center'>
                    {/* <Link to="/auth"><div className='text-sm font-bold text-white'>Login</div></Link>
                    <Link to="/auth"><button className='bg-[#fe570b] text-sm text-white font-bold px-2 py-1 lg:px-5 lg:py-2 rounded-full'>Sign up</button></Link> */}
                    <ConnectButton />
                </div>
            </nav>
        </>
    )
}
export default Navbar;