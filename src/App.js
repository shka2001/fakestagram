import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Fakestagram</h1>
        </div>
      </div>

      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
