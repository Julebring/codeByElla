import React, {useEffect} from "react";
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "CodeByElla"
    ;   }, []);

  return (
    <div >
     <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tjanster" element={<Service />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          
        </div>

      </Router>
       
       
      <Footer/>
    </div>
  );
}

export default App;
