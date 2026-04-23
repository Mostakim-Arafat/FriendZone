import React from 'react';
import Call from '../assets/call.png'
import Text from '../assets/text.png'
import Video from '../assets/video.png'

const TimeLineCard = ({ i }) => {
    const { name, next_due_date, mode } = i
    return (
        <div className='w-full border border-gray-300 rounded-md p-3 flex gap-3 items-center mb-5'>
            <p><img src={mode === 'call' ?  Call  : mode === 'text' ?  Text  :  Video } alt="" /></p>
            <div>
                <p><span className='font-bold'>{mode} </span><span className='text-gray-400'>With {name}</span></p>
                <p>{next_due_date}</p>
            </div>

        </div>
    );
};

export default TimeLineCard;