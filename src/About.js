import React from 'react';
import NewGif from './NewGif.js';

const About = () => {

  return(
    <div className="homeabout">
      <div className="story">
        <h2 className="homeh2">Our Team</h2>
        <NewGif/>
        <p> We are a group of <strong>college educated</strong>  individuals. What sets us apart is our <strong>devotion</strong> to the customer and our <strong>dedication</strong> to the product. We can get the pictures and video you need, just an <strong>email</strong>  or <strong>call</strong> away.</p>
      </div>

      <div className="qualifications">
        <h2 className="homeh2">Our Qualifications</h2>
        <NewGif />
        <span><strong>Degrees In Bussiness And Computer Science</strong> Blah Blah Blah</span>

        <NewGif />
        <span><strong>State Of The Art Drones And Cameras</strong> Blah Blah Blah</span>

        <NewGif />
        <span><strong>The Best Pilots Available</strong> Blah Blah Blah</span>

      </div>
    </div>
  )
}

export default About;
