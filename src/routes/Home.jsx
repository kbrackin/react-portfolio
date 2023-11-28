import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <div className="Home">
            <h3>My name is Kevin Brackin</h3>
            <h5>Full Stack developer</h5>
            <TypeAnimation
                sequence={[
                // Same substring at the start will only be typed out once, initially
                'MongoDB',
                2000, // wait 2s before replacing 
                'Express.js',
                2000,
                'React.js',
                2000,
                'Node.js',
                2000,
                'HTML',
                2000,
                'CSS',
                2000,
                'JavaScript',
                2000,
                'API Integration',
                2000,
                'jQuery',
                2000,
                'MySQL',
                2000
                ]}
                wrapper="span"
                speed={25}
                style={{ fontSize: '2em', display: 'inline-block' }}
                className="animation"
                repeat={Infinity}
            />
        </div>
    )
}

export default Home