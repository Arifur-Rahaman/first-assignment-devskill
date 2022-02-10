import React from 'react';

const buttonStyle = {
    all: 'unset',
    display: 'block', 
    width: '100%', 
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid gray',
    padding: '30px',
}

const Product = ({products, setProductDetail}) => {
    return (
        <div>
            {
                products.map(product=>{
                    const {name, price, key, img} = product;
                    return(
                        <div key={key} style={{padding: '40px', width: '90%'}}>
                                <button onClick={()=>setProductDetail(product)} style={buttonStyle}>
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