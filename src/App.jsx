import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Home/Homepage";
import AOS from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      startEvent: "load",
      // disable: "mobile",
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;