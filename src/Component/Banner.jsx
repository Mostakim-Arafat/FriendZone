import React from 'react';
import { CiSquarePlus } from "react-icons/ci";
import Data from '../../public/Data.json'

const Banner = () => {
   const ontrack = Data.filter( i => i.status === 'on track')
    return (
        <div className='border-b-2 border-gray-200 max-w-4xl mx-auto mt-10 mb-4 pb-10 '>
            <div className='text-center flex justify-center items-center flex-col space-y-3'>
                <h1 className='text-4xl'>Friends to keep close in your life</h1>
                <p className='text-sm text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='bg-[#244D3F] p-2 rounded-md text-white flex gap-2 items-center my-3'><CiSquarePlus /> Add a Friend</button>
            </div>
            <div id='statCard' className='grid grid-cols-2 lg:grid-cols-4 mt-3'>
                 <div>
                    <h1>{Data.length}</h1>
                    <p>Total Friends</p>
                 </div>
                 <div>
                    <h1>{ontrack.length}</h1>
                    <p>On Track</p>
                 </div>
                 <div>
                    <h1>10</h1>
                    <p>Need Attention</p>
                 </div>
                 <div>
                    <h1>10</h1>
                    <p>Intersection This Month</p>
                 </div>
            </div>
        </div>
    );
};

export default Banner;