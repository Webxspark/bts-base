import React from 'react';
import { Alert } from "antd";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from "../../context/global-context";

const Notifications = () => {
    const { NotificationsPanel } = useContext(GlobalContext);
    return (
        <div className="px-2 py-2 w-96">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-lg">Notifications</h1>
                <div className="p-2 rounded-full" onClick={NotificationsPanel.hide}>
                    <AiOutlineClose className="cursor-pointer" />
                </div>
            </div>
            <div className="my-2 flex flex-col gap-2">
                <Alert message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." type="info" closable />
                <Alert message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." type="error" closable />
                <Alert message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." type="success" closable />
            </div>
        </div>
    )
}
export default Notifications;