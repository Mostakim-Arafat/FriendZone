
import React from 'react';
import FriendCard from './FriendCard';
import { use } from 'react';


const Friends = ({ data }) => {

    const FriendData = use(data)

    return (
        <div className='max-w-4xl mx-auto'>
            <h1 className='font-bold text-2xl'>Your friends</h1>
            <div className=' mt-10 mb-4 grid grid-cols-1 lg:grid-cols-4 gap-4 '>
                {
                    FriendData.map((i, index) => <FriendCard key={index} friend={i}></FriendCard>)
                }

            </div>
        </div>
    );
};

export default Friends;