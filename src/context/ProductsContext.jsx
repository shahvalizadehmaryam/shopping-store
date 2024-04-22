import { createContext, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

const ProductsProvider = ({children}) => {
    const [products , setProducts] = useState([])
useEffect(() => {
    const fetchProducts = async() => {
      setProducts(api.get("/products"));
    }
    fetchProducts();
}, [])

    return ( 
       <ProductContext.Provider value={products}>
        {children}
       </ProductContext.Provider>
     );
}
 
export default ProductsProvider;