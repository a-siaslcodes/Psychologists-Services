import { useForm } from "react-hook-form";

import css from "./BookForm.module.css";
import TimePicker from "./TimePicker/TimePicker";

const BookForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
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
        {errors.address && (
          <p className={css.error}>{errors.address.message}</p>
        )}
      </div>

      <div className={css.wrapper}>
        {/* Phone */}
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
    </form>
  );
};

export default BookForm;
