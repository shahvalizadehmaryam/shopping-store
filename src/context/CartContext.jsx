import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialState ={}
const reducer = (state,action) => {
switch (action.type) {
    case "Add":
        
        console.log(action.payload)
        return state;

    default:
        return state;
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