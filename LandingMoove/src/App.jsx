import { useState } from "react";
import "./App.css";
import LandingBody from "./components/LandingBody";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <LandingBody />
      <Footer />
      <div></div>
    </div>
  );
}

export default App;
