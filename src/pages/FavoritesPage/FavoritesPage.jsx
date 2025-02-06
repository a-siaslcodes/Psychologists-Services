import css from "./FavoritesPage.module.css";
import Container from "../../components/Container/Container";
import { selectFavorites } from "../../redux/psychologists/selectors";
import { useSelector } from "react-redux";
import PsychologistsCard from "../../components/Psychologists/PsychologistCard/PsychologistsCard";

function FavoritesPage() {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <Container>
        <div className={css.wrapper}>
          {favorites.length === 0 ? (
            <p>No favorites added yet.</p>
          ) : (
            favorites.map((psychologist) => (
              <li key={psychologist.id}>
                <PsychologistsCard psychologist={psychologist} />
              </li>
            ))
          )}
        </div>
      </Container>
    </div>
  );
}

export default FavoritesPage;
