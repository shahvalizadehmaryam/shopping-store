import BasketCard from "../components/BasketCard";
import { useCarts } from "../context/CartContext";

const CheckoutPage = () => {
    const [state , dispatch] = useCarts();
    const clickHandler = (type,payload) => dispatch({type,payload}) 
    return (
        <div>
          {state.selectedItems.map((product) => (
            <BasketCard data={product} key={product.id} clickHandler={clickHandler}  />
          ))}
        </div>
      );
}
 
export default CheckoutPage;