import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialState ={}
const reducer = () => {}
const CartProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer,initialState)
    return ( 
        <CartContext.Provider value={state}>
        {children}
       </CartContext.Provider>
     );
}
 // custom hook
 export const useCarts = () => useContext(CartContext)
export default CartProvider;