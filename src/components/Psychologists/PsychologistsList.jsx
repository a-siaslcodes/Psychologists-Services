import PsychologistCard from "./PsychologistCard/PsychologistsCard";
import { selectPsychologists } from "../../redux/psychologists/selectors";
import { useSelector } from "react-redux";
import css from "./PsychologistsList.module.css";

function PsychologistsList() {
  const psychologists = useSelector(selectPsychologists);
  console.log(psychologists);

  return (
    <div>
      <ul className={css.wrapper}>
        {psychologists.map((item, index) => (
          <li key={item.id || index}>
            <PsychologistCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PsychologistsList;
