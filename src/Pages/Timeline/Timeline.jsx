import React from 'react';
import TimeCards from '../../Component/TimeCards';
import { TimelineContexto } from '../../Context/TimelineContext';
import { useContext } from 'react';
import ErrorPage from '../Error/ErrorPage'
import { useState } from 'react';


const Timeline = () => {
    const { collection } = useContext(TimelineContexto)
    const [mode, setmode] = useState('all')
    const filtered = mode === 'all' ? collection : collection.filter(i => i.mode === mode)
    console.log(filtered)
    return (
        <div className='container mx-auto space-y-4'>
            <h1 className='font-extrabold text-2xl'>Time Line</h1>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setmode('call')}><a>Call</a></li>
                    <li onClick={() => setmode('text')}><a>Text</a></li>
                    <li onClick={() => setmode('video')}><a>video</a></li>
                </ul>
            </div>
            <div>
                {
                    collection.length === 0 ? <ErrorPage></ErrorPage> : <TimeCards collection={filtered}></TimeCards>
                }
            </div>

        </div>
    );
};

export default Timeline;