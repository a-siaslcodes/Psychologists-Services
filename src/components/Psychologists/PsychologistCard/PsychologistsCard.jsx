import css from "./PsychologistsCard.module.css";
import icons from "../../../assets/icons/icons.svg";

function PsychologistsCard({ item }) {
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
            <button className={css.likeButton}></button>
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

        <button type="button" className={css.readMoreBtn}>
          Read more
        </button>
      </div>
    </div>
  );
}

export default PsychologistsCard;
