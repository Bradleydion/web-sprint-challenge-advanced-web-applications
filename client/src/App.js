import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path = "/BubblePage">
          <BubblePage/>
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
