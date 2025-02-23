import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import {
  SelectIsLoading,
  SelectIsLoggedIn,
  SelectError,
} from "../../redux/auth/selectors";

const PrivateRoute = () => {
  const isLoading = useSelector(SelectIsLoading);
  const isLoggedIn = useSelector(SelectIsLoggedIn);
  const authError = useSelector(SelectError);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (authError) {
    return <p>Opps...{authError}</p>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
