import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // ✅ If logged in → show page; else → redirect to login
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
