import PsychologistsList from "../../components/Psychologists/Psychologists";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPsychologists } from "../../redux/psychologists/operations";
import { selectPsychologists } from "../../redux/psychologists/selectors";

import css from "./PsychologistsPage.module.css";

const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);

  useEffect(() => {
    if (psychologists.length === 0) {
      dispatch(fetchPsychologists());
    }
  }, [dispatch, psychologists.length]);

  return (
    <Container>
      <section className={css.wrapper}>
        <PsychologistsList psychologists={psychologists} />
      </section>
    </Container>
  );
};

export default PsychologistsPage;
