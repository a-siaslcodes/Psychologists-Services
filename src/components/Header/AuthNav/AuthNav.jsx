import css from "./AuthNav.module.css";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import LoginModal from "../../LoginModal/LoginModal";
import RegisterModal from "../../RegisterModal/RegisterModal";

function AuthNav() {
  const [isLoginModalOpen, setLoginModalopen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
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
  );
}

export default AuthNav;
