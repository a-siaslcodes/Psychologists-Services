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
    dispatch(fetchPsychologists());
  }, [dispatch]);

  return (
    <Container>
      <section className={css.wrapper}>
        {/* <div>filters</div> */}
        <PsychologistsList psychologists={psychologists} />
      </section>
    </Container>
  );
};

export default PsychologistsPage;
