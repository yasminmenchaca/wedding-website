import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const Watch = () => {
    return (
        <ReactBootStrap.ResponsiveEmbed aspectRatio="16by9">
            <ReactTwitchEmbedVideo channel="yasminismean" layout="video"/>
        </ReactBootStrap.ResponsiveEmbed>

    );
}

export default Watch;