import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Coursework from './Coursework';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import Research from './Research';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/coursework" element={<Coursework />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
