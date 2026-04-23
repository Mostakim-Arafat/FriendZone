import React from 'react';
import { TimelineContexto } from '../../Context/TimelineContext';
import { useContext } from 'react';
import ErrorPage from '../Error/ErrorPage'
import Chart from '../../Component/Chart';

const Stats = () => {
    const { collection } = useContext(TimelineContexto)
    return (
        <div className='container mx-auto my-5'>
            <h1 className='text-4xl font-bold mb-3'>Friendship Analytics</h1>
            <div className='border border-gray-400 rounded-md p-10 mb-10'>
                <p className='mb-5'>By Interaction Type</p>
                <div className='flex justify-center items-center'>
                    {
                        collection.length === 0 ? <ErrorPage></ErrorPage> : <Chart collection={collection}></Chart>
                    }
                </div>



            </div>

        </div>
    );
};

export default Stats;