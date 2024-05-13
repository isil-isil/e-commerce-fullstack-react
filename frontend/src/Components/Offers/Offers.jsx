import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Envie de - 0,1 % ?</h1>
        <h1>Devenez membre !</h1>
        <p>Abonnez-vous maintenant pour profiter d'offres spéciales, d'événements exclusifs et bien plus encore.</p>
        {/* <button>J'en profite !</button> */}
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
    
  );
};

export default Offers;
