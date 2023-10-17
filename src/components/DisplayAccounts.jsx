import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import styles from "./DisplayAccounts.module.css";
import Button from "./Button";

function DisplayAccounts() {
  const accounts = useSelector((store) => store.accounts.account);
  return (
    <section className={styles.dashboard}>
      <ul>
        {accounts.map((account, i) => (
          <li key={i}>
            <span>{account.emoji}</span>
            <div>
              <p> {account.accountName} </p>
              <h4>
                <FaIndianRupeeSign />
                {account.amount}
              </h4>
            </div>
          </li>
        ))}
        <Link to="/accounts">
          <Button> + Add Account </Button>
        </Link>
      </ul>
    </section>
  );
}

export default DisplayAccounts;
