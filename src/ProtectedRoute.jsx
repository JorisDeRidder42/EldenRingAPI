import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/authContext";

export const ProtectedRoute = ({ children }) => {

    const { currentUser } = useAuth()
    if (!currentUser) {
      return <Navigate to="/signIn" replace />;
    }
  
    return children;
  };