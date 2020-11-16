import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import HttpsRedirect from 'react-https-redirect'
import HomeStyling from './HomeStyling.css';

import cover from '../../img/cover.png'

const Home = () => {
    return (
        <HttpsRedirect>
            <div>
                <ReactBootStrap.Image src={cover} fluid style={{paddingBottom: '15px'}}/>
                <div className='text-center' style={{backgroundColor: 'white', padding: '30px 30px'}}>
                    <h1 style={{fontWeight: 'bold'}} className='names'>Lynn Powell <br className='d-md-none'/>& <br
                        className='d-md-none'/>Yasmin Menchaca</h1>
                    <h5 className='covid'>
                        For the safety of all of our loved ones we’ve decided to have a virtual wedding. We have reached out to those who are able to join us, and we look forward to celebrating in-person at a later date!
                    </h5>
                </div>
                <div className='text-center' style={{color: 'white', padding: '30px 30px'}}>
                    <h1 style={{fontWeight: 'bold'}} className='date'>JANUARY 17, 2021</h1>
                    <h5>SAN ANTONIO, TEXAS</h5>
                </div>
            </div>
        </HttpsRedirect>
    );
}

export default Home;