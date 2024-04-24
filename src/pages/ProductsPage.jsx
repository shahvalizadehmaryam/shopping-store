
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";
import {
  filterProducts,
  getInitialQuery,
  searchedProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

const ProductsPage = () => {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState(products);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(products);

  useEffect(() => {
    setDisplayed(products);
    // during refresh page url has params
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  // فیلتر چند مرحله ای محصولات
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "")
    let finalProducts = searchedProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);
  return (
    <>
     <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;
