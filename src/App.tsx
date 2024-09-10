import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import { Usuarios } from "./pages/Usuarios.js";
import { UsuariosPais } from "./pages/UsuariosPais.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/usuarios/Pais" element={<UsuariosPais />} />
    </Routes>
  );
}

export default App;

/*<Router>
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
        </nav>*/
