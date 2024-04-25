import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../helper/helper";
import { useCarts } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
const ProductCard = ({ product }) => {
  const { id, title, price, image } = product;
  const [state, dispatch] = useCarts();
  console.log(state);
  const quantity = productQuantity(state, id);
  const cartHandler = (type) => {
    dispatch({ type: type, payload: product });
  };
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
          {quantity === 1 && (
            <button onClick={() => cartHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => cartHandler("DECREASE")}>-</button>
          )}

          {!! quantity && <span>{quantity}</span>}

          {quantity === 0 ? (
            <button onClick={() => cartHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => cartHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
