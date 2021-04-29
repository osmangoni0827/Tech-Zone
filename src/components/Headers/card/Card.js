import React from 'react';
import './card.css';

const card = (profs) => {
    const {card}=profs
    // const card=profs.card;
    const total=card.reduce((total,product)=>total+(product.price*product.quantity),0);
   
    let ShippingCost=0;
    if((total>0)&&(total<50)){
        ShippingCost=15.50;
    }
    else if((total<100)&&(total>50))
    {
        ShippingCost=10.99;
    }
    else if(total>100)
    {
        ShippingCost=0;
    }
    const tex=Number((total*0.10).toFixed(2));
    const grandTotal=(Number(total.toFixed(2))+Number(ShippingCost.toFixed(2))+tex).toFixed(2);
    return (
        <div className='Card'>
             <h2>Order Summary</h2>
            <p>Items Ordered: {card.length}</p>
            <p>Products Price: {total.toFixed(2)}</p>
            <p><small>Shipping Cost: {ShippingCost}</small></p>
            <p>Vat-Tex: {tex}</p>
            <p>Total Price: {grandTotal}</p>
            <br></br>
           {
            //    OrderReview Button
               profs.children
           }
        </div>
    );
};

export default card;