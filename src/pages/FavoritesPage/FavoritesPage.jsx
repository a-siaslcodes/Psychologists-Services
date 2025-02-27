import css from "./FavoritesPage.module.css";
import Container from "../../components/Container/Container";
import { SelectFavorites } from "../../redux/favorites/selectors";
import { useSelector } from "react-redux";
import PsychologistsCard from "../../components/Psychologists/PsychologistCard/PsychologistsCard";

function FavoritesPage() {
  const favorites = useSelector(SelectFavorites);

  return (
    <div>
      <Container>
        <div className={css.wrapper}>
          {favorites.length === 0 ? (
            <div className={css.noDataBox}>
              <p className={css.notification}>No favorites added yet.</p>
            </div>
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
