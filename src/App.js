import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Layout/Header";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
