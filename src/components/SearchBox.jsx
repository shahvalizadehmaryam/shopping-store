import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";
import styles from "./SearchBox.module.css";
const SearchBox = ({search , setSearch ,setQuery}) => {
    const searchHandler = () => {
        setQuery((query) => createQueryObject(query, { search }));
      };
    return ( 
        <div className={styles.search}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          value={search}
          placeholder="Search..."
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
     );
}
 
export default SearchBox;