Task:

1. Create two component. one is Product Page and another one is Product Detail page
2. On start, the product page will be displayed. You can use static data defined by yourself to render the list page. show the name and price on the list. For an example:

create a state containing list of product.

const [product,setProduct] = useState([
{
name: 'Product Name',
description: 'Product Description',
price: 'price',
category: 'Product Category',
},
{
name: 'Product Name',
description: 'Product Description',
price: 'price',
category: 'Product Category',
},
{
name: 'Product Name',
description: 'Product Description',
price: 'price',
category: 'Product Category',
},
........
])


3. OnClick each and every product, another page will open where the details of the product can be found. You can pass props for the product details.

4. Before each page is rendered, show a loader image e.g https://codepen.io/collection/jifIK/

5. After the page is rendered, on dismount, hide the loader. (Show and Hide Loader Component on componentDidMount)
