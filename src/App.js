// import React from 'react' 
// // import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Pages/Home'
// import Contact from './components/Pages/Contact'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import About from './components/Pages/About';
// function App() {
//   return (
//     <div>
// {/* <Link to="../src/component/pages/contact">Contact</Link> */}
//       <Navbar/>
      
//       <Home/>
     
      
//        <Footer/>
//        <About/>
//       <Contact/>


//       <Router>
//       <Routes>
    
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

      
//     </Router>

    
//     </div>
//   )
// }

// export default App






































































































import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar"; // adjust path if needed
import Footer from '../src/components/Footer'
// Import your page components
import Home from "./components/Pages/Home";

import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
{/* 
        {/* Sub-services routes */}
        
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
