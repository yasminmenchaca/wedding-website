import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const Registry = () => {
    return (
        <ReactBootStrap.Container fluid
                                  className='text-center'
                                  style={{backgroundColor: 'white', padding: '10px'}}>
            <h1 style={{fontWeight: 'bold'}}>Registry</h1>
            <hr style={{border: '1px solid black'}}/>
            <h5>We've recently been asked for gift suggestions by friends and family. Please know that your presence on
                the day is more than enough, but for those who have expressed an interest, we've listed the charities
                below that are closest to our hearts. A contribution would be most appreciated in lieu of a gift.</h5>
            <br/>

            <ReactBootStrap.Row>
                <ReactBootStrap.Col sm>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="bottom" src="https://via.placeholder.com/500" />
                    </ReactBootStrap.Card><br />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col sm>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="bottom" src="https://via.placeholder.com/500" />
                    </ReactBootStrap.Card><br />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col sm>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="bottom" src="https://via.placeholder.com/500" />
                    </ReactBootStrap.Card><br />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col sm>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="bottom" src="https://via.placeholder.com/500" />
                    </ReactBootStrap.Card><br />
                </ReactBootStrap.Col>


            </ReactBootStrap.Row>
        </ReactBootStrap.Container>
    );
}

export default Registry;