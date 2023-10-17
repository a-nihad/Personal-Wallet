import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: [
    {
      accountName: "CASH",
      amount: 0,
      accountType: "cash",
      color: "#27C6DA",
    },
    {
      accountName: "GENERAL",
      amount: 0,
      accountType: "general",
      color: "#212121",
    },
  ],
  categorys: {
    food: [],
    shopping: [],
    housing: [],
    transportation: [],
    vahicle: [],
    financial: [],
    investment: [],
    income: [],
    other: [],
  },
  records: {
    expense: [],
    income: [],
    transfer: [],
  },
  popup: false,
  balance: 0,
  history: [],
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAcc: {
      prepare(accountName, amount, accountType) {
        return {
          payload: { accountName, amount, accountType },
        };
      },
      reducer(state, action) {
        state.account.push(action.payload);
        state.popup = false;
        state.balance += action.payload.amount;
      },
    },

    expense: {
      prepare(option, records, categorys, amount) {
        return {
          payload: { option, records, categorys, amount },
        };
      },
      reducer(state, action) {
        state.popup = false;
        state.balance -= action.payload.amount;
        state.history.unshift(action.payload);
        state.account.map((ac) => {
          if (
            ac.accountName.toLowerCase() ===
            action.payload.records.toLowerCase()
          ) {
            return (ac.amount -= action.payload.amount);
          }
        });
      },
    },

    income: {
      prepare(option, records, categorys, amount) {
        return {
          payload: { option, records, categorys, amount },
        };
      },
      reducer(state, action) {
        state.popup = false;
        state.balance += action.payload.amount;
        state.history.unshift(action.payload);
        state.account.map((ac) => {
          if (
            ac.accountName.toLowerCase() ===
            action.payload.records.toLowerCase()
          ) {
            return (ac.amount += action.payload.amount);
          }
        });
      },
    },

    status(state, action) {
      state.popup = action.payload;
    },

    transfer: {
      prepare(option, records, amount, toAccount) {
        return {
          payload: { option, records, amount, toAccount },
        };
      },
      reducer(state, action) {
        state.popup = false;

        state.account.map((ac) => {
          if (
            ac.accountName.toLowerCase() ===
            action.payload.records.toLowerCase()
          ) {
            return (ac.amount -= action.payload.amount);
          }

          if (
            ac.accountName.toLowerCase() ===
            action.payload.toAccount.toLowerCase()
          ) {
            return (ac.amount += action.payload.amount);
          }
        });
        state.history.unshift(action.payload);
      },
    },

    status(state, action) {
      state.popup = action.payload;
    },
  },
});

export const { addAcc, expense, income, status, transfer } =
  accountsSlice.actions;
export default accountsSlice.reducer;
