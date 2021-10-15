import axios from "axios";
import Token from '../config/token.js'
var getProducts = () => {

  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40393/styles`,
    headers: {
      'Authorization': `token ${Token}`,
    }
  };

  return axios.get(options.url,options.headers)
    .then((products)=>{return products.data } )
    .catch(err=>{throw Error("product not found")})
};

export default getProducts;
