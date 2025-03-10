import css from "./RegisterForm.module.css";
import icons from "../../../assets/icons/icons.svg";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../../../redux/auth/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "../../../utils/validation";

const RegisterForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerValidationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const result = dispatch(registerUser(data));

      if (result.error) {
        console.error("Registration Error:", result.error.message);
      } else {
        console.log("Registration Successful:", result);
        reset();
      }
    } catch (error) {
      console.error("Registration Failed:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.wrapper}>
        <div className={css.nameWrapper}>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className={css.name}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>

        <div className={css.emailWrapper}>
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            className={css.email}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>

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
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}
        </div>
      </div>

      <div>
        <button type="submit" className={css.button}>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
