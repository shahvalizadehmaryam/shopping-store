import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCarts } from "../context/CartContext";
import styles from "./Checkout.module.css";

const CheckoutPage = () => {
  const [state, dispatch] = useCarts();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSidebar clickHandler={clickHandler} state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            data={product}
            key={product.id}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
