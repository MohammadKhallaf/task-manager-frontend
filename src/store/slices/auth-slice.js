import { createSlice } from "@reduxjs/toolkit";

const localUserData = localStorage.getItem("user");
const userInitialData = localUserData ? JSON.parse(localUserData) : {};

const authSlice = createSlice({
  initialState: userInitialData,
  name: "auth",
  reducers: {
    saveUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    removeUser: () => {
      localStorage.removeItem("user");
      return {};
    },
  },
});
export const { saveUser } = authSlice.actions;
export default authSlice;
