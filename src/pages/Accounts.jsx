import { useDispatch, useSelector } from "react-redux";
import { status } from "../features/accounts/AccountSlice";
import { useEffect, useState } from "react";

import Button from "../components/Button";
import PagNav from "../components/PagNav";
import Search from "../components/Search";
import AccountsList from "../features/accounts/AccountsList";
import AddAccounts from "../features/accounts/AddAccounts";

function Accounts() {
  const [search, setSearch] = useState("");
  const popup = useSelector((store) => store.accounts.popup);
  const dispatch = useDispatch();

  function handlePopup() {
    if (popup === true) {
      dispatch(status(false));
    }
  }

  return (
    <>
      <PagNav />

      <main className={`page ${popup && "blur"}`} onClick={handlePopup}>
        <aside className="leftSide">
          <h3> Accounts </h3>
          <Button onClick={() => dispatch(status(true))}> + Add </Button>
          <Search value={search} onValue={(e) => setSearch(e.target.value)} />
        </aside>

        <section className="rightSide">
          <AccountsList />
        </section>
      </main>
      {popup && <AddAccounts />}
    </>
  );
}

export default Accounts;
