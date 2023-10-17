import { configureStore } from "@reduxjs/toolkit";

import customerReducer from "../features/customer/CustomerSlice";
import accountReducer from "../features/accounts/AccountSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    accounts: accountReducer,
  },
});
export default store;
