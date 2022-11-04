import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../stores/slices/checkoutSlice';
import Card from "../Card/Card";

const Products = () => {
  const { datas: products, loading, errors } = useSelector(state => state.products);
  const dispatch = useDispatch();


  const addToCart = (product) => {
    dispatch(addProduct(product));
  }
  useEffect(() => {
    console.log(errors);
  }, [])


  return (
    <div className='row'>
      {
        loading
          ? <div><h1>Ürünler Yükleniyor</h1></div>
          : products.map(product => <Card product={product} key={product.id} addToCart={addToCart} />)
      }
    </div>
  )
}

export default Products