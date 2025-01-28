import LoginForm from "./LoginForm/LoginForm";
import css from "./LoginModal.module.css";

const LoginModal = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Log in</h2>
      <p className={css.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginModal;
