import Redux from 'redux';

var currentProductReducer = (state = {} , action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch(action.type){
    case 'CHANGE_PRODUCT':
      return action.product

      default:
        return state
  }

};

export default currentProductReducer;
