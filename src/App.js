import React, { Component } from 'react';
import { FaCodepen, FaFacebook, FaGithub, FaFreeCodeCamp, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneSquare, FaTelegram, FaLinux, FaUniversity } from "react-icons/fa";
import './App.css';
import waves from './movies/nikita.mp4';


class App extends Component {
  render() {
  return (
    <div>
      <div className="overlay"></div>
        <video src={waves} autoPlay loop muted />
        <div className="content">
            <h1>ELTON L. JITIAKO</h1>
            <div id="icons">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaGithub />
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaCodepen /> 
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaFreeCodeCamp /> 
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaUniversity /> 
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaLinux />
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaFacebook /> 
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaInstagram /> 
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaLinkedin />
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaWhatsapp /> 
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaTelegram /> 
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaEnvelope /> 
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <FaPhoneSquare /> 
              </div>
            </div>
        </div>
    </div>
  );
}}

export default App;
