import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginSuccess, logout } from "../store/authReducer";
import { ThemeProvider } from "../context/ThemeContext";

export const GlobalWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check for existing auth token and user data
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        dispatch(loginSuccess({ userEmail: user.email, userUid: user.uid }));
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Clear invalid data
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <ThemeProvider>
      <Outlet />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
};
