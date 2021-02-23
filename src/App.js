import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Countries from "./containers/Countries/Countries";
import Global from "./containers/Global/Global";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="relative h-screen">
      <Router>
        <Navbar />
        <main className="h-full mx-auto">
          <Switch>
            <Route path="/" exact>
              <Global />
            </Route>
            <Route path="/countries">
              <Countries />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Router>
      <ToastContainer autoClose={5000} closeOnClick position="bottom-right" />
    </div>
  );
}

export default App;
