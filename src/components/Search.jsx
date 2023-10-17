import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from './Search.module.css'
function Search({ value, onValue }) {
  return (
    <div className={styles.search} >
      <span> <FaMagnifyingGlass/> </span>
      <input type="text" placeholder="Search" value={value} onChange={onValue} />
    </div>
  );
}

export default Search;
