import React from 'react';
import style from "./Card.module.css";

const Card = ({ product }) => {

  return (
    <div className={`col-lg-4 col-md-6 ${style.cardContainer}`}>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://www.farksepeti.com/Uploads/UrunResimleri/bitki-cayikaylaah-049.001.042-a6b6-e.jpg"
          className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className={`card-title ${style.cardHeader}`}>{product.name}</h5>
          <p className={`card-text ${style.cardText}`}>{product.description}</p>
          <div className="d-flex">
            <a href="#" className="btn btn-primary">Sepete Ekle</a>
            <p className="card-text" style={{ paddingLeft: "30px" }}>{product.price}TL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;