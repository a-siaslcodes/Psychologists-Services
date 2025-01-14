import css from "./PsychologistReview.module.css";
import icons from "../../../assets/icons/icons.svg";

function PsychologistReview({ item }) {
  return (
    <div className={css.wrapper}>
      <ul>
        {item.reviews.map((item, index) => (
          <li key={index}>
            <div className={css.reviewBox}>
              <p className={css.reviewerIcon}>{item.reviewer[0]}</p>
              <ul className={css.reviewerList}>
                <li className={css.name}>{item.reviewer}</li>
                <li className={css.rating}>
                  <svg className={css.starIcon} width={16} height={16}>
                    <use href={`${icons}#icon-star`}></use>
                  </svg>
                  {item.rating.toFixed(1)}
                </li>
              </ul>
            </div>
            <p className={css.comment}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PsychologistReview;
