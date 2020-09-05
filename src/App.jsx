import React, { useEffect } from 'react';
import './App.css';
import Homepage from './components/Home/Homepage';
import AOS from "aos";


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      startEvent: 'load',
      disable: 'mobile',
    });
  }, []);

  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
