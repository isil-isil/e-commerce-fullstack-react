import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price} €
          </div>
          <div className="productdisplay-right-price-new">
            {product.new_price} €
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est
          blanditiis quam suscipit quaerat fugiat officiis iure, ipsam eligendi
          cumque. Repellendus, cum sapiente corporis rem voluptatem ullam neque!
          Pariatur, unde!
        </div>
        <div className="productdisplay-right-size">
          <h1>Selectionner la taille</h1>
          <div className="productdisplay-right-sizes">
            <div className="grise-b">S</div>
            <div className="grise-b">M</div>
            <div className="grise-l">L</div>
            <div className="grise-b">XL</div>
            <div className="grise-b">XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          AJOUTER AU PANIER
        </button>
        <p className="productdisplay-right-category">
          <span>Categorie : </span>Haut, T-Shirt, Lorem
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>Moderne, Nouveau
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
