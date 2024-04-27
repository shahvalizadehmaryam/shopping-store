import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductsContext";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../components/Loader";
import styles from "./DetailsPage.module.css";

const DetailsPage = () => {
    // inja id string hast
  const { id } = useParams();
//   inja ham be number id niyaz hast ke + mizarim ta tabdil be addad beshe.
  const productDetails = useProductDetails(+id);
   if(!productDetails) return <Loader />
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>{productDetails.category}</p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
