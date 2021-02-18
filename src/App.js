import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Global from "./components/Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Countries from "./components/Countries";
import Country from "./components/Country";

function App() {
  return (
    <div className="relative h-screen">
      <Router>
        <Navbar />
        <main className="container h-full px-10 mx-auto mt-20">
          <Switch>
            <Route path="/" exact>
              <Global />
            </Route>
            <Route path="/countries">
              <Countries />
            </Route>
            <Route path="/stats/:country" children={<Country />} />
          </Switch>
        </main>
      </Router>
      <ToastContainer autoClose={5000} closeOnClick position="bottom-right" />
    </div>
  );
}

export default App;
