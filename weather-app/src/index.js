import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Map from "./pages/Map";
import City from "./pages/City";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path=":city" element={<City />}></Route>
        <Route path="map" element={<Map />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
