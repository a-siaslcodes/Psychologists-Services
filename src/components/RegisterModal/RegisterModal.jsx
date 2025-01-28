import css from "./RegisterModal.module.css";
import RegisterForm from "./RegisterForm/RegisterForm";

function RegisterModal() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Registration</h2>
      <p className={css.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <RegisterForm />
    </div>
  );
}

export default RegisterModal;
