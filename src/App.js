import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <div className="container">
          <Header />
          <Intro />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;