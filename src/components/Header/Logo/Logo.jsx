import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

function Logo() {
  return (
    <div className={css.logoWrapper}>
      <NavLink className={css.logo} to="/">
        <p className={css.accent}>
          psychologists.
          <span className={css.logo}>services</span>
        </p>
      </NavLink>
    </div>
  );
}

export default Logo;
