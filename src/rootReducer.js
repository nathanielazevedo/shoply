import data from './data.json'
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const INITIAL_STATE = {
  products: data.products,
  cart: {}
};

function memeReducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    
    case REMOVE_FROM_CART:
      console.log("HERE");
      const cartCopy = { ...state.cart };
      if (cartCopy[action.id] === 1) {
        delete cartCopy[action.id];
      }
      else if (!cartCopy[action.id]) {
        return state
      }
      else {
        cartCopy[action.id] = cartCopy[action.id] - 1;
      }
      
      return {
        ...state,
        cart: cartCopy,
      };

    case ADD_TO_CART: {
      const cartCopy = { ...state.cart };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return {
        ...state,
        cart: cartCopy,
      };
    }

    default:
      return state;
  }
}

export default memeReducer;

