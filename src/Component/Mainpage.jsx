import React from 'react';
import { Outlet } from "react-router";
import Navbar from './Navbar'
import Footer from './footer';


const Mainpage = () => {
     
    return (
        <>
        <Navbar></Navbar>
             <Outlet></Outlet>
        <Footer></Footer>
        
        </>
    );
};

export default Mainpage;