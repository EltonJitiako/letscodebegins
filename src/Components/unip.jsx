import React from "react";
import image from "../imagens/unip1.png";
import image2 from "../imagens/unip2.png";

const Unip = () => {
    return (
      <div>
        <img src={image} alt="Unip1" style={{width: '100%', height: '100%'}}></img>
        <img src={image2} alt="Unip2" style={{width: '100%', height: '100%'}}></img>
      </div>
    )
}
        
export default Unip