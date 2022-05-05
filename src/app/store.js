import { combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux' 
import { cartReducer } from "../features/cart/cartSlice";
import { inventoryReducer } from "../features/inventory/inventorySlice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";

const reducers = {
    cart: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer
};
  
export const store = createStore(combineReducers(reducers));