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
            <FaGithub />
            <FaCodepen /> 
            <FaFreeCodeCamp /> 
            <FaUniversity /> 
            <FaLinux />
            <FaFacebook /> 
            <FaInstagram /> 
            <FaLinkedin /> 
            <FaWhatsapp /> 
            <FaTelegram /> 
            <FaEnvelope /> 
            <FaPhoneSquare /> 
            </div>

        </div>
    </div>
  );
}}

export default App;
