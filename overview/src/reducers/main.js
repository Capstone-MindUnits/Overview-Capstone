import { combineReducers } from 'redux';
import currentProductReducer from './currentProduct';
// import ProductsReducer from './ProductsList';

var rootReducer = combineReducers ({
    currentProductReducer,
    // ProductsReducer
})

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
