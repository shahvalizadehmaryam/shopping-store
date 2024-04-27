import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./BasketSidebar.module.css";

function BasketSidebar({state,clickHandler}) {
  return (
    <div className={styles.sidebar}>
        <div>
          <TbChecklist />
          <span>Total:</span>
          <span>{state.total} $</span>
        </div>
        <div>
          <FaHashtag />
          <span>Quantity:</span>
          <span>{state.itemsCounter}</span>
        </div>
        <div>
          <BsPatchCheck />
          <span>Status:</span>
          <span>{!state.checkout && "Pending..."}</span>
        </div>
        <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  )
}

export default BasketSidebar