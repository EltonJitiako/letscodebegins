import React from "react";
import { FaArrowAltCircleLeft, FaJava, FaAward, FaGitAlt } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import '../App.css';
import waves from '../movies/nikita2.mp4';
import { Link } from "react-router-dom";
import unip from "../imagens/pngwing.com.png";
import unesp from "../imagens/pngwing.com (1).png";


const University = () => {
    return (
      <div>
      <video src={waves} autoPlay loop muted />
      <div className="content2">
        <div className={"col-lg-1 col-md-1 col-sm-1 col-xs-1 col-xxs-1 border1"}>
          <Link id='back' to={'/'} rel='noreferrer'><FaArrowAltCircleLeft /><p id="textDescription">Back</p></Link>
        </div>
        <div className="row2">
          <div className="border2">
            <h1 className='pages'>Universities</h1>
          </div>
          <div className="border3">
            <div className="border4">
              <Link id='openBootcamp' className="container1" to={'/unip'} target='_blank'>
                <div className="container2">
                  <img src={unip} alt="UNIP" style={{width: '100px', height: '100px'}}></img>
                </div>
                <div className="container3">
                  <h3>Information Technology</h3>
                  <h4>UNIP</h4>
                  <h4>2011-2013</h4>
                </div>
              </Link>
              <hr />
              <Link id='openBootcamp' className="container1" to={'/unesp'} target='_blank'>
              <div className="container2">
                  <img src={unesp} alt="UNESP" style={{width: '100px', height: '100px'}}></img>
                </div>
                <div className="container3">
                  <h3>Science Computing</h3>
                  <h4>UNESP</h4>
                  <h4>2007-2011</h4>
                </div>
              </Link>
            </div>
          </div> 
        </div>
      </div>
    </div>
    )
}

export default University