import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext(); // Export directly

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/profile`,
          {
            withCredentials: true,
          }
        );
        setUser(res.data);
      } catch (error) {
        console.error('User not authenticated');
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
