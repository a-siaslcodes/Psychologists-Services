import ReactSelect from "react-select";
import { Controller } from "react-hook-form";
import css from "./TimePicker.module.css";

 const generateTimeOptions = () => {
  const options = [];
  for (let hour = 8; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      options.push({
        value: `${formattedHour}:${formattedMinute}`,
        label: `${formattedHour}:${formattedMinute}`,
      });
    }
  }
  return options;
};

const TimePicker = ({ control, name, errors }) => {
  return (
    <div className={css.meeting}>
      <label htmlFor={name} className={css.label}></label>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Time is required" }}
        render={({ field }) => (
          <ReactSelect
            {...field}
            options={generateTimeOptions()}
            className={css.select}
            placeholder="Select time"
            isClearable
            value={field.value || ""}
          />
        )}
      />
      {errors[name] && <p className={css.error}>{errors[name].message}</p>}
    </div>
  );
};

export default TimePicker;
