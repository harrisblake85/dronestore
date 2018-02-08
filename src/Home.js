import React, {Component} from 'react';
import Service from './Service.js';


class Home extends Component{
  // as long as it all remains within return, return to a perfect component
  render(){
    return(
      <div className="main-content">
        <iframe className="video" title="Main Video" src="https://www.youtube.com/embed/QhCX2ypRDM0?rel=0" frameBorder="0" allowFullScreen></iframe>
        <h2 className="intro">If you like the view from the ground, you'll love it from the air!</h2>

        <div className="servicescontainer">


          <h2 className="serviceh2">Our Services</h2>

          <div className="services">
          <Service
            img = "https://i.imgur.com/0IEy7LE.jpg"
            service="VIDEO & PHOTOS"
            link = "/video&photos"
            description="Real estate listings are now using aerial photography and video to much more effectively show off a property.  Jefferson County is a client too, illustrating their parks."
            />
          <Service
            img = "https://i.imgur.com/W9d8Wjc.jpg"
            service="INSPECTIONS"
            link = "/inspections"
            description="Roof damage inspections are no longer dangerous, same for solar panels and more. Be confident in your future purchases!"
            />
          <Service
            img = "https://i.imgur.com/1wqN8rj.jpg"
            service="EVENTS"
            link = "/events"
            description="Drones at a wedding?  Why not at the rehearsal or the reception or during the photo sessions, sure! And if you have a unique venue there's no better way to show it!"
            />
          <Service
            img = "https://i.imgur.com/Bvu3Ba8.jpg"
            service="PRICING"
            link = "/pricing"
            description="We're very competitively priced in this area. While drone services vary from service to service you’ll find no better deal!"
            />
          </div>

        </div>

        <div className="homeabout">

        </div>




        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default Home;
