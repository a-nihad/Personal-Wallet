import { useSelector } from "react-redux";
import CreateCustomer from "../features/customer/CreateCustomer";
import Dashboard from "./Dashboard";

function Home() {
  const authorised = useSelector((state) => state.customer.authorised);
  return <>{authorised ? <Dashboard /> : <CreateCustomer />}</>;
}

export default Home;
