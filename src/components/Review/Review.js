import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Card from '../Headers/card/Card';
import ReviewItem from '../ReviewItme/ReviewItem';
import './Review.css';
import HappyImage from '../../images/giphy.gif';
import './Review.css';
const Review = () => {
    const [cart,setcart]=useState([]);
    const [placeorder,setplaceorder]=useState(false);
    useEffect(()=>{
        const savecart=getDatabaseCart();
        const productkey=Object.keys(savecart);
       const productcart= productkey.map(key=>{
            const cartproducts=fakeData.find(pd=>pd.key===key);
            cartproducts.quantity=savecart[key];
            return cartproducts;
        })
        setcart(productcart);
    },[])
    const removeproduct=(keys)=>{
        const newcart=cart.filter(pd=>pd.key!==keys);
        setcart(newcart);
        removeFromDatabaseCart(keys)
    }
    const handleplaceOrder=()=>{
        setcart([]);
        processOrder();
        setplaceorder(true);
    }
    let happyorder;
    if(placeorder){
        happyorder=<img src={HappyImage} alt=''></img>
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(pd=><ReviewItem key={pd.key} removeproduct={removeproduct} product={pd}></ReviewItem>)
                }
                {
                    happyorder
                }
            </div>
            <div className='card-container'>
                    <Card card={cart}>
                        <button className='mainButton' onClick={handleplaceOrder}>
                            Place Order
                        </button>
                    </Card>
            </div>
        </div>
       
    );
};

export default Review;