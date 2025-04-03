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
    <div className={css.linksBox}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/psychologists" className={buildLinkClass}>
        Psychologists
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
