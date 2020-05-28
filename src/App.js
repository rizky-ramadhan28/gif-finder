import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./pages/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Loading from "./pages/loading/loading.component";

import { GifContext } from "./context/index";

import "./App.css";

function App() {
  const appContext = useContext(GifContext);
  const { isLoading } = appContext;

  return (
    <div className="App">
      <Header />

      <div className="container mt-5 mb-5 main-content">
        <Switch>
          <Route exact path="/" component={isLoading ? Loading : HomePage} />
          <Route
            path="/gif-finder"
            component={isLoading ? Loading : HomePage}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
