import axios from "axios";
import Token from '../config/token.js'
var getStyle = () => {

 return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40393/styles`,{ headers: {Authorization: Token}})
    .then((styles)=>{return styles} )
    .catch(err=>{return "style not found"})
};

export default getStyle;