import css from "./AppointmentModal.module.css";
import BookForm from "../../BookForm/BookForm";

const AppointmentModal = ({ item, setIsOpen }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Make an appointment with a psychologists</h2>
      <p className={css.text}>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <div className={css.psychologistInfo}>
        <img
          src={item.avatar_url}
          alt="psychologist photo"
          className={css.avatar}
        />
        <div>
          <span className={css.accent}>Your psychologists</span>
          <p className={css.name}>{item.name}</p>
        </div>
      </div>
      <BookForm onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default AppointmentModal;
