import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Headers/product/Product'
const ProductDetail = () => {
    const {productKey}=useParams();
    const product=fakeData.find(pd=>pd.key===productKey)
    return (
        <div>
            <h1>{productKey} is Comming Soon</h1>
            <Product DisplayAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;