import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
//import About from './pages/About';
import ApiData from './pages/ApiData.js';

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-500">About</Link>
            </li>
            <li>
              <Link to="/api-data" className="text-blue-500">API Data</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/api-data" element={<ApiData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
