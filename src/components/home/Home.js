import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import HomeStyling from './HomeStyling.css';

import cover from '../../img/cover.png'
const Home = () => {
    return (
        <div>
            <ReactBootStrap.Image src={cover} fluid style={{paddingBottom: '15px'}}/>
            <div className='text-center' style={{backgroundColor: 'white', padding: '30px 30px'}}>
                <h1 style={{fontWeight: 'bold'}} className='names'>Lynn Powell <br className='d-md-none'/>& <br className='d-md-none'/>Yasmin Menchaca</h1>
                <h5 className='covid'>In light of COVID-19, we wanted to let you know our wedding is going forward as planned. As always,
                    your health and safety are our top priority. We will have a smaller, more intimate wedding
                    consisting of close friends and family members.
                    We have reached out to those who are able to join us.</h5>
            </div>
            <div className='text-center' style={{color: 'white', padding: '30px 30px'}}>
                <h1 style={{fontWeight: 'bold'}} className='date'>JANUARY 17, 2021</h1>
                <h6>SAN ANTONIO, TEXAS</h6>
            </div>
        </div>
    );
}

export default Home;