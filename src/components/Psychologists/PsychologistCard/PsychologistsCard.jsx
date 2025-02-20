import css from "./PsychologistsCard.module.css";
import icons from "../../../assets/icons/icons.svg";
import PsychologistReview from "../PsychologistReview/PsychologistReview";
import BookAppointmentBtn from "../BookAppointmentBtn/BookAppointmentBtn";
import { useState } from "react";
import { motion } from "framer-motion";

import LikeButton from "../../LikeButton/LikeButton";

function PsychologistsCard({ psychologist }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.avatarBox}>
        <img
          src={psychologist.avatar_url}
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
              Rating:<span className={css.helper}>{psychologist.rating}</span>
            </li>

            <svg className={css.dashIcon} width={3} height={16}>
              <use href={`${icons}#icon-dash`}></use>
            </svg>

            <li>
              Price / 1 hour:
              <span className={css.priceAccent}>
                {psychologist.price_per_hour}$
              </span>
            </li>

            <LikeButton psychologist={psychologist} />
          </ul>
        </div>
        <div className={css.mainInfoBox}>
          <h2 className={css.name}>{psychologist.name}</h2>
          <ul className={css.qualificationBox}>
            <li className={css.qualificationItem}>
              Experience:
              <span className={css.text}> {psychologist.experience}</span>
            </li>
            <li className={css.qualificationItem}>
              License:<span className={css.text}> {psychologist.license}</span>
            </li>
            <li className={css.qualificationItem}>
              Specialization:
              <span className={css.text}> {psychologist.specialization}</span>
            </li>
            <li className={css.qualificationItem}>
              Initial consultation:
              <span className={css.text}>
                {psychologist.initial_consultation}
              </span>
            </li>
          </ul>
          <p className={css.aboutText}>{psychologist.about}</p>
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
          <PsychologistReview item={psychologist} />
          <BookAppointmentBtn item={psychologist} />
        </motion.div>
      </div>
    </div>
  );
}

export default PsychologistsCard;
