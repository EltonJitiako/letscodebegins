import React, { Component } from 'react';
//Font Awsome
import { FaCodepen, FaFacebook, FaGithub, FaFreeCodeCamp, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneSquare, FaTelegram, FaLinux, FaUniversity } from "react-icons/fa";
import './App.css';
//Movie
import waves from './movies/nikita2.mp4';


class App extends Component {
  render() {
  return (
    <div>
      <div className="overlay"></div>
        <video src={waves} autoPlay loop muted />
        <div className="content">
            <div className="row">
              <h1 className='me'>ELTON JITIAKO</h1>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaGithub />
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaCodepen /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaFreeCodeCamp /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaUniversity /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaLinux />
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaFacebook /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaInstagram /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaLinkedin />
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaWhatsapp /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaTelegram /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaEnvelope /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <FaPhoneSquare /> 
              </div>
              </div>
        </div>
    </div>
  );
}}

export default App;
