import { useSelector } from "react-redux";
import styles from "./List.module.css";
import { FaIndianRupeeSign } from "react-icons/fa6";

function AccountsList() {
  const accounts = useSelector((store) => store.accounts.account);

  return (
    <ul className={styles.list}>
      {accounts.map((account, i) => (
        <li key={i}>
          <section>
            <span> {account.emoji} </span>
            <h4> {account.accountName} </h4>
          </section>

          <div>
            <h5> {account.accountType} </h5>
            <h4>
              <FaIndianRupeeSign /> {account.amount}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AccountsList;
