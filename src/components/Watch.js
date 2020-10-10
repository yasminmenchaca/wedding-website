import React from 'react';
import TwitchEmbed from 'react-twitch-embed';

const Watch = () => {
    return (

        <TwitchEmbed
            channel="yasminismean"
            id="yasminismean"
            theme="dark"
            muted
            onVideoPause={() => console.log(':(')}
        />

    );
}

export default Watch;