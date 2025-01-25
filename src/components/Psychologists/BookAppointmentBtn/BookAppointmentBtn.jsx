import css from "./BookAppointmentBtn.module.css";
import { useState } from "react";
import AppointmentModal from "./AppointmentModal/AppointmentModal";
import Modal from "../../Modal/Modal";

function BookAppointmentBtn({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={() => setIsModalOpen(true)}>
        Make an appointment
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <AppointmentModal item={item} setIsOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}

export default BookAppointmentBtn;
