import { createSlice } from "@reduxjs/toolkit";
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: "",
  reducers: {
    setuserInfo: (state, action) => {
      state = action.payload;

      return state;
    },
    removeuserInfo: () => {
      return "";
    },
  },
});

export const { setuserInfo, removeuserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
