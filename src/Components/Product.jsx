import { Component } from "react";
class Product extends Component {
    render() {
        const products = this.props.products;
        const getClickedProduct = this.props.getClickedProduct;
        const buttonStyle = {
            all: 'unset',
            display: 'block',
            width: '100%',
            cursor: 'pointer',
            borderRadius: '5px',
            border: '1px solid gray',
            padding: '30px',
        }
        return (
            <div style={{ padding: '40px', width: '90%' }}>
                {
                    products.map(product => {
                        const { name, img, price, key } = product;
                        return (
                            <div key={key} style={{ padding: '10px', width: '100%' }}>
                                <button onClick={() => getClickedProduct(product)} style={buttonStyle}>
                                    <img src={img} alt=''></img>
                                    <h1>{name}</h1>
                                    <h3>{price}$</h3>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            )
    }

}
export default Product;