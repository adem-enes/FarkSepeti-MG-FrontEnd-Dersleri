import React from 'react';
import style from "./Card.module.css";

const Card = ({ product, addToCart, removeFromCart, count }) => {

  const cardHandler = () => {
    addToCart && addToCart(product);
    removeFromCart && removeFromCart(product);
  }

  return (
    <div className={`col-lg-4 col-md-6 ${style.cardContainer}`}>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://www.farksepeti.com/Uploads/UrunResimleri/bitki-cayikaylaah-049.001.042-a6b6-e.jpg"
          className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className={`card-title ${style.cardHeader}`}>{product.urunIsmi}</h5>
          <p className={`card-text ${style.cardText}`}>{product.urunKodu}</p>
          <div className="d-flex">
            <button className={"btn " + (addToCart ? "btn-primary" : "btn-danger")} onClick={cardHandler}>{
              addToCart
                ? "Sepete Ekle" : "Kaldır"} {count && <span>{count}</span>}</button>
            <p className="card-text" style={{ paddingLeft: "30px" }}>{product.fiyat}TL</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Card;