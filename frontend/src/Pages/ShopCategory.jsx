import React, { useState, useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import Popular from "../Components/Popular/Popular";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [tri, setTri] = useState('prix-croissant');
  const [recherche, setRecherche] = useState('');

  // Fonction pour trier les produits en fonction de l'option sélectionnée
  const trierProduits = (option) => {
    if (option === 'prix-croissant') {
      return all_product.slice().sort((a, b) => a.new_price - b.new_price);
    } else if (option === 'prix-decroissant') {
      return all_product.slice().sort((a, b) => b.new_price - a.new_price);
    }
    // Par défaut, retourner les produits non triés
    return all_product;
  };

  const handleChangeTri = (event) => {
    setTri(event.target.value);
  };

  const handleChangeRecherche = (event) => {
    setRecherche(event.target.value);
  };

  // Fonction pour compter le nombre de produits dans une catégorie donnée
  const countProductsByCategory = (category) => {
    return all_product.filter(item => item.category === category).length;
  };

  // Fonction pour filtrer les produits en fonction de la catégorie et du terme de recherche
  const filterProduits = (produits) => {
    return produits.filter(item => {
      // Vérifie si le nom du produit contient le terme de recherche et appartient à la catégorie spécifiée
      return item.category === props.category && item.name.toLowerCase().includes(recherche.toLowerCase());
    });
  };

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>{countProductsByCategory(props.category)}</span> résultats
        </p>
        <div className="shopcategory-sort">
          Trier par :&nbsp;
          <select className="souris-point" value={tri} onChange={handleChangeTri}>
            <option value="prix-croissant">Prix croissant</option>
            <option value="prix-decroissant">Prix décroissant</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-recherche">
        <input type="text" placeholder="Rechercher..." value={recherche} onChange={handleChangeRecherche} />
      </div>
      <div className="shopcategory-products">
        {filterProduits(trierProduits(tri)).map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      {/* <div className="shopcategory-loadmore">Explorer plus</div> */}
      <Popular />
    </div>
  );
};

export default ShopCategory;
