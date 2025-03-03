import css from "./PsychologistsPage.module.css";

import PsychologistsList from "../../components/Psychologists/Psychologists";
import Container from "../../components/Container/Container";
import Filters from "../../components/Filters/Filters";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPsychologists } from "../../redux/psychologists/operations";
import { selectFilteredPsychologists } from "../../redux/psychologists/selectors";
import { setFilter } from "../../redux/psychologists/slice";

const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectFilteredPsychologists);

  useEffect(() => {
    if (psychologists.length === 0) {
      dispatch(fetchPsychologists());
    }
  }, [dispatch, psychologists.length]);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <Container>
      <section className={css.wrapper}>
        <Filters onFilterChange={handleFilterChange} />
        <PsychologistsList psychologists={psychologists} />
      </section>
    </Container>
  );
};

export default PsychologistsPage;
