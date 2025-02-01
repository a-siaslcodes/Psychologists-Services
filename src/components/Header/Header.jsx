import css from "./Header.module.css";
import Container from "../Container/Container";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import UserNav from "./UserNav/UserNav";
import { useSelector } from "react-redux";
import { SelectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return (
    <header className={css.header}>
      <Container>
        <nav className={css.wrapper}>
          <Navigation />

          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
