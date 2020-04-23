import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login">
          <SignInPage />
        </PublicRoute>
        <PrivateRoute exact path="/">
          <MainPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
