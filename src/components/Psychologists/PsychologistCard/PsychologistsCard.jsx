import css from "./PsychologistsCard.module.css";
import icons from "../../../assets/icons/icons.svg";
import PsychologistReview from "../PsychologistReview/PsychologistReview";
import { useState } from "react";
import { motion } from "framer-motion";
import { selectFavorites } from "../../../redux/psychologists/selectors";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/psychologists/slice";

function PsychologistsCard({ item }) {

  const [isExpanded, setIsExpanded] = useState(false);
  
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const favorites = useSelector(selectFavorites);
  const isActive = favorites.some((favorite) => favorite.name === item.name);

  const handleLikeClick = () => {
    dispatch(toggleFavorite(item));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.avatarBox}>
        <img
          src={item.avatar_url}
          alt="Psychologist Avatar"
          width={96}
          height={96}
          className={css.avatarImg}
        />
        <svg className={css.onlineIcon} width={14} height={14}>
          <use href={`${icons}#icon-online`}></use>
        </svg>
      </div>

      <div className={css.cardInfoBox}>
        <div className={css.subInfo}>
          <p>Psychologist</p>
          <ul className={css.subWrapper}>
            <svg className={css.starIcon} width={16} height={16}>
              <use href={`${icons}#icon-star`}></use>
            </svg>
            <li>
              Rating:<span className={css.helper}>{item.rating}</span>
            </li>

            <svg className={css.dashIcon} width={3} height={16}>
              <use href={`${icons}#icon-dash`}></use>
            </svg>

            <li>
              Price / 1 hour:
              <span className={css.priceAccent}>{item.price_per_hour}$</span>
            </li>

            <button
              type="button"
              className={`${css.likeButton} ${isActive ? css.active : ""}`}
              onClick={handleLikeClick}
            >
              <svg width={26} height={26}>
                <use href={`${icons}#icon-likeBtn`}></use>
              </svg>
            </button>
          </ul>
        </div>
        <div className={css.mainInfoBox}>
          <h2 className={css.name}>{item.name}</h2>
          <ul className={css.qualificationBox}>
            <li className={css.qualificationItem}>
              Experience:<span className={css.text}> {item.experience}</span>
            </li>
            <li className={css.qualificationItem}>
              License:<span className={css.text}> {item.license}</span>
            </li>
            <li className={css.qualificationItem}>
              Specialization:
              <span className={css.text}> {item.specialization}</span>
            </li>
            <li className={css.qualificationItem}>
              Initial consultation:
              <span className={css.text}> {item.initial_consultation}</span>
            </li>
          </ul>
          <p className={css.aboutText}>{item.about}</p>
        </div>

        <button
          type="button"
          className={css.readMoreBtn}
          onClick={handleToggle}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isExpanded
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <PsychologistReview item={item} />
        </motion.div>
      </div>
    </div>
  );
}

export default PsychologistsCard;
