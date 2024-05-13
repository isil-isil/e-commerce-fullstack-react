import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSignUp = () => {
    // Mettre à jour l'état pour afficher le message de remerciement
    setShowMessage(true);

    // Réinitialiser l'état après 5 secondes
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className="newsletter">
      <h1>NEWSLETTER</h1>
      <p>Inscrivez-vous pour être au courant des nouveautés et promo.</p>{showMessage && (
        <p className="signup-message-merci">Merci pour votre inscription !</p>
      )}
      <div>
        <input type="email" placeholder="Votre adresse mail" />
        <button onClick={handleSignUp}>S'inscrire</button>
      </div>
      
    </div>
  );
};

export default NewsLetter;
