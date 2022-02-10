import React from 'react';
const ProductDetails = ({ clickedProduct, setProductDetail }) => {
    const { name, category, price, seller, features, stock, shipping, img} = clickedProduct;
    const containerStyle = {padding: '20px', width: '90%'}
    return (
        <div>
            {

                <div style={containerStyle}>
                    <h1>{name}</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <div>
                            <h2>Price: {price}$</h2>
                            <h4>Shipping Charge: {shipping}$</h4>
                            <h4> Seller: {seller}</h4>
                            <h4>Available: {stock} pieces</h4>
                        </div>
                        <div>
                            <h3>Category: {category}</h3>
                            {
                                features.map((feature, i) => {
                                    const { description, value } = feature
                                    return <div key={i}>
                                        <p>{description}: {value}</p>
                                    </div>
                                })
                            }
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <img src={img} alt="" />
                            <button style={{ display: 'block' }} onClick={() => setProductDetail({})}>Back to the home</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;