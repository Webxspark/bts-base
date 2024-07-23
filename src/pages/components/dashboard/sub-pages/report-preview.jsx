import React from 'react';
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../../../context/global-context";
import { Table, Tabs, Tag } from "antd";
import { Link } from "react-router-dom";

const ReportPreview = (props) => {
    const view_key = props.view_key;
    const { Aside, PageTitle } = useContext(GlobalContext);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            Aside.update("reported-cases");
            PageTitle.set('Report Preview');
        }
    }, []);

    const columns = [
        {
            title: 'Info',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Details',
            dataIndex: 'abuse_type',
            key: 'abuse_type',
        },
    ];
    const dataSource = [
        {
            key: '1',
            name: <div className="font-semibold">Abuser Name</div>,
            abuse_type: 'Ryle',

        },
        {
            key: '2',
            name: <div className="font-semibold">Type of Abuse</div>,
            abuse_type: 'Physical',
        },
        {
            key: '2',
            name: <div className="font-semibold">Location of Incident</div>,
            abuse_type: 'Thendral Avenue Chennai-600054',
        },
        {
            key: '2',
            name: <div className="font-semibold">Date of Abuse</div>,
            abuse_type: '10/6/23 to 15/6/23',
        },
        {
            key: '2',
            name: <div className="font-semibold">Witness name (opt)</div>,
            abuse_type: 'Allysa',
        },
        {
            key: '2',
            name: <div className="font-semibold">Witness Ph. number (opt)</div>,
            abuse_type: '9746284368',
        },
        {
            key: '2',
            name: <div className="font-semibold">Description of Incident</div>,
            abuse_type: 'My dog stepped on a beee',
        },
        {
            key: '2',
            name: <div className="font-semibold">Supporting Evidence (opt)</div>,
            abuse_type: 'img.jpg',
        },
        {
            key: '2',
            name: <div className="font-semibold">Additional Info/comments (opt)</div>,
            abuse_type: '',
        },
    ];

    const dataSourceTwo = [
        {
            key: '1',
            name: <div className="font-semibold">Name</div>,
            abuse_type: 'Physical',

        },
        {
            key: '2',
            name: <div className="font-semibold">Phone Number</div>,
            abuse_type: 'Physical',
        },
        {
            key: '2',
            name: <div className="font-semibold">Address</div>,
            abuse_type: 'Physical',
        },
        {
            key: '2',
            name: <div className="font-semibold">Aadhar Number</div>,
            abuse_type: 'Physical',
        },
        {
            key: '2',
            name: <div className="font-semibold">City & Pincode</div>,
            abuse_type: 'Physical',
        },
    ];
    return (
        <>
            <div className="grid-cols-12 grid gap-3">
                <div className="col-span-8">
                    <Table pagination={false} dataSource={dataSource} columns={columns} />

                </div>
                <div className="col-span-4">
                    <div className="flex flex-col gap-5 mt-4">
                        <div className="text-xl font-bold">Reporter's Info</div>
                        <Table pagination={false} dataSource={dataSourceTwo} columns={columns} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default ReportPreview;