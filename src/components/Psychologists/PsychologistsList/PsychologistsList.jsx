import css from "./PsychologistsList.module.css";
import PsychologistsCard from "../PsychologistCard/PsychologistsCard";

function PsychologistsList({ psychologists }) {
  return (
    <div>
      <ul className={css.wrapper}>
        {psychologists.map((psychologist) => (
          <li key={psychologist.id}>
            <PsychologistsCard psychologist={psychologist} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PsychologistsList;
