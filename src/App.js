import React, {Component} from "react";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import Loader from './Components/Loader'
import {productsData} from './fakeData/product'
class App extends Component{
  state={
    products: [...productsData],
    clickedProduct: {},
    loading: true
  }
  getClickedProduct = (product)=>{
    this.setState({loading: true})
    this.setState({
      clickedProduct: product
    })
    setTimeout(() => {
      this.setState({loading: false});
  }, 500);
  }
componentDidMount() {

        setTimeout(() => {
          this.setState({loading: false});
      }, 500);

}
  render(){
    const clickedProduct = this.state.clickedProduct
    return(
      <div>
          {
            this.state.loading
            ? <Loader></Loader>

            :<>
              {
                Object.keys(clickedProduct).length===0
                ?<Product products={this.state.products} getClickedProduct={this.getClickedProduct}/>
                :<ProductDetails clickedProduct={this.state.clickedProduct} getClickedProduct={this.getClickedProduct}/>
              }
            </>
          }
      </div>
    )
  }
}

export default App;
