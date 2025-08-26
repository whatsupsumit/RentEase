import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../service/firebase-config";
import { loginSuccess, logout } from "../store/authReducer";
import { ThemeProvider } from "../context/ThemeContext";

export const GlobalWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginSuccess({ userEmail: user.email, userUid: user.uid }));
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        dispatch(logout());
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <ThemeProvider>
      <Outlet />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
};
