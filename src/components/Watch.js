import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const Watch = () => {
    return (
        <ReactBootStrap.Container fluid
                                  className='text-center'>
            <ReactBootStrap.ResponsiveEmbed aspectRatio="16by9">
                <iframe src="https://player.twitch.tv/?channel=yasminismean&parent=localhost" frameBorder="0"
                        allowFullScreen="true" scrolling="no" height="378" width="620"/>
            </ReactBootStrap.ResponsiveEmbed>
        </ReactBootStrap.Container>
    );
}

export default Watch;