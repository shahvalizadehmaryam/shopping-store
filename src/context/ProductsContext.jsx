import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

const ProductsProvider = ({children}) => {
    const [products , setProducts] = useState([])
useEffect(() => {
    const fetchProducts = async () => {
        try {
            setProducts(await api.get("/products"));
        } catch (error) {
            console.log(error.messages)
        }
    }
    fetchProducts();
}, [])

    return ( 
       <ProductContext.Provider value={products}>
        {children}
       </ProductContext.Provider>
     );
}
// custom hook
 export const useProducts = () => useContext(ProductContext)
 
export default ProductsProvider;