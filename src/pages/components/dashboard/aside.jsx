import React, { useContext } from 'react';
import logo from '../../../assets/logo-remake.svg'
import { FaHome } from 'react-icons/fa'
import { MdOutlineAdminPanelSettings, MdOutlineNoteAdd } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { RiUserSettingsLine } from 'react-icons/ri'
import { TbLogout } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineFileText } from 'react-icons/ai';
import { GlobalContext } from '../../../context/global-context';


const Aside = (props) => {
    const { Aside, drawer } = useContext(GlobalContext);
    return (
        <>
            <div className='my-6 text-white'>
                <div className='w-48 h-auto mx-2 flex justify-between items-center'>
                    <Link to={'/dashboard'} className='flex justify-center w-full'><img className='w-24' src={logo} /></Link>
                    <div className='mr-3 md:hidden p-2 rounded-md cursor-pointer' onClick={() => drawer.remove()}>
                        <AiOutlineClose className='text-xl' />
                    </div>
                </div>
                <div className='flex flex-col gap-9 mt-8 justify-between h-[65dvh]'>
                    <div className='flex flex-col justify-between '>
                        <div className='flex flex-col gap-3'>
                            <Link to="/dashboard" className={`hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent ${Aside.active == "dashboard" && "aside-active"}`}>
                                <div className='flex items-center gap-2 ml-2'>
                                    <FaHome />
                                    OnBoard Details
                                </div>
                            </Link>
                            <Link className={`hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent ${Aside.active == "reported-cases" && "aside-active"}`} to="/dashboard/reported-cases">
                                <div className='flex items-center gap-2 ml-2'>
                                    <AiOutlineFileText />
                                    Reported Cases
                                </div>
                            </Link>
                            <Link className={`hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent ${Aside.active == "abuse-form" && "aside-active"}`} to="/dashboard/abuse-form">
                                <div className='flex items-center gap-2 ml-2'>
                                    <MdOutlineNoteAdd />
                                    Submit your statement
                                </div>
                            </Link>
                            <Link className={`hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent ${Aside.active == "resources-support" && "aside-active"}`} to="/dashboard/resources-support">
                                <div className='flex items-center gap-2 ml-2'>
                                    <BiSupport />
                                    Resources & support
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-[15dvh] justify-end gap-3'>
                    <Link className={`hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent ${Aside.active == "admin" && "aside-active"}`} to="/dashboard/admin">
                        <div className='flex items-center gap-2 ml-2'>
                            <MdOutlineAdminPanelSettings />
                            Admin
                        </div>
                    </Link>
                    <div className='hover:bg-[#0d0101] p-2 duration-200 ease-in-out border-l-[3px] border-transparent cursor-pointer flex items-center gap-2 ml-2'>
                        <TbLogout />
                        Logout
                    </div>
                </div>

            </div>
        </>
    )
}

export default Aside;