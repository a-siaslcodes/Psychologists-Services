import { useState } from "react";
import css from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import icons from "../../../assets/icons/icons.svg";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.wrapper}>
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          className={css.email}
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}

        <div className={css.passwordWrapper}>
          <input
            {...register("password")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className={css.password}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={css.hideButton}
          >
            <svg className={css.icon}>
              <use
                href={`${icons}#${isPasswordVisible ? "icon-eye" : "eye-off"}`}
              />
            </svg>
          </button>
        </div>
        {errors.password && (
          <p className={css.error}>{errors.password.message}</p>
        )}
      </div>

      <div>
        <button type="submit" className={css.button}>
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
