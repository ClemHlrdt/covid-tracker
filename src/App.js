import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import Spinner from "./components/UI/Spinner/Spinner";

import { initGA, PageView } from "./Analytics";

const Global = React.lazy(() => import("./containers/Global/Global"));
const Countries = React.lazy(() => import("./containers/Countries/Countries"));
const Map = React.lazy(() => import("./containers/Map/Map"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

const TRACKING_ID = "UA-154386020-1";

function App() {
  useEffect(() => {
    initGA(TRACKING_ID);
    PageView();
  }, []);
  return (
    <div className="relative h-screen">
      <Suspense fallback={<Spinner />}>
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
                <Map />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
