import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Countries from "./components/Countries";
import Global from "./components/Global";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative h-screen">
      <Router>
        <Navbar />
        <main className="h-full mx-auto mt-16">
          <Switch>
            <Route path="/" exact>
              <Global />
            </Route>
            <Route path="/countries">
              <Countries />
            </Route>
          </Switch>
        </main>
      </Router>
      <ToastContainer autoClose={5000} closeOnClick position="bottom-right" />
    </div>
  );
}

export default App;
