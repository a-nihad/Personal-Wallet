import { NavLink } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import styles from "./PagNav.module.css";
import Logout from "./Logout";
import { status } from "../features/accounts/AccountSlice";

function PagNav() {
  const popup = useSelector((store) => store.accounts.popup);
  const dispatch = useDispatch();

  function handlePopup() {
    if (popup === true) {
      dispatch(status(false));
    }
  }
  
  return (
    <nav className={`${styles.nav} ${popup && "blur"}`} onClick={handlePopup}>
      <div>
        <h1>
          <FaWallet />
        </h1>
        <ul>
          <li>
            <NavLink to="/dashboard"> Dashboard </NavLink>
          </li>
          <li>
            <NavLink to="/accounts"> Accounts </NavLink>
          </li>
          <li>
            <NavLink to="/records"> Recoads </NavLink>
          </li>
        </ul>
      </div>
      <Logout />
    </nav>
  );
}

export default PagNav;
