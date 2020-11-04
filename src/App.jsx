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
import Analytics from "react-router-ga";
import Login from "./components/Authentication/Login";
import { CookiesProvider } from "react-cookie";
import Inbox from "./components/Inbox/Inbox";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import HttpsRedirect from "react-https-redirect";
import { ToastProvider } from "react-toast-notifications";


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
      <HttpsRedirect>
        <Router >
          <GoBack />
          <Analytics id="UA-179513110-1">
            <CookiesProvider>
            <ToastProvider>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/inbox" component={Inbox} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Technologies} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={NotFound} />
              </Switch>
              </ToastProvider>
            </CookiesProvider>
          </Analytics>
        </Router>
      </HttpsRedirect>
    </div>
  );
};

export default App;
