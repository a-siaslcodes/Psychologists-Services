import { useState } from "react";
import css from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import icons from "../../../assets/icons/icons.svg";
import { loginUser } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../../../utils/validation";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

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
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(loginUser(data)).unwrap();
      console.log(result);
      reset();
    } catch (error) {
      toast.error(`Login Failed: ${error.message}`);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.wrapper}>
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
            <svg className={css.iconEye} width="20" height="20">
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
          Log in
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </form>
  );
};

export default LoginForm;
