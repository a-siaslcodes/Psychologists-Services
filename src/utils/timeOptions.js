export const generateTimeOptions = () => {
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

export const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid transparent",
    borderRadius: "12px",
    width: "232px",
    height: "52px",
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "black",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
    border: "1px solid #ccc",
    right: "0",
    maxWidth: "151px",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0",
    borderRadius: "8px",
    maxHeight: "180px",
    maxWidth: "151px",
    overflowY: "auto",
    textAlign: "center",
  }),
  option: (provided, state) => ({
    ...provided,
    background: "transparent",
    color: state.isFocused ? "black" : "rgba(25, 26, 21, 0.3);",
    fontSize: "16px",
    padding: "10px",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "black",
      background: "transparent",
    },
  }),
};
