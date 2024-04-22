import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";
import  styles  from "./ProductsPage.module.css";

const ProductsPage = () => {
    const products = useProducts();
    console.log(products)
    return ( 
       <div className={styles.container}>
        <div className={styles.products}>
            {!products.length && <Loader />}
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div>sidebar</div>
       </div>
     );
}
 
export default ProductsPage;