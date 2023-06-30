import React from "react";
import { FaArrowAltCircleLeft, FaUniversity } from "react-icons/fa";
import '../App.css';
import waves from '../movies/nikita2.mp4';
import { Link } from "react-router-dom";

const Mobile = () => {
    return (
      <div>
        <video src={waves} autoPlay loop muted />
        <div className="content2">
          <div className={"col-lg-1 col-md-1 col-sm-1 col-xs-1 col-xxs-1 border1"}>
            <Link id='back' to={'/'} rel='noreferrer'><FaArrowAltCircleLeft /><p id="textDescription">Back</p></Link>
          </div>
          <div className="row2">
            <div className="border2">
              <h1 className='pages'>Master certificate</h1>
            </div>
            <div className="border3">
              <div className="border4">
                <a id='NETT' className="container1" href={'/'} target='_blank' rel='noreferrer'>
                  <div className="container2">
                    <FaUniversity />
                  </div>
                  <div className="container3">
                    <h3>Master DWA</h3>
                    <h4>NETT Digital School</h4>
                    <h4>2023-In progress....</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Mobile