import { createSlice } from "@reduxjs/toolkit";

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = SidebarSlice.actions;

export default SidebarSlice.reducer;
