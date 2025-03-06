import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

console.log(import.meta.env.VITE_API_URL, '✅ API URL Loaded');

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!import.meta.env.VITE_API_URL) {
        console.error('❌ VITE_API_URL is not defined');
        return;
      }

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/profile`,
          { withCredentials: true }
        );
        setUser(res.data);
      } catch (error) {
        console.error(
          '❌ User not authenticated:',
          error.response?.data || error.message
        );
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
