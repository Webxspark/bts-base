import React, { useContext, useEffect, useRef } from 'react';
import { DatePicker, Tooltip, Select, Checkbox } from 'antd';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FileOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import { GlobalContext } from '../../../../context/global-context';
const { RangePicker } = DatePicker;
const AbuseForm = () => {
    const { Aside, PageTitle } = useContext(GlobalContext);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            Aside.update("abuse-form");
            PageTitle.set('Submit your Statement');
        }
    }, []);
    const handleElement = (e) => {
        e.preventDefault()
    }
    const abuseTypes = [
        {
            value: 'physical',
            label: 'Physical',
        },
        {
            value: 'emotional',
            label: 'Emotional',
        },
        {
            value: 'sexual',
            label: 'Sexual',
        },
        {
            value: 'verbal',
            label: 'Verbal',
        },
        {
            value: 'financial',
            label: 'Financial',
        }
    ]
    return (
        <>
            <div className='ml-8 text-white'>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                        <svg className="mt-1" width="28" height="13" viewBox="0 0 37 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3717 0C-6.98563 0 -2.11412 22 9.29322 22C11.5792 22 13.7316 20.8146 15.1037 18.7997L16.5779 16.6346C17.475 15.3175 19.2688 15.3175 20.166 16.6346L21.6401 18.7997C23.0117 20.8146 25.1642 22 27.4501 22C38.3275 22 44.1008 0 18.3717 0ZM10.5416 13.9998C8.18921 13.9998 6.65952 12.5297 5.95369 11.648C5.65405 11.2739 5.65405 10.7261 5.95369 10.3515C6.65952 9.46917 8.18864 7.99964 10.5416 7.99964C12.8946 7.99964 14.4237 9.46974 15.1295 10.3515C15.4292 10.7256 15.4292 11.2733 15.1295 11.648C14.4237 12.5303 12.894 13.9998 10.5416 13.9998ZM26.1249 13.9998C23.7725 13.9998 22.2429 12.5297 21.537 11.648C21.2374 11.2739 21.2374 10.7261 21.537 10.3515C22.2429 9.46917 23.772 7.99964 26.1249 7.99964C28.4779 7.99964 30.007 9.46974 30.7129 10.3515C31.0125 10.7256 31.0125 11.2733 30.7129 11.648C30.007 12.5303 28.4773 13.9998 26.1249 13.9998Z" fill="white" />
                        </svg>
                        Incident Info
                    </div>
                    <div className='bg-gray-200 w-32 h-[2px]'></div>
                </div>
                <form onSubmit={handleElement} className='my-10'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex items-center gap-10 w-[80%]'>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>Name of Abuser</div>
                                <input placeholder="Enter abuser's name" className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2' />
                            </div>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>Type of Abuse</div>
                                <Select
                                    placeholder="Choose the abuse type"
                                    options={abuseTypes}
                                    size='large'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-[80%]'>
                            <div className='font-semibold'>Location of incident</div>
                            <input placeholder='Enter location of incident' className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2' />
                        </div>
                        <div className='flex flex-col gap-3 w-[80%]'>
                            <div className='flex items-center gap-2 font-semibold'>Date of Abuse
                                <Tooltip placement='rightBottom' title='Approximate'><AiOutlineInfoCircle className='cursor-pointer mt-1 text-lg' /></Tooltip>
                            </div>
                            <RangePicker className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2 resize-none' />
                        </div>
                        <div className='flex items-center gap-10 w-[80%]'>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>Witness Name (optional)</div>
                                <input placeholder="Enter Witness' name" className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2' />
                            </div>
                            <div className='flex flex-col gap-3 w-[100%]'>
                                <div className='font-semibold'>Witness Phone number (optional)</div>
                                <input placeholder="Enter Witness' Phone number" className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-[80%]'>
                            <div className='font-semibold'>Detailed description of incident</div>
                            <textarea placeholder='Let us know what you were forced to go through' rows={6} className='border-2 rounded-md resize-none focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2' />
                        </div>
                        <div className='flex flex-col gap-3 w-[80%]'>
                            <div className='font-semibold'>Supporting Evidence</div>
                            <Dragger
                                name="evidences"
                                multiple={true}
                                beforeUpload={() => { }}
                                action={``}
                                onChange={() => { }}
                                accept=".png, .jpg, .jpeg, .webp, .pdf"
                            >
                                <p className="ant-upload-drag-icon">
                                    <FileOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to upload</p>
                            </Dragger>
                        </div>
                        <div className='flex flex-col gap-3 w-[80%]'>
                            <div className='font-semibold'>Additional Information or Comments</div>
                            <input placeholder='If you like to add anything more...' className='border-2 rounded-md focus:outline-none bg-[#222222] border-transparent  focus:border-[#333333] px-3 py-2' />
                        </div>
                        <div className='flex flex-col gap-3 w-[80%]'>
                            <div className='font-semibold'>Consent and Legal Disclaimer</div>
                            <Checkbox>I hereby declare that all information provided is true and accurate to the best of my knowledge.</Checkbox>
                            <Checkbox >I understand that sharing fake information will result in legal repercussions, including but not limited to fines,
                                 penalties, or civil liabilities, depending on the jurisdiction and severity of the misinformation.</Checkbox>
                        </div>
                    </div>
                    <div className='w-[80%] flex justify-end'>
                        <button type='submit' className='bg-[#fe570b] text-white  font-semibold rounded-full my-10 px-8 py-3'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AbuseForm;