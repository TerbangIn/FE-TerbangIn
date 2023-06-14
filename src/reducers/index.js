// // reducers.js
import { SET_PRODUCTS } from '../actions';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

// export default productReducer;
import { combineReducers } from 'redux'
import TransReducer from './data';

export default combineReducers({
    TransReducer
});


