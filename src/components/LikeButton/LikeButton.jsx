// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavorite } from "../../redux/psychologists/slice";
// import { selectFavorites } from "../../redux/psychologists/selectors";
// import { SelectIsLoggedIn } from "../../redux/auth/selectors";
// import Modal from "../Modal/Modal";
// import icons from "../../assets/icons/icons.svg";
// import css from "./LikeButton.module.css";

// const LikeButton = ({ psychologist }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const dispatch = useDispatch();

//   const isLoggedIn = useSelector(SelectIsLoggedIn);
//   const favorites = useSelector(selectFavorites);

//   const isActive = favorites.some((fav) => fav.id === psychologist.id);

//   const handleLikeClick = () => {
//     if (!isLoggedIn) {
//       setIsModalOpen(true);
//       return;
//     }
//     dispatch(toggleFavorite(psychologist));
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className={`${css.likeButton} ${isActive ? css.active : ""}`}
//         onClick={handleLikeClick}
//       >
//         <svg width={26} height={26}>
//           <use href={`${icons}#icon-likeBtn`} />
//         </svg>
//       </button>

//       <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
//         <div className={css.wrapper}>
//           <h2 className={css.title}>Please Log In</h2>
//           <p className={css.text}>
//             You need to be logged in to add a psychologist to favorites.
//           </p>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default LikeButton;

// ============================================== above is old default

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectIsLoggedIn, SelectUserInfo } from "../../redux/auth/selectors";
import Modal from "../Modal/Modal";
import icons from "../../assets/icons/icons.svg";
import css from "./LikeButton.module.css";
import { SelectUserId } from "../../redux/auth/selectors";

import { addFavorite, removeFavorite } from "../../redux/auth/operations";

const LikeButton = ({ psychologist }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(SelectIsLoggedIn);
  const user = useSelector(SelectUserInfo);
  const userId = useSelector(SelectUserId);

  const favorites = user?.favorites || [];
  const psychologistId = psychologist.id;

  const isFavorite = favorites.find((item) => item.id === psychologist.id);

  // const handleLikeClick = () => {
  //   if (!isLoggedIn) {
  //     setIsModalOpen(true);
  //     return;
  //   }

  //   if (isFavorite) {
  //     dispatch(removeFavorite({ userId, psychologistId }))
  //       .unwrap()
  //       .then(() => console.log("psychologist removed from favorites"))
  //       .catch(() => console.log("Error removing psychologist"));
  //   } else {
  //     dispatch(addFavorite({ userId, psychologistId }))
  //       .unwrap()
  //       .then(() => console.log("psychologist added to favorites"))
  //       .catch(() =>
  //         console.log("Error adding psychologist, please try again")
  //       );
  //   }
  // };

  const handleLikeClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
      return;
    }

    if (isFavorite) {
      dispatch(removeFavorite({ userId, psychologistId }));
      console.log("Psychologist removed from favorites");
    } else {
      dispatch(addFavorite({ userId, psychologistId }));
      console.log("Psychologist added to favorites");
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

//  ============================================ above is working
