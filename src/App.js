import React, {Component} from "react";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import {productsData} from './fakeData/product'
class App extends Component{
  state={
    products: [...productsData],
    clickedProduct: {}
  }
  getClickedProduct = (product)=>{
    this.setState({
      clickedProduct: product
    })
  }
  render(){
    const clickedProduct = this.state.clickedProduct
    return(
      <div>
          {
            !Object.keys(clickedProduct).length
            ?<Product products={this.state.products} getClickedProduct={this.getClickedProduct}/>
            :<ProductDetails clickedProduct={this.state.clickedProduct} getClickedProduct={this.getClickedProduct}/>
          }
      </div>
    )
  }
}

export default App;
