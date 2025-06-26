// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);        // stores logged in user
  const [loading, setLoading] = useState(true);  // prevents UI flicker

  const SESSION_TIMEOUT = 15 * 60 * 1000; // 15 minutes

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ⏳ Auto Logout Logic
  useEffect(() => {
    if (!user) return;

    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        signOut(auth).then(() => {
          alert("Session expired. You have been logged out.");
        });
      }, SESSION_TIMEOUT);
    };

    // 🖱️ Events to listen for user activity
    const activityEvents = ["mousemove", "keydown", "click", "scroll"];
    activityEvents.forEach(event =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer(); // Start on mount

    return () => {
      clearTimeout(timeout);
      activityEvents.forEach(event =>
        window.removeEventListener(event, resetTimer)
      );
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
