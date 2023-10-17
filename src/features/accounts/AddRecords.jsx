import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expense, income, status, transfer } from "./AccountSlice";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./AddRecords.module.css";
import Button from "../../components/Button";

function AddRecords() {
  const [option, setOption] = useState("expense");
  const [record, setRecords] = useState("cash");
  const [toAccount, setToAccount] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const { account, records, categorys } = useSelector(
    (store) => store.accounts
  );
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount) return;
    if (option === "transfer" && !toAccount) return;
    if (option !== "transfer" && !category) return;

    if (option === "transfer")
      dispatch(transfer(option, record, amount, toAccount));
    if (option === "expense")
      dispatch(expense(option, record, category, amount));
    if (option === "income") dispatch(income(option, record, category, amount));
  }

  return (
    <main className={styles.records}>
      <header>
        <h3>ADD RECORD</h3>
        <span onClick={() => dispatch(status(false))}>
          <AiFillCloseCircle />
        </span>
      </header>

      <hr />

      <form onSubmit={handleSubmit}>
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          {Object.keys(records).map((obj) => (
            <option value={obj} key={obj}>
              {obj.toUpperCase()}
            </option>
          ))}
        </select>

        <label> {option === "transfer" ? "From Account" : "Account"} </label>
        <select value={record} onChange={(e) => setRecords(e.target.value)}>
          {account.map((obj) => (
            <option value={obj.accountName} key={obj.accountName}>
              {obj.accountName}
            </option>
          ))}
        </select>

        {option === "transfer" ? (
          <>
            <label> To Account </label>
            <select
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
            >
              {account.map(
                (obj) =>
                  obj.accountName.toLowerCase() !== record.toLowerCase() && (
                    <option value={obj.accountName} key={obj.accountName}>
                      {obj.accountName}
                    </option>
                  )
              )}
            </select>
          </>
        ) : (
          <>
            <label> Category </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">CHOOSE</option>
              {Object.keys(categorys).map((obj) => (
                <option value={obj} key={obj}>
                  {obj.toUpperCase()}
                </option>
              ))}
            </select>
          </>
        )}

        <label htmlFor=""> Amount </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <label htmlFor=""> Date </label>
        <DatePicker
          className={styles.date}
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
        <Button> Add Record </Button>
      </form>
    </main>
  );
}

export default AddRecords;
