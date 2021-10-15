import getProducts from '../lib/getProducts';
// import changeProducts from './changeProducts.js';
import changeProduct from './changeProduct.js';



var searchProducts = () => (dispatch) =>  


getProducts()
.then((data)=>{
  dispatch(changeProduct(data))
  // dispatch(changeProducts(data) )
})
     
       

  //TODO:  Write an asynchronous action to handle a video search!};


export default searchProducts;
