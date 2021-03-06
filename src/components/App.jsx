import React, { useEffect } from "react";
import "../App.css";
import Homepage from "./Home/Homepage";
import AOS from "aos";
import { Switch, Route, useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Technologies from "./Work/Technologies";
import Header from "./Navigation/Header";
import "aos/dist/aos.css";
import Analytics from "react-router-ga";
// import Login from "./components/Authentication/Login";
// import { CookiesProvider } from "react-cookie";
// import Inbox from "./components/Inbox/Inbox";
// import PrivateRoute from "./components/Authentication/PrivateRoute";
import { ToastProvider } from "react-toast-notifications";
import GlobalStyle from "../assets/styles/globalStyles";
import TemperatureTracker from "./Widgets/WeatherApp/TemperatureTracker";
import Nasa from "./Widgets/NASA";
import NewsApi from "./Widgets/NewsApi/NewsApi";
import Jokes from "./Widgets/Jokes/Jokes";
// import Assistant from "./components/Widgets/BrainAI/Assistant";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      startEvent: "load",
      // disable: "mobile",
    });
  }, []);

  let location = useLocation();

  return (
    <div className="App">
          <div id={`${location.pathname === '/' ? "" : "header-wrapper"}`}>
          <Header />
          </div>
          <Analytics id="UA-179513110-1">
            <GlobalStyle />
            <ToastProvider>
              <Switch>
                <Route exact path="/" component={Homepage} />
                {/* <Route path="/login" component={Login} /> */}
                {/* <PrivateRoute path="/inbox" component={Inbox} /> */}
                <Route path="/about" component={About} />
                <Route path="/work" component={Technologies} />
                <Route path="/contact" component={Contact} />
                <Route path="/widgets/weather-app" component={TemperatureTracker} />
                <Route path="/widgets/mars-rover-images" component={Nasa} />
                <Route path="/widgets/news" component={NewsApi} />
                <Route path="/widgets/jokes" component={Jokes} />
                {/* <Route path="/widgets/my-assistant" component={Assistant} /> */}
                <Route path="*" component={NotFound} />
              </Switch>
              </ToastProvider>
          </Analytics>
    </div>
  );
};

export default App;
