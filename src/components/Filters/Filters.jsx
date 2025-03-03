import { useState } from "react";
import css from "./Filters.module.css";
import icons from "../../assets/icons/icons.svg";

const Filters = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Show all");

  const filters = [
    { value: "Show all", label: "Show all" },
    { value: "A to Z", label: "A to Z" },
    { value: "Z to A", label: "Z to A" },
    { value: "Less than 10$", label: "Less than 10$" },
    { value: "Greater than 10$", label: "Greater than 10$" },
    { value: "Popular", label: "Popular" },
    { value: "Not Popular", label: "Not Popular" },
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleFilterChange = (filter) => {
    onFilterChange(filter);
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  return (
    <div className={css.selectWrapper}>
      <label htmlFor="filter" className={css.label}>
        Filters:
      </label>
      <div
        className={css.select}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedFilter}
        <svg width={20} height={20} className={css.arrowIcon}>
          <use href={`${icons}#icon-${isOpen ? "arrow-up" : "arrow-down"}`} />
        </svg>
      </div>
      {isOpen && (
        <ul className={css.selectDropdown} role="listbox">
          {filters.map((filter) => (
            <li
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={css.selectOption}
              role="option"
            >
              {filter.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filters;
