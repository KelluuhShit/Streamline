import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
