import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Home/Homepage";
import AOS from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Technologies from "./components/Work/Technologies";
import GoBack from "./components/GoBack";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    var AOS = require('aos');
    AOS.init({
      duration: 1200,
      startEvent: "load",
      // disable: "mobile",
    });
  }, []);

  return (
    <div className="App">
      <Router>
      <GoBack />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/about" component={About} />
          <Route path="/work" component={Technologies} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
