import css from "./Header.module.css";
import Container from "../Container/Container";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import UserNav from "./UserNav/UserNav";
import { useSelector } from "react-redux";
import { SelectIsLoggedIn } from "../../redux/auth/selectors";
import Logo from "./Logo/Logo";
import MobileBurger from "./MobileBurger/MobileBurger";

const Header = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return (
    <header className={css.header}>
      <Container>
        <nav className={css.wrapper}>
          <Logo />

          <div className={css.desktopNav}>
            <Navigation />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
          </div>

          <div className={css.mobileNav}>
            <MobileBurger isLoggedIn={isLoggedIn} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
