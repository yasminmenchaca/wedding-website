import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import cover from '../img/cover.png'

const Home = () => {
    return (
        <div>
            <div className='container py-2'>
                <ReactBootStrap.Image src={cover} fluid/>
            </div>
            <div className='text-center' style={{backgroundColor: 'white', padding: '50px 50px'}}>
                <h1>Lynn Powell & Yasmin Menchaca</h1>
            </div>
            <div className='text-center' style={{color: 'white', padding: '50px 50px'}}>
                <h2>JANUARY 17, 2021</h2>
                <h4>SAN ANTONIO, TEXAS</h4>
            </div>
        </div>
    );
}

export default Home;