import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const Rsvp = () => {
    return (


    <ReactBootStrap.Container fluid
                              className='text-center'
                              style={{backgroundColor: 'white', padding: '10px'}}>
        <h1 style={{fontWeight: 'bold'}}>RSVP</h1> <hr style={{border: '1px solid black'}}/>
        <h2>Coming Soon</h2>
        {/*<iframe*/}
        {/*    src="https://docs.google.com/forms/d/e/1FAIpQLSekVYwSvcaDqne8DWcA6cBirkj2EHvCROGcssnnvrPKUvA9lA/viewform?embedded=true"*/}
        {/*    style={{backgroundColor: "white"}}*/}
        {/*    width="100%"*/}
        {/*    height="3000px"*/}
        {/*    frameBorder="0"*/}
        {/*    marginHeight="0"*/}
        {/*    marginWidth="0">*/}
        {/*    Loading...*/}
        {/*</iframe>*/}
    </ReactBootStrap.Container>
    );
}

export default Rsvp;