import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
const Sidebar = ({setQuery}) => {
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
        setQuery((query) => createQueryObject(query, { category }));
        if (tagName !== "LI") return;
      };
    return (
        <div>
        <div>
          <FaListUl />
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's clothing</li>
          <li>Women's clothing</li>
        </ul>
      </div>
      );
}
 
export default Sidebar;