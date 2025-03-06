import axios from 'axios';

const API_URL = 'http://localhost:4000/auth';

export const loginWithGoogle = () => {
  window.location.href = `${API_URL}/google`;
};

export const getUserProfile = async () => {
  try {
    const res = await axios.get('http://localhost:4000/auth/profile', {
      withCredentials: true, // Ensures cookies are sent
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

export const logout = async () => {
  await axios.get(`${API_URL}/logout`, { withCredentials: true });
};
