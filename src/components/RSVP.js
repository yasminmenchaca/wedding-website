import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import HttpsRedirect from 'react-https-redirect'

const Rsvp = () => {
    return (
        <HttpsRedirect>
            <ReactBootStrap.Container fluid
                                      className='text-center'
                                      style={{backgroundColor: 'white', padding: '10px'}}>
                <h1 style={{fontWeight: 'bold'}}>RSVP</h1>
                <hr style={{border: '1px solid black'}}/>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd4m2Pz1dE1dH4q8g0rH0gTIDcD8Bu68D8KiYAUy3I8MAr99g/viewform?embedded=true"
                    style={{backgroundColor: "white"}}
                    width="100%"
                    height="1310px"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0">
                    Loading...
                </iframe>
            </ReactBootStrap.Container>
        </HttpsRedirect>
    );
}

export default Rsvp;