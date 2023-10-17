import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAcc, status } from "./AccountSlice";
import Input from "../../components/Input";
import { FaCircleXmark } from "react-icons/fa6";
import Button from "../../components/Button";
import styles from "./AddAccounts.module.css";

function AddAccounts() {
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("general");
  const [amount, setAmount] = useState(0);
  // const [emoji, setEmoji] = useState(GENERAL);
  // const [color, setColor] = useState("#212121");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (accountType === "cash") {
  //     setEmoji(CASH);
  //     setColor("#27C6DA");
  //   } else if (accountType === "saving") {
  //     setEmoji(SAVING);
  //     setColor("#607D8A");
  //   } else if (accountType === "creditCard") {
  //     setEmoji(CREDIR_CARD);
  //     setColor("#00897B");
  //   } else {
  //     setEmoji(GENERAL);
  //     setColor("#212121");
  //   }
  // }, [accountType]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!accountName || !accountType) return;
    dispatch(addAcc(accountName, amount, accountType));
    // dispatch(add(accountName, amount, accountType, emoji, color));
  }

  return (
    <main className={styles.adding}>
      <header>
        <h3>ADD ACCOUNT</h3>
        <span onClick={() => dispatch(status(false))}>
          <FaCircleXmark />
        </span>
      </header>

      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <Input
            type="text"
            placeholder="Account Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Account type</label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="general">General</option>
            <option value="cash">Cash</option>
            <option value="saving">Saving Account</option>
            <option value="creditCard">Credit Card</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="">Starting Amount</label>
          <Input
            type="number"
            value={amount}
            placeholder="Amount"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <Button> Save </Button>
      </form>
    </main>
  );
}

export default AddAccounts;
