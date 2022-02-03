import  {Component} from "react";
import Loader from "./Loader";
class Product extends Component{
    state={
        loading: true
    }
    componentDidMount(){
        this.setState({loading: false});
    
    // setTimeout(() => {
    //       this.setState({loading: false});
    //   }, 500);
      
        
      }
    render(){
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
        return(
            <div>
                {   
                    this.state.loading
                    ?<Loader></Loader>
                    :<div style={{padding: '40px', width: '90%'}}>
                        {
                            products.map(product=>{
                                const {name, img, price, key} = product;
                                return(
                                    <div key={key} style={{padding: '10px', width: '100%'}}>
                                        <button onClick={()=>getClickedProduct(product)} style={buttonStyle}>
                                            <img src={img} alt=''></img>
                                            <h1>{name}</h1>
                                            <h3>{price}$</h3>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
        </div>)
    }

}
export default Product;