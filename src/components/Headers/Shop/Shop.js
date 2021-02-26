import React, { useState } from 'react';
import Product from '../product/Product';

import fakeData from './../../../fakeData/index';
import './Shop.css';
import Card from './../card/Card';

const Shop = () => {
        const TenFakeData=fakeData.slice(0,10);
        const [products,setproducts]=useState(TenFakeData);
        const [card,setcard]=useState([]);
        const handleAddProduct=(product)=>{
            const newcard=[...card,product];
            setcard(newcard);
        }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd=><Product 
                    product={pd}
                    handleAddProduct={handleAddProduct}>
                    </Product>)
                }
            </div>
            <div className="card-container">
               <Card card={card}></Card>
            </div>
            
        </div>
    );
};

export default Shop;