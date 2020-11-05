import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const Watch = () => {
    return (
        <ReactBootStrap.Container fluid
                                  className='text-center'
                                  style={{backgroundColor: 'white', padding: '10px'}}>
            <h1 style={{fontWeight: 'bold'}}>Watch Online</h1> <hr style={{border: '1px solid black'}}/>
            {/*<ReactBootStrap.ResponsiveEmbed aspectRatio="16by9" className='d-none d-md-block'>*/}
            {/*    <ReactTwitchEmbedVideo channel="yasminismean" layout="video"/>*/}
            {/*</ReactBootStrap.ResponsiveEmbed>*/}

            {/*<a href="https://www.twitch.tv/yasminismean" className="btn btn-dark btn-lg btn-block d-md-none" target="_blank" role="button">Click Here to Watch Online</a>*/}
            <h5>The stream will start around 2pm CST on January 17, 2021 and can be viewed at the link below.</h5>
            <a href="https://www.twitch.tv/yasminismean" className="btn btn-dark btn-lg" target="_blank" role="button">Click Here to Watch Online</a>

        </ReactBootStrap.Container>
    );
}

export default Watch;