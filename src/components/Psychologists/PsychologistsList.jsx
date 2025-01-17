import PsychologistsCard from "./PsychologistCard/PsychologistsCard";
import { selectPsychologists } from "../../redux/psychologists/selectors";
import { useSelector } from "react-redux";
import css from "./PsychologistsList.module.css";

function PsychologistsList() {
  const psychologists = useSelector(selectPsychologists);

  return (
    <div className={css.content}>
      <ul className={css.wrapper}>
        {psychologists?.map((item, index) => (
          <li key={index}>
            <PsychologistsCard item={item} />
          </li>
        ))}
      </ul>
      <button className={css.loadMoreBtn}>Load More</button>
    </div>
  );
}

export default PsychologistsList;
