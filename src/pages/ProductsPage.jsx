import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";


const ProductsPage = () => {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed , setDisplayed] = useState(products);
  const [query , setQuery] = useState({});
  console.log(products);

  useEffect(()=>{
    setDisplayed(products)
  },[products])

  useEffect(()=>{
    console.log(query)
  },[query])

  const searchHandler = () => {
    setQuery((query) => ({...query , search}))
  }
  const categoryHandler = (event) => {
    const {tagName} = event.target;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => ({...query , category}))
    if(tagName !== "LI") return;
  }
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value.toLowerCase().trim())} value={search} placeholder="Search..." />
        <button onClick={searchHandler}>
        <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div>
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelery</li>
                <li>Men's clothing</li>
                <li>Women's clothing</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
