import React from "react";
import Homepage from "../components/Home/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Technologies from "../components/Work/Technologies";
import TemperatureTracker from "../components/Widgets/WeatherApp/TemperatureTracker";
import Nasa from "../components/Widgets/NASA";
import NewsApi from "../components/Widgets/NewsApi/NewsApi";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Technologies} />
        <Route path="/contact" component={Contact} />
        <Route path="/widgets/weather-app" component={TemperatureTracker} />
        <Route path="/widgets/mars-rover-images" component={Nasa} />
        <Route path="/widgets/news" component={NewsApi} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
