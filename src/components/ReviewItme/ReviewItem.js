import React from 'react';
import './ReviewItem.css';
const ReviewItem = (profs) => {
    const {seller,price,name,quantity,key}=profs.product
    return (
        <div className='reviewitemstyel'>
            <h4 className='productName'>{name}</h4>
            <h5>${price}</h5>
            <h5>${seller}</h5>
            <h2>Quantity:{quantity}</h2>
            <button
            onClick={()=>profs.removeproduct(key)}
             className='mainButton'
             >Remove</button>
        </div>
    );
};

export default ReviewItem;