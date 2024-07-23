import React, { useContext } from 'react';
import { BsFillBellFill } from 'react-icons/bs'
import { AiOutlineCaretDown, AiOutlineMenu } from 'react-icons/ai'
import { GlobalContext } from '../../../context/global-context';
import { Avatar, Drawer, Popover } from 'antd';
import Notifications from '../notifications';
import { Link } from 'react-router-dom';
import Aside from './aside';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Navbar = () => {
    const { PageTitle, NotificationsPanel, drawer } = useContext(GlobalContext);

    return (
        <>
            <nav className='flex my-6 items-center mx-5 justify-between text-white'>
                <div className='flex gap-10'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <div className='p-2 md:hidden rounded-md cursor-pointer' onClick={() => drawer.put()}>
                            <AiOutlineMenu />
                        </div>
                        <span className='text-[#fe570b]'>{PageTitle.title}</span>
                    </div>
                </div>
                <div className='flex mr-7 gap-3 items-center'>
                    <ConnectButton />
                </div>
            </nav>
            <Drawer closable={false} onClose={() => drawer.remove()} width={'auto'} style={{ margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px", backgroundColor: "#e5e7eb" }} placement="left" open={drawer.reveal}>
                <div className='bg-[#e5e7eb] left-1 border-r-[1px] h-screen fixed top-0 bottom-0'>
                    <Aside />
                </div>
            </Drawer>
        </>
    )
}

export default Navbar;