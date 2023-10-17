import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { status } from "../features/accounts/AccountSlice";

import PagNav from "../components/PagNav";
import Button from "../components/Button";
import Search from "../components/Search";
import RecordList from "../features/accounts/RecordList";
import AddRecords from "../features/accounts/AddRecords";

function Records() {
  const [search, setSearch] = useState("");

  const popup = useSelector((store) => store.accounts.popup);
  const dispatch = useDispatch();

  return (
    <>
      <PagNav />

      <main className={`page ${popup && "blur"}`}>
        <aside className="leftSide">
          <h3> Records </h3>
          <Button onClick={() => dispatch(status(true))}> + Add </Button>
          <Search value={search} onValue={(e) => setSearch(e.target.value)} />
        </aside>

        <section className="rightSide">
          <RecordList />
        </section>
      </main>
      {popup && <AddRecords />}
    </>
  );
}

export default Records;
