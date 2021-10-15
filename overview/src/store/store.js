import { createStore} from 'redux';
import rootReducer from '../reducers/main';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const store = createStore(
    rootReducer
)

export default store;