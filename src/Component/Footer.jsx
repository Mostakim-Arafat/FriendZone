import React from 'react';
import fb from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-3xl mx-auto pt-10'>
            <div className='text-white text-center flex flex-col justify-center items-center border-b-2 border-green-700'>
                <p className='font-extrabold text-4xl mb-5'>KeenKeeper</p>
                <p className='text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <p className='font-bold my-5'>Social Links</p>
                    <div className='flex gap-4 mb-2'>
                        <div className='rounded-full p-1 bg-white h-10 w-10'><img src={fb} alt="" /></div>
                        <div className='rounded-full p-1 bg-white h-10 w-10'><img src={insta} alt="" /></div>
                        <div className='rounded-full p-1 bg-white h-10 w-10'><img src={twitter} alt="" /></div>
                        
                    </div>
                </div>
            </div>
            <div className='text-gray-500 flex justify-around py-2'>
                <p>&copy; 2026 keepKeeper. All rights reserved</p>
                <div className='flex gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;