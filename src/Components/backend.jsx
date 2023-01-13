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
              <a id='openBootcamp' className="container1" href={'https://community.open-bootcamp.com/user/eltonjitiako/certificaciones/64810b40-cd34-49af-a501-a92d4dae77b9'} target='_blank' rel='noreferrer'>
                <div className="container2">
                  <FaJava/>
                </div>
                <div className="container3">
                  <h3>Java Avanzado</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2023-2023</h4>
                </div>
              </a>
              <hr />
              <a id='openBootcamp' className="container1" href={'https://community.open-bootcamp.com/user/eltonjitiako/certificaciones/c6364cd1-8355-4f01-b508-16b0aa2e06dc'} target='_blank' rel='noreferrer'>
                <div className="container2">
                  <FaJava />
                </div>
                <div className="container3">
                  <h3>Java Basico</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2022</h4>
                </div>
              </a>
              <hr />
              <a id='openBootcamp' className="container1" href={'https://community.open-bootcamp.com/user/eltonjitiako/certificaciones/a2ab0b06-01e4-4d40-8e13-2dd36c3cf622'} target='_blank' rel='noreferrer'>
                <div className="container2">
                  <SiSpring />
                </div>
                <div className="container3">
                  <h3>Spring</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2023</h4>
                </div>
              </a>
              <hr />
              <a id='openBootcamp' className="container1" href={'https://community.open-bootcamp.com/user/eltonjitiako/certificaciones/51adeae5-0452-4a30-bc40-733b48a1ff8d'} target='_blank' rel='noreferrer'>
                <div className="container2">
                  <FaGitAlt />
                </div>
                <div className="container3">
                  <h3>Git</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2022</h4>
                </div>
              </a>
              <hr />
              <a id='openBootcamp' className="container1" href={'https://community.open-bootcamp.com/user/eltonjitiako/certificaciones/fa7248f3-ef1a-4ddf-a480-f4ec50d404e3'} target='_blank' rel='noreferrer'>
                <div className="container2">
                  <FaAward />
                </div>
                <div className="container3">
                  <h3>Introduccion a la Programacion</h3>
                  <h4>Open Bootcamp</h4>
                  <h4>2022-2022</h4>
                </div>
              </a>
              <hr />
              <a id='openBootcamp' className="container1" href={'https://community.open-bootcamp.com/user/eltonjitiako/certificaciones/a882226c-094f-4ea9-a08e-0bbfaf5aa933'} target='_blank' rel='noreferrer'>
                <div className="container2">
                  <FaAward />
                </div>
                <div className="container3">
                  <h3>Conceptos de la Programacion</h3>
                  <h4>Open Bootcamp</h4>
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

export default Backend