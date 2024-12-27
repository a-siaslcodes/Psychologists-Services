import css from "./Navigation.module.css";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <Link className={css.logo} to="/">
          <p>
            psychologists.<span>services</span>
          </p>
        </Link>

        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/psychologists">Psychologists</NavLink>
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/register">Registration</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
