import { useEffect, useState } from "react";
import Product from "./Components/Product";
import Loader from "./Components/Loader";
import ProductDetails from "./Components/ProductDetails";
import {productsData} from './fakeData/product'
function App() {
  const [products, setProducts] = useState([...productsData]);
  const [clickedProduct, setClickedProduct] = useState({});
  const [loader, setLoader] = useState(true);

  const setProductDetail=(product)=>{
    setLoader(true)
    setClickedProduct(product);
    setTimeout(()=>{
      setLoader(false)
    },500)
  }
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },500)
  }, [])

  return (
 
    <div>
         {
           loader? <Loader/> :
           <>
              {
                Object.keys(clickedProduct).length===0
                ?<Product products={products} setProductDetail={setProductDetail}/> 
                :<ProductDetails clickedProduct={clickedProduct} setProductDetail={setProductDetail}/>
              }
           </>
         }
    </div>
  );
}

export default App;
