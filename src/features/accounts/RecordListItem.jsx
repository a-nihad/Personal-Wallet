import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSelector } from "react-redux";
import styles from "./List.module.css";

function RecordListItem() {
  const { history, account } = useSelector((store) => store.accounts);
  return (
    <ul className={styles.list}>
      {history?.map((_, i) => (
        <li key={i}>
          <section>
            {/* <span> {account.account.emoji} </span> */}
            {history[i].option === "transfer" ? (
              <h4> Transfer </h4>
            ) : (
              <h4> {history[i].categorys} </h4>
            )}
          </section>

          <div>
            {history[i].option === "transfer" ? (
              <h5>
                {history[i].records} to {history[i].toAccount}
              </h5>
            ) : (
              <h5> {history[i].records} </h5>
            )}

            {history[i].option === "expense" ? (
              <h4 className="expense">
                <FaIndianRupeeSign /> -{history[i].amount}
              </h4>
            ) : history[i].option === "income" ? (
              <h4 className="income">
                <FaIndianRupeeSign /> {history[i].amount}
              </h4>
            ) : (
              <h4>
                <FaIndianRupeeSign />{" "}
                {history[i].amount > 0 ? history[i].amount : -history[i].amount}
              </h4>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RecordListItem;
