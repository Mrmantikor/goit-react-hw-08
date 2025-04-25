import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};

export default RestrictedRoute;
