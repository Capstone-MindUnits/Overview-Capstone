import axios from "axios";

var getStyle = () => {

 return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40346/styles`,{ headers: {Authorization: (process.env.REACT_APP_Token)}})
    .then((styles)=>{return styles} )
    .catch(err=>{return "style not found"})
};

export default getStyle;