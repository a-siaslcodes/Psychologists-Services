import css from "./Navigation.module.css";
import { NavLink, Link } from "react-router-dom";
import Container from "../Container/Container";

const Navigation = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.wrapper}>
          <div className={css.leftBlock}>
            <Link className={css.logo} to="/">
              <p className={css.accent}>
                psychologists.
                <span className={css.logo}>services</span>
              </p>
            </Link>
            <NavLink to="/" className={css.homeLink}>
              Home
            </NavLink>
            <NavLink to="/psychologists" className={css.link}>
              Psychologists
            </NavLink>
          </div>
          <div className={css.authBox}>
            <NavLink to="/login" className={css.loginButton}>
              Log in
            </NavLink>
            <NavLink to="/register" className={css.registerButton}>
              Registration
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
