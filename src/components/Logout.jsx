import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { logout } from "../features/customer/CustomerSlice";
import { Link } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  return (
    <Link to="/">
      <Button onClick={() => dispatch(logout())}> Log out </Button>
    </Link>
  );
}

export default Logout;
