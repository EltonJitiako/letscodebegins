/*********** Version 1.0 ***********/
import React, { Component } from 'react';
//Font Awsome
import { FaCodepen, FaFacebook, FaGithub, FaFreeCodeCamp, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneSquare, FaTelegram, FaLinux, FaUniversity } from "react-icons/fa";
import './App.css';
//Movie
import waves from './movies/waves.mp4';

class App extends Component {
  render() {
  return (
    <div>
      <script type="text/javascript" src="wz_tooltip.js"></script>
      <div className="overlay"></div>
        <video src={waves} autoPlay loop muted />
        <div className="content">
            <div className="row">
              <h1 className='me'>Elton Jitiako</h1>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='github' href={'https://github.com/EltonJitiako'} target='_blank' rel='noreferrer'><FaGithub /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='codepen' href={'https://codepen.io/EltonJitiako'} target='_blank' rel='noreferrer'><FaCodepen /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='freeCodeCamp' href={'https://www.freecodecamp.org/fcc966dd265-203f-4783-b503-3b0774ad1e3a'} target='_blank' rel='noreferrer'><FaFreeCodeCamp /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='JHU' href={'notyet'} target='_blank' rel='noreferrer'><FaUniversity /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='LPI' href={'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000532255/jkm8wplmlt'} target='_blank' rel='noreferrer'><FaLinux /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='facebook' href={'https://www.facebook.com/elton.jitiako/'} target='_blank' rel='noreferrer'><FaFacebook /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='insta' href={'https://www.instagram.com/eltonjitiako/'} target='_blank' rel='noreferrer'><FaInstagram /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='linkedin' href={'https://www.linkedin.com/in/elton-luiz-jitiako-a175b723b/'} target='_blank' rel='noreferrer'><FaLinkedin /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='whatsapp' href={'https://wa.me/34611066740'} target='_blank' rel='noreferrer'><FaWhatsapp /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='telegram' href={'https://t.me/eltonjitiako'} target='_blank' rel='noreferrer'><FaTelegram /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='email' href='mailto:eltonjitiako@gmail.com?subject="link HTML'><FaEnvelope /></a>
              </div>
              <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
                <a id='phone' href="tel:+34611066740"><FaPhoneSquare /></a>
              </div>
              </div>
        </div>
    </div>
  );
}}

export default App;
