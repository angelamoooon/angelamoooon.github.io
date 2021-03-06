import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Writing from "./components/Writing/Writing";
import EssayPage from "./components/Writing/Essays/EssayPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route exact path="/writing" component={Writing} />
          <Route path="/writing/:essayTitle" component={EssayPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;