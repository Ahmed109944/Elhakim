import { createSlice } from "@reduxjs/toolkit";

const AllDoctorsSlice = createSlice({
  name: "AllDoctors",
  initialState: [],
  reducers: {
    SetAllDoctors: (state, action) => {
      state = action.payload;

      return state;
    },
    removeDoctors: () => {
      return [];
    },
  },
});

export const { SetAllDoctors, removeDoctors } = AllDoctorsSlice.actions;
export default AllDoctorsSlice.reducer;
