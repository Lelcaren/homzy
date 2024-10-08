import "./App.css";
import Companies from "./components/Companies/companies"; // Updated to match file case
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/value";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import GetStarted from "./GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;

