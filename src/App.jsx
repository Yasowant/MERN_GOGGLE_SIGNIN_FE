import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Navbar stays at the top */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page as Default */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
