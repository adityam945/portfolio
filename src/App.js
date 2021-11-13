import { useState } from "react";
import "./App.css";
import AppBar from "./components/Appbar/Appbar";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Resume from "./components/Resume/Resume";
import ContactUs from "./components/contact/contact"

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PdfView from "./components/PDFView/PdfView";

function App() {
  const [flip, setFlip] = useState("flip-card");
  const mystyle={
    // background: 'linear-gradient(to right, #430089, #82ffa1)',
  // background: "linear-gradient(-45deg,#00bcd4,#00bcd4, #b2ebf2 ,#e0f7fa,white,whitewhite,#eeeeee,#eeeeee,#eeeeee,#eeeeee,#eeeeee,#eeeeee)",
    
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: "100vh",
  }

  return (
    <Router>

      <div
        style={mystyle}
      >
        <AppBar setFlip={setFlip} />

        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/experienceandprojects">
            <Projects />
          </Route>
          <Route path="/pdfview">
            <PdfView />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/">
            <div
              // className="gradientBackground"
              style={{marginBottom: 50}}
            >
              <Home />
            </div>
          </Route>
        </Switch>

        <Footer />
      </div>
      
    </Router>
  );
}

export default App;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
