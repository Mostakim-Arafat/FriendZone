import React from 'react';
import Banner from '../../Component/Banner';
import Friends from '../../Component/Friends';
import { Suspense } from 'react';

const Home = () => {
      const data = fetch('/public/Data.json').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={
                <div className='flex justify-center items-center my-10'>  
                <span className="loading loading-bars loading-xl"></span>
                </div>}>
            <Friends data={data}></Friends>
            </Suspense>
            
        </div>
    );
};

export default Home;