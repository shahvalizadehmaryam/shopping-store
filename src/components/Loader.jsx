import styles from "./Loader.module.css";
import {RotatingLines} from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        height="100"
        width="100"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
};

export default Loader;
