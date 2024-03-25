import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    setToken: (state, action) => {
      sessionStorage.setItem("token", action.payload);
      state = action.payload;
      const { id } = jwtDecode(state);
      sessionStorage.setItem("id_user", id);

      return state;
      
    },
    removeToken: () => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("id_user");
      
      return "";
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
