import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';
import { Link } from 'react-router-dom';

const product = (profs) => {
    const {product,handleAddProduct,DisplayAddToCart}=profs;
    const {name,img,stock,price,seller,key}=product;
    // console.log(profs.product)
    return (
        <div className="product">
            {/* //Product Picture */}
           <div>
               <img src={img}></img>
           </div>
           {/* Product Detail */}
           <div className='productinfo'>
                <h3 className='productName'>
                <Link className='link' to={'/product/'+key}>{name}</Link></h3>
               <br/>
               <p><small>By: {seller}</small></p>
               <p>Prize: ${price}</p>
               <p><small>Only {stock} left in stock -order soon</small></p>
               {DisplayAddToCart&&<button className='mainButton' 
               onClick={()=>handleAddProduct(profs.product)}
               ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart 
               </button>}
           </div>
        </div>
    );
};

export default product;