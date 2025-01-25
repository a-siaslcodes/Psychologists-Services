import css from "./FavoritesPage.module.css";
import Container from "../../components/Container/Container";
import { selectFavorites } from "../../redux/psychologists/selectors";
import { useSelector } from "react-redux";
import PsychologistsCard from "../../components/Psychologists/PsychologistCard/PsychologistsCard";
import BookForm from "../../components/Psychologists/BookForm/BookForm";

function FavoritesPage() {
  // const favorites = useSelector(selectFavorites);

  return (
    <div>
      <Container>
        {/* <div className={css.wrapper}>
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((item, index) => (
            <li key={index}>
              <PsychologistsCard item={item} />
            </li>
          ))
        )}
      </div> */}
        <BookForm />
      </Container>
    </div>
  );
}

export default FavoritesPage;
