import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const selectFilter = (state) => state.filters.name;

export const filtersReducer = filtersSlice.reducer;
