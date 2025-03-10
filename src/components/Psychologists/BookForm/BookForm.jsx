import css from "./BookForm.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookValidationSchema } from "../../../utils/validation";
import { ToastContainer, toast } from "react-toastify";
import TimePicker from "./TimePicker/TimePicker";

const BookForm = ({ onClose }) => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
      meetingTime: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast("Thank you, you will be contacted shortly!");

    reset();

    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.name}>
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className={css.input}
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}
      </div>

      <div className={css.wrapper}>
        <div className={css.phone}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+380"
            className={css.input}
          />
          {errors.phone && <p className={css.error}>{errors.phone.message}</p>}
        </div>

        <TimePicker control={control} name="meetingTime" errors={errors} />
      </div>

      <div className={css.email}>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className={css.input}
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
      </div>

      <div className={css.comment}>
        <textarea
          {...register("comment")}
          placeholder="Comment"
          className={css.textarea}
        />
        {errors.comment && (
          <p className={css.error}>{errors.comment.message}</p>
        )}
      </div>

      <div>
        <button className={css.button}>Send</button>
      </div>
      <ToastContainer position="top-right" autoClose={1500} />
    </form>
  );
};

export default BookForm;
