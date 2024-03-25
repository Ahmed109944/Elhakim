import { createSlice } from "@reduxjs/toolkit";

const chooseDrSlice = createSlice({
  name: "chooseDr",
  initialState: {},
  reducers: {
    setChooseDR: (state, action) => {
      state = action.payload;

      return state;
    },
    removeChooseDR: () => {
      return {};
    },
  },
});

export const { setChooseDR, removeChooseDR } = chooseDrSlice.actions;
export default chooseDrSlice.reducer;
