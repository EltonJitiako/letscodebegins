import React from "react";
import { FaArrowAltCircleLeft, FaJava, FaAward, FaGitAlt } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import '../App.css';
import waves from '../movies/nikita2.mp4';
import { Link } from "react-router-dom";


const Backend = () => {
    return (
      <div>
      <video src={waves} autoPlay loop muted />
      <div className="content2">
        <div className={"col-lg-1 col-md-1 col-sm-1 col-xs-1 col-xxs-1 border1"}>
          <Link id='back' to={'/'} rel='noreferrer'><FaArrowAltCircleLeft /><p id="textDescription">Back</p></Link>
        </div>
        <div className="row2">
          <div className="border2">
            <h1 className='pages'>Backend certificates</h1>
          </div>
          <div className="border3">
            <div className="border4">
              <Link id='openBootcamp' className="container1" to={'/backendjavaa'} target='_blank'>
                <div className="container2">
                  <FaJava/>
                </div>
                <div className="container3">
                  <h3>Java Avanzado</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2023-2023</h4>
                </div>
              </Link>
              <hr />
              <Link id='openBootcamp' className="container1" to={'/backendjavab'} target='_blank'>
                <div className="container2">
                  <FaJava />
                </div>
                <div className="container3">
                  <h3>Java Basico</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2022</h4>
                </div>
              </Link>
              <hr />
              <Link id='openBootcamp' className="container1" to={'/backendspring'} target='_blank'>
                <div className="container2">
                  <SiSpring />
                </div>
                <div className="container3">
                  <h3>Spring</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2023</h4>
                </div>
              </Link>
              <hr />
              <Link id='openBootcamp' className="container1" to={'/backendgit'} target='_blank'>
                <div className="container2">
                  <FaGitAlt />
                </div>
                <div className="container3">
                  <h3>Git</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2022</h4>
                </div>
              </Link>
              <hr />
              <Link id='openBootcamp' className="container1" to={'/backendintro'} target='_blank'>
                <div className="container2">
                  <FaAward />
                </div>
                <div className="container3">
                  <h3>Introduccion a la Programacion</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2022</h4>
                </div>
              </Link>
              <hr />
              <Link id='openBootcamp' className="container1" to={'/backendconcep'} target='_blank'>
                <div className="container2">
                  <FaAward />
                </div>
                <div className="container3">
                  <h3>Conceptos de la Programacion</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2022</h4>
                </div>
              </Link>
            </div>
          </div> 
        </div>
      </div>
    </div>
    )
}

export default Backend