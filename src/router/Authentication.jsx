import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div>
            <Header></Header>
            <div className='my-15'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Authentication;