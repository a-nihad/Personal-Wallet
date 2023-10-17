import { useSelector } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import styles from "./RecordHeader.module.css";

function RecordHeader() {
  const { balance } = useSelector((store) => store.accounts);
  return (
    <header className={styles.header}>
      <h4> Balance </h4>
      <h4>
        <FaIndianRupeeSign /> {balance}
      </h4>
    </header>
  );
}

export default RecordHeader;
