import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Resume";
import "./App.css";
import Todo from "./Todo";
import Weather from "./Weather";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/todo" element={<Todo />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/landing-page" element={<LandingPage />} />

          <Route path="/" element={<Resume />} />
        </Route>
      </Routes>{" "}
    </BrowserRouter>
  );
};

export default App;
