import { useState } from "react";
import { useSelector } from "react-redux";
import { SelectIsLoggedIn } from "../../../redux/auth/selectors";
import css from "./MobileBurger.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import icons from "../../../assets/icons/icons.svg";
import Navigation from "../Navigation/Navigation";

const MobileBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={css.mobileHeader}>
      <button className={css.burger} onClick={toggleMenu}>
        <svg width={28} height={28} className={css.icon}>
          <use href={`${icons}#icon-menu`} />
        </svg>
      </button>

      {isOpen && (
        <div className={css.menu}>
          <button className={css.close} onClick={toggleMenu}>
            <svg width={28} height={28} className={css.icon}>
              <use href={`${icons}#icon-close`} />
            </svg>
          </button>
          <Navigation />
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </div>
      )}
    </div>
  );
};

export default MobileBurger;
