import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const CartContext = createContext();
const initialState ={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout : false
}
const reducer = (state,action) => {
switch (action.type) {

    case "ADD_ITEM":
        if(!state.selectedItems.find((item) => item.id === action.payload.id)){
           state.selectedItems.push({...action.payload,quantity:1})
        }
        return {
            ...state,
            ...sumProducts(state.selectedItems),
            checkout:false

        }
        // case "REMOVE_ITEM":
        //    const filteredSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
        //    return{
        //     ...state,
        //     selectedItems : [...filteredSelectedItems],
        //     ...sumProducts(filteredSelectedItems)
        //    }

    default:
     throw new Error("Invalid Action!");
}
}
const CartProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer,initialState)
    return ( 
        <CartContext.Provider value={{state,dispatch}}>
        {children}
       </CartContext.Provider>
     );
}
 // custom hook
 export const useCarts = () => {
    const {state,dispatch} = useContext(CartContext);
    return [state , dispatch];
 }
export default CartProvider;