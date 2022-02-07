import React, { useEffect, useState } from 'react';
import Loader from './Loader'

const buttonStyle = {
    all: 'unset',
    display: 'block', 
    width: '100%', 
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid gray',
    padding: '30px',
}

const Product = ({products, setClickedProduct}) => {
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        }, 500)
    }, [])
    return (
        <div>
            {
                loader
                ? <Loader></Loader>
                :products.map(product=>{
                    const {name, price, key, img} = product;
                    return(
                        <div key={key} style={{padding: '40px', width: '90%'}}>
                                <button onClick={()=>setClickedProduct(product)} style={buttonStyle}>
                                    <img src={img} alt=''></img>
                                    <h2>{name}</h2>
                                    <h3>{price}$</h3>
                                </button>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default Product;