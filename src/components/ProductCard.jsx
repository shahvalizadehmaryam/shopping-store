import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";
import { useCarts } from "../context/CartContext";
const ProductCard = ({ product }) => {
  const { id, title, price, image } = product;
  const [state,dispatch] = useCarts();
  const cartHandler = () => {
    dispatch({type:"Add",payload:data})
  }
  return (
    <div key={id} className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price}$</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={cartHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
