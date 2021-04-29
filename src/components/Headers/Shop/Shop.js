import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import { Link } from 'react-router-dom';
import fakeData from './../../../fakeData/index';
import './Shop.css';
import Card from './../card/Card';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';

const Shop = () => {
        const [products,setproducts]=useState([]);
        const [card,setcard]=useState([]);
        const [search,setSearch]=useState('');
        const HandleSearchButton=()=>{
                const searchvalue= document.getElementById('searchinput').value;
                setSearch(searchvalue);
        }
        useEffect(()=>{
            fetch('https://blooming-brook-15210.herokuapp.com/products?name='+search)
            .then(data=>data.json())
            .then(data=>setproducts(data))
        },[search])
        useEffect(()=>{
            const savecart=getDatabaseCart();
            const productsKey=Object.keys(savecart);

            fetch('https://blooming-brook-15210.herokuapp.com/productByKey',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(productsKey)
            })
            .then(res=>res.json())
            .then(data=>{
                const ProductsCart=productsKey.map(existingkey=>{
                    const product=data.find(pd=>pd.key===existingkey);
                    product.quantity=savecart[existingkey];
                    return product;
                })
                setcard(ProductsCart);
            })
        },[])
        const handleAddProduct=(product)=>{
            let newcard=[];
            const sameproduct=card.find(pd=>pd.key===product.key);
            let count=1;

            if(sameproduct)
            {
                count=sameproduct.quantity+1;
                sameproduct.quantity=count;
                const outhers=card.filter(pd=>pd.key!==product.key);
                newcard=[...outhers,sameproduct];
                setcard(newcard);
            }
            else{
                product.quantity=1;
                newcard=[...card,product];
                setcard(newcard);
            }
            addToDatabaseCart(product.key,count);
        }
    return (
        <div className='shop-container'>
            <div className="product-container">

                <div className='search'>
                <input type='text' placeholder='Search' id='searchinput'></input>
                <button className='btn btn-secondary' onClick={HandleSearchButton}>Search</button>
                </div>
               
                {
                    products.map(pd=><Product 
                    product={pd}
                    key={pd.key}
                    DisplayAddToCart={true}
                    handleAddProduct={handleAddProduct}>
                    </Product>)
                }
            </div>
            <div className="card-container">
               <Card card={card}>
                <Link className='buttonlink' to='/review'>
                    <button className='mainButton'>Order Review</button>
                </Link>
               </Card>
            </div>
            
        </div>
    );
};

export default Shop;