import css from "./PsychologistsList.module.css";
import PsychologistsCard from "../PsychologistCard/PsychologistsCard";

function PsychologistsList({ psychologists }) {
  return (
    <div>
      <ul className={css.wrapper}>
        {psychologists?.map((item, index) => (
          <li key={index}>
            <PsychologistsCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PsychologistsList;
