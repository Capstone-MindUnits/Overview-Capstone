import { connect } from 'react-redux';
import ProductInfo from '../components/productInfo/ProductInfo';
import store from '../store/store.js';

var ProductInfoContainer = connect(
    (state) => ({product:state.product}),
    
)(ProductInfo)



//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default ProductInfoContainer;
