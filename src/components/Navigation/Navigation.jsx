import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.wrapper}>
          <NavLink className={css.logo} to="/">
            <p className={css.accent}>
              psychologists.
              <span className={css.logo}>services</span>
            </p>
          </NavLink>

          <div className={css.linksBox}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/psychologists" className={buildLinkClass}>
              Psychologists
            </NavLink>
            <NavLink to="/favorite" className={buildLinkClass}>
              Favorite
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
