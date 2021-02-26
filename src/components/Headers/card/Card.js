import React from 'react';

const card = (profs) => {
    const card=profs.card;
    console.log(card);
    const total=card.reduce((total,product)=>total+product.price,0);
    let ShippingCost=0;
    if(total<10){
        ShippingCost=15.50;
    }
    else if(total<100)
    {
        ShippingCost=10.99;
    }
    else if(total>100)
    {
        ShippingCost=0;
    }
    const tex=Number((total*0.10).toFixed(2));
    const grandTotal=Number(total.toFixed(2))+ShippingCost+tex
    return (
        <div>
             <h1>Order Summary</h1>
            <p>Items Ordered: {card.length}</p>
            <p>Products Price: {total.toFixed(2)}</p>
            <p><small>Shipping Cost: {ShippingCost}</small></p>
            <p>Vat-Tex: {tex}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default card;