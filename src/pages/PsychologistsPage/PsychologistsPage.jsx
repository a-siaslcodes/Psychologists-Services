import PsychologistsList from "../../components/Psychologists/PsychologistsList";
import Container from "../../components/Container/Container";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPsychologists } from "../../redux/psychologists/operations";

const PsychologistsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div>filters</div>
        <PsychologistsList />
      </Container>
    </>
  );
};

export default PsychologistsPage;
