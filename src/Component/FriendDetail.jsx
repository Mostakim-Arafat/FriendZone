import React from 'react';
import { useParams } from 'react-router';
import FriendCard from './FriendCard';
import Data from '../../public/Data.json'
import Call from '../assets/call.png'
import Text from '../assets/text.png'
import Video from '../assets/video.png'
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { IoIosArchive } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import { useContext } from 'react';
import { TimelineContexto } from '../Context/TimelineContext';
import { ToastContainer, toast } from 'react-toastify';

const FriendDetail = ({ params }) => {

    const friend_id_no = useParams(params)
    const Matched_id = Data.find(i => i.id == friend_id_no.id)
    const { name, days_since_contact, email, bio, goal, next_due_date } = Matched_id
    const { 
        collection,
        setCollection} = useContext(TimelineContexto)
   
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-4 container mx-auto gap-10 mt-20'>

                <div className='leftSide space-y-10 col-span-1'>
                    <div className='card text-center'>
                        <FriendCard friend={Matched_id}></FriendCard>
                        <p>"{bio}"</p>
                        <p>{email}</p>
                    </div>
                    <div id='card'>
                        <div><button className='px-10 py-3 mb-4 w-full btn'>
                            <RiNotificationSnoozeFill></RiNotificationSnoozeFill>
                            <p>Snooze 2 weeks</p>
                        </button></div>
                        <div><button className='px-10 py-3 mb-4 w-full btn'>
                            <IoIosArchive />
                            <p>Archive</p>
                        </button></div>
                        <div><button className='px-10 py-3 mb-4 w-full btn'>
                            <AiTwotoneDelete />
                            <p>Delete</p>
                        </button></div>
                    </div>
                </div>
                <div className='righSide grid grid-rows-3 col-span-3'>
                    <div className='statsCard grid grid-cols-1 lg:grid-cols-3 gap-3' id='stateCarddetail'>
                        <div>
                            <h1>{days_since_contact}</h1>
                            <p>Day Since Contact</p>
                        </div>
                        <div>
                            <h1>{goal}</h1>
                            <p>Goal (Days)</p>
                        </div>
                        <div>
                            <h1>{next_due_date}</h1>
                            <p>Next Due</p>
                        </div>

                    </div>
                    <div className='goal my-10 p-3' style={{ boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.08)'}}>
                        <div className='flex justify-between'>
                            <h1>Relationship Goal</h1>
                            <button className='btn'>Edit</button>
                        </div>
                        <h1>Connected every<span> {goal} Days</span> </h1>
                    </div>
                    <div className='function p-3' style={{boxShadow : '0px 1px 6px 0px rgba(0, 0, 0, 0.08)'}}>
                        <h1 className='font-bold mb-2'>Quick check IN</h1>
                        <div className='grid grid-cols-3 gap-3'>
                            <button className='btn p-10' onClick={() =>  {const obj = {...Matched_id,mode : 'call'};setCollection([...collection,obj]);toast(`${name} is timelined`)} }>
                                <img src={Call} />
                                <span>Call</span>
                            </button>
                            <button className='btn p-10' onClick={() => {const obj = {...Matched_id,mode : 'text'};setCollection([...collection,obj]);toast(`${name} is timelined`)}}>
                                <img src={Text} />
                                <span>Text</span>
                            </button>
                            <button className='btn p-10' onClick={() => {const obj = {...Matched_id,mode : 'video'};setCollection([...collection,obj]);toast(`${name} is timelined`)}}>
                                <img src={Video} />
                                <span>Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
         <ToastContainer />
        </>

    );
};

export default FriendDetail;

