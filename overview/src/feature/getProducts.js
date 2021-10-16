import axios from "axios";
import Token from '../config/token.js'
var getProducts = () => {

 return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40393',{ headers: {Authorization: Token}})
    .then((products)=>{return products} )
    .catch(err=>{return "product not found"})
};

export default getProducts;
