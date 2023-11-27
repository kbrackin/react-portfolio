import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <div className="Home">
            <br />
            <br />
            <br />
            <h3 className="homeText">My name is Kevin Brackin</h3>
            <h5 className="homeText">Full Stack developer</h5>
            <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'MongoDB',
          1000, // wait 1s before replacing 
          'Express.js',
          1000,
          'React.js',
          1000,
          'Node.js',
          1000,
          'HTML',
          1000,
          'JavaScript',
          1000,
          'jQuery',
          1000,
          'MySQL',
          1000,
          'I love to code!',
          1000
        ]}
        wrapper="span"
        speed={25}
        style={{ fontSize: '2em', display: 'inline-block', alignSelf: 'center' }}
        repeat={Infinity}
      />
        </div>
    )
}

export default Home