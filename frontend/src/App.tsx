import React, { useState } from "react";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/auth"
          element={<AuthPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard/*"
          element={<PrivateRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
};

export default App;
