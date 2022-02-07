import { useState } from "react";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import {productsData} from './fakeData/product'
function App() {
  const [products, setProducts] = useState([...productsData]);
  const [clickedProduct, setClickedProduct] = useState({});
  return (
 
    <div>
         {
           !Object.keys(clickedProduct).length
           ?<Product products={products} setClickedProduct={setClickedProduct}/> 
           :<ProductDetails clickedProduct={clickedProduct} setClickedProduct={setClickedProduct}/>
         }
    </div>
  );
}

export default App;
