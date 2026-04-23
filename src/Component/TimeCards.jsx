import React from 'react';
import TimeLineCard from './TimeLineCard';

const TimeCards = ({collection}) => {
      console.log(collection)
    return (
        <div>
         {
           collection.map( (i,index) => <TimeLineCard key={index} i={i}></TimeLineCard>)
         }   
        </div>
    );
};

export default TimeCards;