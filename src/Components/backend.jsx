import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import '../App.css';
import waves from '../movies/nikita2.mp4';
import { Link } from "react-router-dom";

const Backend = () => {
    return (
        <div>
        <script type="text/javascript" src="wz_tooltip.js"></script>
        <div className="overlay"></div>
          <video src={waves} autoPlay loop muted />
          <div className="content">
          <Link id='home' to={'/'} target='_parent' rel='noreferrer'><FaArrowAltCircleLeft /><p id="textDescription">Back</p></Link>
              <div className="row">
              <h1 className='me'>Backend</h1>
                
                
                </div>
          </div>
        </div>
    )
}

export default Backend