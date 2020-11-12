import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import HttpsRedirect from 'react-https-redirect';

const SaveTheDate = () => {
    return (
        <HttpsRedirect>
            <ReactBootStrap.Container fluid
                                      className='text-center'
                                      style={{backgroundColor: 'white', padding: '10px'}}>
                <h1 style={{fontWeight: 'bold'}}>Save The Date</h1>
                <hr style={{border: '1px solid black'}}/>
                {/*<h2>Coming Soon</h2>*/}
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfvMVsSC5VNWq3fpZuIB8MKHnaj1vFcREcw-st1fuNo-K4ZvQ/viewform?embedded=true"
                    style={{backgroundColor: "white"}}
                    width="100%"
                    height="1100px"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0">
                    Loading...
                </iframe>
            </ReactBootStrap.Container>
        </HttpsRedirect>
    );
}

export default SaveTheDate;