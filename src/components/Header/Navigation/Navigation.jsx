import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { useSelector } from "react-redux";
import { SelectIsLoggedIn } from "../../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

const Navigation = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return (
    <>
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
        {isLoggedIn && (
          <NavLink to="/favorite" className={buildLinkClass}>
            Favorite
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navigation;
