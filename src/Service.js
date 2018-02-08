import React from 'react';
import {Link} from 'react-router-dom';
const Service = (props) => {
  return(
    <div className="service">
      <Link to={props.link}>
      <img src={props.img} alt="Loading.."></img>
      <h4>{props.service}</h4>
      </Link>
      <p>{props.description}</p>
      <hr className="opthr"></hr>
      <br></br>
    </div>
  )
}

export default Service;
