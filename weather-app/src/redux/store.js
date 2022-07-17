import { configureStore } from "@reduxjs/toolkit";
import citiesSlice from "./citiesSlice";

export default configureStore({
  reducer: {
    cities: citiesSlice,
  },
});
