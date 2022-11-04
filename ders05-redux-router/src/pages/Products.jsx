import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../components/Product/productSlice';
import { Products as FSProducts } from "../components";

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <div>
            <FSProducts />
        </div>
    )
}

export default Products;