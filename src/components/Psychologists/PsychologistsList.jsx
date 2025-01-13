import PsychologistCard from "./PsychologistCard/PsychologistsCard";
import { selectPsychologists } from "../../redux/psychologists/selectors";
import { useSelector } from "react-redux";

function PsychologistsList() {
  const psychologists = useSelector(selectPsychologists);

  return (
    <div>
      <ul>
        {psychologists.map((item, index) => (
          <li key={index}>
            <PsychologistCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PsychologistsList;
