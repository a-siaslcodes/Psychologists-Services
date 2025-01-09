import Container from "../../components/Container/Container";
import hero from "../../assets/img/hero.jpg";
import css from "./HomePage.module.css";

import icons from "../../assets/icons/icons.svg";

const HomePage = () => {
  return (
    <section className={css.content}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.mainBox}>
            <h2 className={css.title}>
              The road to the <span className={css.accent}>depths</span> of the
              human soul
            </h2>
            <p className={css.text}>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </p>
            <button className={css.button}>
              Get started
              <svg className={css.buttonIcon} width={15} height={17}>
                <use href={`${icons}#icon-arrow`}></use>
              </svg>
            </button>
          </div>
          <div className={css.heroBox}>
            <span className={css.boxOne}>
              <svg className={css.userIcon} width={25} height={25}>
                <use href={`${icons}#icon-users`}></use>
              </svg>
            </span>

            <span className={css.boxTwo}>
              <svg className={css.questionIcon} width={10} height={17}>
                <use href={`${icons}#icon-question`}></use>
              </svg>
            </span>

            <img
              src={hero}
              width={464}
              height={526}
              className={css.heroImg}
            ></img>

            <div className={css.infoBox}>
              <div className={css.firstBox}>
                <div className={css.infoBoxIcon}>
                  <svg className={css.checkIcon} width={20} height={16}>
                    <use href={`${icons}#icon-check`}></use>
                  </svg>
                </div>
              </div>

              <div className={css.secondBox}>
                <p className={css.infoBoxText}>Experienced psychologists</p>
                <span className={css.infoBoxNumber}>15,000</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
