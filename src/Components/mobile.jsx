import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { TbCSharp } from "react-icons/tb";
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
              <h1 className='pages'>Mobile certificates</h1>
            </div>
            <div className="border3">
              <div className="border4">
                <a id='dotnet' className="container1" href={'www'} target='_blank' rel='noreferrer'>
                  <div className="container2">
                    <SiDotnet />
                  </div>
                  <div className="container3">
                    <h3>.NET MAUI</h3>
                    <h4>In progress....</h4>
                    <h4>XXX</h4>
                  </div>
                </a>
                <hr />
                <a id='microsoft' className="container1" href={'https://learn.microsoft.com/en-us/training/achievements/learn.languages.csharp-first-steps.trophy?username=EltonLuizJitiako-8407'} target='_blank' rel='noreferrer'>
                  <div className="container2">
                    <TbCSharp />
                  </div>
                  <div className="container3">
                    <h3>C#</h3>
                    <h4>Microsoft</h4>
                    <h4>2023-2023</h4>
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