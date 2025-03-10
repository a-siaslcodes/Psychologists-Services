import css from "./PsychologistsPage.module.css";

import Psychologists from "../../components/Psychologists/Psychologists";
import Container from "../../components/Container/Container";
import Filters from "../../components/Filters/Filters";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPsychologists } from "../../redux/psychologists/operations";
import {
  selectFilteredPsychologists,
  selectIsLoading,
} from "../../redux/psychologists/selectors";
import { setFilter } from "../../redux/psychologists/slice";

const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectFilteredPsychologists);
  const loading = useSelector(selectIsLoading);

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
        {loading ? (
          <div className={css.loading}>Loading...</div>
        ) : (
          <>
            <Filters onFilterChange={handleFilterChange} />
            <Psychologists psychologists={psychologists} />
          </>
        )}
      </section>
    </Container>
  );
};

export default PsychologistsPage;
