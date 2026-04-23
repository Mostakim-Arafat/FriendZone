import React from 'react';
import { Link } from 'react-router';
const FriendCard = ({friend}) => {
    const {id,name,picture,days_since_contact,status,tags} = friend
    return (
        <Link to={`/detail/${id}`} className="card bg-base-100 w-auto shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={picture}
                    alt={name}
                    className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-xl">{name}</h2>
                <p className='text-sm text-[#64748B]'>{days_since_contact}d ago</p>
                <div className='flex gap-2'>
                {
                    tags.map( (i,ind) => <div key={ind} className='p-1 rounded-xl bg-green-200 text-sm h-fit'>{i}</div>)
                }
                </div>
                <div className={` p-1 rounded-md text-white font-semibold ${status === 'Almost due' ? 'bg-yellow-400' : status === 'on track' ? 'bg-green-600' : 'bg-red-500'}`}>
                    {status}
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;