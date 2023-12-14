import { ADD_NEW_ELEMENT, ADD_TO_CART, LOGIN, LOGOUT, REMOVE_FROM_CART } from "../actions";

const initialState = [1, 2, 3];
const numberReducer = (state = initialState, action) => {
  switch (
    action.type // ADD_NEW_ELEMENT
  ) {
    case ADD_NEW_ELEMENT:
      return [...state, state.length + 1];
  }
  return state;
};
const userInitialState = {};
const userReducer = (state = userInitialState, action) => {
  switch (
    action.type // LOGIN, LOGOUT
  ) {
    case LOGIN:
      console.log("payload from ", action.payload);
      console.log("in Login");
      return { ...state, loginUser: action.payload };
    case LOGOUT:
      console.log("in Logout");
      delete state["loginUser"];
      console.log("after logout", state);
      return { ...state };
  }
  return state;
};

let initialCart = {}

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART: 
console.log(state[action?.payload?.id]?.qty)
    // if(state[action?.payload?.id]) {
    //   return {...action.payload, qty: action.payload.qty++}
    // }
    return {...state, [action?.payload?.id] : {...action.payload, qty: 1}}
    case REMOVE_FROM_CART: 
      delete state[action.payload?.id]
  

  }
  return state
}



export { userReducer, numberReducer, cartReducer };
