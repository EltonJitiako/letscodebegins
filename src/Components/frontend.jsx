import React from "react";
import { FaArrowAltCircleLeft, FaFreeCodeCamp, FaUniversity } from "react-icons/fa";
import '../App.css';
import waves from '../movies/nikita2.mp4';
import { Link } from "react-router-dom";

const Frontend = () => {
    return (
      <div>
        <video src={waves} autoPlay loop muted />
        <div className="content2">
          <div className={"col-lg-1 col-md-1 col-sm-1 col-xs-1 col-xxs-1 border1"}>
            <Link id='back' to={'/'} rel='noreferrer'><FaArrowAltCircleLeft /><p id="textDescription">Back</p></Link>
          </div>
          <div className="row2">
            <div className="border2">
              <h1 className='pages'>Frontend certificates</h1>
            </div>
            <div className="border3">
              <div className="border4">
                <a id='freeCodeCamp' className="container1" href={'https://www.freecodecamp.org/certification/fcc966dd265-203f-4783-b503-3b0774ad1e3a/javascript-algorithms-and-data-structures'} target='_blank' rel='noreferrer'>
                  <div className="container2">
                    <FaFreeCodeCamp />
                  </div>
                  <div className="container3">
                    <h3>Javascript Algorithms and Data Structures</h3>
                    <h4>freeCodeCamp</h4>
                    <h4>2022-2022</h4>
                  </div>
                </a>
                <hr />
                <a id='freeCodeCamp' className="container1" href={'https://www.freecodecamp.org/certification/fcc966dd265-203f-4783-b503-3b0774ad1e3a/front-end-development-libraries'} target='_blank' rel='noreferrer'>
                  <div className="container2">
                    <FaFreeCodeCamp />
                  </div>
                  <div className="container3">
                    <h3>Front end Development Libraries</h3>
                    <h4>freeCodeCamp</h4>
                    <h4>2022-2022</h4>
                  </div>
                </a>
                <hr />
                <a id='JHU' className="container1" href={'https://coursera.org/share/f5f172288d6a0e6897e011ad179ff8a7'} target='_blank' rel='noreferrer'>
                  <div className="container2">
                    <FaUniversity />
                  </div>
                  <div className="container3">
                    <h3>Front end Development Libraries</h3>
                    <h4>Johns Hopkins University</h4>
                    <h4>2022-2022</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Frontend