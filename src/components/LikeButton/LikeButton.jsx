import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectIsLoggedIn, SelectUserId } from "../../redux/auth/selectors";
import Modal from "../Modal/Modal";
import icons from "../../assets/icons/icons.svg";
import css from "./LikeButton.module.css";
import { addFavorite, removeFavorite } from "../../redux/favorites/operations";
import { SelectFavorites } from "../../redux/favorites/selectors";

const LikeButton = ({ psychologist }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(SelectIsLoggedIn);
  const userId = useSelector(SelectUserId);
  const favorites = useSelector(SelectFavorites) || [];

  const isFavorite = favorites.some((item) => item.id === psychologist.id);

  const handleLikeClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
      return;
    }

    const psychologistId = psychologist.id;

    if (isFavorite) {
      dispatch(removeFavorite({ userId, psychologistId }))
        .unwrap()
        .then(() => console.log("psychologist removed from favorites"))
        .catch(() => console.log("Error removing psychologist"));
    } else {
      dispatch(addFavorite({ userId, psychologistId }))
        .unwrap()
        .then(() => console.log("psychologist added to favorites"))
        .catch(() =>
          console.log("Error adding psychologist, please try again")
        );
    }
  };

  return (
    <>
      <button
        type="button"
        className={`${css.likeButton} ${isFavorite ? css.active : ""}`}
        onClick={handleLikeClick}
      >
        <svg width={26} height={26}>
          <use href={`${icons}#icon-likeBtn`} />
        </svg>
      </button>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className={css.wrapper}>
          <h2 className={css.title}>Please Log In</h2>
          <p className={css.text}>
            You need to be logged in to add a psychologist to favorites.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default LikeButton;
