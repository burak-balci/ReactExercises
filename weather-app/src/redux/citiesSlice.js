import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    city: "",
    isActive: true,
    mapIsActive: false,
  },
  reducers: {
    setIsActive: (state) => {
      state.isActive = !state.isActive;
    },

    setCity: (state, action) => {
      state.city = action.payload;
    },

    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
  },
});

export const { setIsActive, setCity, setCoordinates } = citiesSlice.actions;
export default citiesSlice.reducer;
