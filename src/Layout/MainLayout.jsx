import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';


const MainLayout = () => {
    return (
        <div >

            <div className='max-w-[1280px] p-8 text-center mx-auto'>
            <Navbar></Navbar>
            </div>
            <div className='max-w-[1280px] p-8 text-center mx-auto'>
            <Outlet></Outlet>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default MainLayout;