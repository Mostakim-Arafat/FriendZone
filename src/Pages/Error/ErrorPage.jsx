import React from 'react';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='bg-base-200 container mx-auto rounded-md text-center h-[300px] space-y-3 flex flex-col items-center justify-center mt-10'>
            <h1 className='font-extrabold text-4xl text-red-500'>404</h1>
           <h1 className='font-bold text-2xl'>No page found</h1>
          
           <Link to={'/'} className='bg-[#244D3F] p-1 rounded-md text-white'>Go Home</Link>
           

        </div>
    );
};

export default ErrorPage;