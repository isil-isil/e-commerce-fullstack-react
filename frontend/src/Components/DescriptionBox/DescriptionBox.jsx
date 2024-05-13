import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [afficherAvis, setAfficherAvis] = useState(false);

  const toggleAvis = () => {
    setAfficherAvis(!afficherAvis);
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        {/* Utilisez une classe différente pour indiquer si la vue est la description ou les avis */}
        <div className={`descriptionbox-nav-box ${!afficherAvis ? 'active' : 'fade'}`} onClick={() => setAfficherAvis(false)}>Description</div>
        <div className={`descriptionbox-nav-box ${afficherAvis ? 'active' : 'fade'}`} onClick={() => setAfficherAvis(true)}>Avis (122)</div>
      </div>
      <div className="descriptionbox-description">
        {/* Afficher la description si afficherAvis est false, sinon afficher les avis */}
        {!afficherAvis && (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
              rerum maiores ut necessitatibus molestias tempore error illo
              exercitationem doloribus atque nulla, non vitae praesentium magnam
              ducimus excepturi ratione. Natus, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              maiores natus debitis, maxime fugiat autem aliquam accusamus dolor!
              Id, error nulla voluptatem dolorem quae molestiae quas aliquid. Quas,
              reprehenderit quisquam.
            </p>
          </>
        )}
        {afficherAvis && (
          <>
            {/* Exemple d'avis */}
            <div className="avis">
              <div className="avis-header">
                <h3>Excellent produit!</h3>
                <span>Par John Doe</span>
              </div>
              <p>
                Mais comment ai-je pu vivre sans ce produit ? Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="avis">
              <div className="avis-header">
                <h3>Très satisfaite!</h3>
                <span>Par Jane Smith</span>
              </div>
              <p>
                Ce article est exceptionnel, achetez-le ! Quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
