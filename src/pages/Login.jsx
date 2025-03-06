import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Redirect to Dashboard after login
    }
  }, [user, navigate]);

  const handleGoogleLogin = () => {
    window.open(import.meta.env.VITE_API_URL + '/auth/google', '_self');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Sign in with your Google account</p>
        <button onClick={handleGoogleLogin} className="login-button">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
