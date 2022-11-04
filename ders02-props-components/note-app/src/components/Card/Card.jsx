import React from 'react';
import style from './Card.module.css';


const Card = ({ not, index, remove }) => {
    return (
        <div className={style.cardContainer}>
            <div className={style.cardContent}>
                <h3 className={style.header}>{not.baslik}</h3>
                <p className={style.note}>{not.not}</p>
                <div className={style.removeButton}>
                    <button onClick={() => remove(index)}>Sil</button>
                </div>
            </div>
        </div>
    )
}

export default Card;