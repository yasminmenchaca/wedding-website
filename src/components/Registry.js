import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

import foodBank from './../img/foodbank.png';
import casa from './../img/casa.png';
import arc from './../img/arc.png';
import boysGirls from './../img/boysandgirls.png';


const Registry = () => {
    return (
        <ReactBootStrap.Container fluid
                                  className='text-center'
                                  style={{backgroundColor: 'white', padding: '10px'}}>
            <h1 style={{fontWeight: 'bold'}}>Registry</h1>
            <hr style={{border: '1px solid black'}}/>
            <h5>We've recently been asked for gift suggestions by friends and family. Please know that your presence on
                the day is more than enough. For those who have expressed an interest, we've listed the charities
                below that are closest to our hearts. A contribution would be most appreciated in lieu of a gift.
            </h5>
            <br/>

            <ReactBootStrap.Row>

                <ReactBootStrap.Col sm>
                    <ReactBootStrap.Card>
                        <a href="https://paypal.me/pools/c/8u46oLyfbX" target='_blank'>
                            <ReactBootStrap.Card.Img variant="bottom" src={foodBank}/>
                        </a>
                    </ReactBootStrap.Card><br/>
                </ReactBootStrap.Col>

                <ReactBootStrap.Col sm>
                    <ReactBootStrap.Card>
                        <a href="https://paypal.me/pools/c/8u47soRFWj" target='_blank'>
                            <ReactBootStrap.Card.Img variant="bottom" src={casa}/>
                        </a>
                    </ReactBootStrap.Card><br/>
                </ReactBootStrap.Col>

                <ReactBootStrap.Col sm>
                    <ReactBootStrap.Card>
                        <a href="https://paypal.me/pools/c/8u4cirrmtN" target='_blank'>
                            <ReactBootStrap.Card.Img variant="bottom" src={arc}/>
                        </a>
                    </ReactBootStrap.Card><br/>
                </ReactBootStrap.Col>

                <ReactBootStrap.Col sm>
                    <ReactBootStrap.Card>
                        <a href="https://paypal.me/pools/c/8u4crOLQS5" target='_blank'>
                            <ReactBootStrap.Card.Img variant="bottom" src={boysGirls}/>
                        </a>
                    </ReactBootStrap.Card><br/>
                </ReactBootStrap.Col>


            </ReactBootStrap.Row>
        </ReactBootStrap.Container>
    );
}

export default Registry;