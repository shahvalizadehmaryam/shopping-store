import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCarts } from "../context/CartContext";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  const [state] = useCarts();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">LARA</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Maryam Shahvalizadeh</p>
      </footer>
    </>
  );
};

export default Layout;
