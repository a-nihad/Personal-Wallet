import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  phoneNumber: "",
  authorised: false,
};

const customerSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, email, password, phoneNumber) {
        return {
          payload: { fullName, email, password, phoneNumber },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.phoneNumber = action.payload.phoneNumber;
        state.authorised = true;
      },
    },

    logout(state) {
      state.authorised = false;
      state.fullName = "";
      state.email = "";
      state.password = "";
      state.phoneNumber = "";
    },
  },
});

export const { createCustomer, logout } = customerSlice.actions;
export default customerSlice.reducer;
