import React from "react";
//Font Awesome site: https://react-icons.github.io/react-icons/icons?name=fa
import { FaCodepen, FaFacebook, FaGithub, FaDesktop, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneSquare, FaTelegram, FaLinux, FaServer } from "react-icons/fa";
import '../App.css';
import waves from '../movies/nikita2.mp4';
//Router
import { Link } from "react-router-dom";


const Layout = () => {
    return (
      <div>
        <video src={waves} autoPlay loop muted />
        <div className="content">
          <div className="row">
            <h1 className='me'>Elton Jitiako</h1>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='github' href={'https://github.com/EltonJitiako'} target='_blank' rel='noreferrer'><FaGithub /><p id="textDescription">GitHub</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='codepen' href={'https://codepen.io/EltonJitiako'} target='_blank' rel='noreferrer'><FaCodepen /><p id="textDescription">Codepen</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <Link id='frontend' to={'/frontend'} rel='noreferrer'><FaDesktop /><p id="textDescription">Frontend</p></Link>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <Link id='backend' to={'/backend'} rel='noreferrer'><FaServer /><p id="textDescription">Backend</p></Link>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='LPI' href={'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000532255/jkm8wplmlt'} target='_blank' rel='noreferrer'><FaLinux /><p id="textDescription">Linux</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='facebook' href={'https://www.facebook.com/elton.jitiako/'} target='_blank' rel='noreferrer'><FaFacebook /><p id="textDescription">Facebook</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='insta' href={'https://www.instagram.com/eltonjitiako/'} target='_blank' rel='noreferrer'><FaInstagram /><p id="textDescription">Instagram</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='linkedin' href={'https://www.linkedin.com/in/elton-luiz-jitiako-a175b723b/'} target='_blank' rel='noreferrer'><FaLinkedin /><p id="textDescription">LinkedIn</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='whatsapp' href={'https://wa.me/34611066740'} target='_blank' rel='noreferrer'><FaWhatsapp /><p id="textDescription">Whatsapp</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='telegram' href={'https://t.me/eltonjitiako'} target='_blank' rel='noreferrer'><FaTelegram /><p id="textDescription">Telegram</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='email' href='mailto:eltonjitiako@gmail.com?subject="link HTML'><FaEnvelope /><p id="textDescription">Email</p></a>
            </div>
            <div className={"col-lg-1 col-md-2 col-sm-3 col-xs-4 col-xxs-4 border1"}>
              <a id='phone' href="tel:+34611066740"><FaPhoneSquare /><p id="textDescription">Phone</p></a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Layout