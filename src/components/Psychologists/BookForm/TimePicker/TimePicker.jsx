import ReactSelect from "react-select";
import { Controller } from "react-hook-form";
import css from "./TimePicker.module.css";
import {
  generateTimeOptions,
  customStyles,
} from "../../../../utils/timeOptions";

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
            placeholder="Select time"
            isClearable
            value={
              field.value ? { value: field.value, label: field.value } : null
            }
            onChange={(selectedOption) =>
              field.onChange(selectedOption ? selectedOption.value : "")
            }
            styles={customStyles}
          />
        )}
      />
      {errors[name] && <p className={css.error}>{"Time is required"}</p>}
    </div>
  );
};

export default TimePicker;
