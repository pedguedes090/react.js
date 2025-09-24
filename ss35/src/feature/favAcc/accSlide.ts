import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Account = {
  id: number;
  userName: string;
  isFavorite: boolean;
};

export type AccountsState = {
  accounts: Account[];
};

const initialState: AccountsState = {
  accounts: [
    { id: 1, userName: "Nguyễn Văn A", isFavorite: true },
    { id: 2, userName: "Nguyễn Văn B", isFavorite: false },
    { id: 3, userName: "Nguyễn Văn C", isFavorite: true },
    { id: 4, userName: "Nguyễn Văn D", isFavorite: true },
  ],
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const accountId = action.payload;
      const account = state.accounts.find((a) => a.id === accountId);
      if (account) {
        account.isFavorite = !account.isFavorite;
      }
    },
  },
});

export const { toggleFavorite } = accountsSlice.actions;
export default accountsSlice.reducer;

