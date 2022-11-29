import React, { Component } from 'react';
//Font Awsome
import { FaCodepen, FaFacebook, FaGithub, FaFreeCodeCamp, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneSquare, FaTelegram, FaLinux, FaUniversity } from "react-icons/fa";
import './App.css';
//Movie
import waves from './movies/nikita.mp4';


class App extends Component {
  render() {
  return (
    <div>
      <div className="overlay"></div>
        <video src={waves} autoPlay loop muted />
        <div className="content">
            <div className='row'>
            <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12"}>
                <h1 className='me'>ELTON</h1>
              </div>
              <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12"}>
                <h1 className='me'>JITIAKO</h1>
              </div>
            </div>
            <div className="row">
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaGithub />
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaCodepen /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaFreeCodeCamp /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaUniversity /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaLinux />
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaFacebook /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaInstagram /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaLinkedin />
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaWhatsapp /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaTelegram /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaEnvelope /> 
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4"}>
                <FaPhoneSquare /> 
              </div>
              </div>
        </div>
    </div>
  );
}}

export default App;
