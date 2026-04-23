import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const TimelineContexto = createContext()


const TimelineContext = ({children}) => {
    
     const [collection,setCollection] = useState([])
    
     const obj = {
        collection,
        setCollection
     }

    return <>
     <TimelineContexto.Provider value={obj}>
        {children}
        </TimelineContexto.Provider>
    
    </>
};

export default TimelineContext;