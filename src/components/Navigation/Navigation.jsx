import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import { useState } from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

const Navigation = () => {
  const [isLoginModalOpen, setLoginModalopen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

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
            <button
              className={css.loginButton}
              onClick={() => setLoginModalopen(true)}
            >
              Log in
            </button>
            <Modal isOpen={isLoginModalOpen} setIsOpen={setLoginModalopen}>
              <LoginModal setIsOpen={setLoginModalopen} />
            </Modal>
            <button
              className={css.registerButton}
              onClick={() => setRegisterOpen(true)}
            >
              Registration
            </button>
            <Modal isOpen={isRegisterOpen} setIsOpen={setRegisterOpen}>
              <RegisterModal setIsOpen={setRegisterOpen} />
            </Modal>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
