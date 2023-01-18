import React from "react";
import { FaArrowAltCircleLeft, FaGithub, FaCodepen } from "react-icons/fa";
import '../App.css';
import waves from '../movies/nikita2.mp4';
import { Link } from "react-router-dom";


const Portifolio = () => {
    return (
      <div>
      <video src={waves} autoPlay loop muted />
      <div className="content2">
        <div className={"col-lg-1 col-md-1 col-sm-1 col-xs-1 col-xxs-1 border1"}>
          <Link id='back' to={'/'} rel='noreferrer'><FaArrowAltCircleLeft /><p id="textDescription">Back</p></Link>
        </div>
        <div className="row2">
          <div className="border2">
            <h1 className='pages'>Portifolio</h1>
          </div>
          <div className="border3">
            <div className="border4">
                <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                    <a id='github' href={'https://github.com/EltonJitiako'} target='_blank' rel='noreferrer' style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}><FaGithub/><p id="textDescription">GitHub</p></a>
                </div>
                <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                    <a id='codepen' href={'https://codepen.io/EltonJitiako'} target='_blank' rel='noreferrer' style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}><FaCodepen/><p id="textDescription">Codepen</p></a>
                </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
    )
}

export default Portifolio