import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import { removeProduct } from "../stores/slices/checkoutSlice";

const Checkout = () => {
  const { datas: cardItems } = useSelector(state => state.cardItems);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(removeProduct(product));
  }
  return (
    <div className='row'>
      {
        cardItems.length === 0
          ? <div> <h1> Sepette Ürün Bulunmuyor</h1></div>
          : cardItems.map(product => <Card product={product.data} key={product.data.id}
            removeFromCart={removeFromCart} count={product.count} />)}
    </div>
  )
}

export default Checkout;