import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import {
  SelectIsLoading,
  SelectIsLoggedIn,
  SelectError,
  SelectIsRefreshing,
} from "../../redux/auth/selectors";

const PrivateRoute = () => {
  const isLoading = useSelector(SelectIsLoading);
  const isLoggedIn = useSelector(SelectIsLoggedIn);
  const authError = useSelector(SelectError);
  const isRefreshing = useSelector(SelectIsRefreshing);

  if (isLoading || isRefreshing) {
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
