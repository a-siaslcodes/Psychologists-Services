import css from "./Modal.module.css";
import ReactModal from "react-modal";
import icons from "../../assets/icons/icons.svg";

const Modal = ({ children, isOpen, setIsOpen }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={css.overlay}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
      ariaHideApp={false}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
    >
      <div className={css.modalContent}>
        <button
          className={css.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="close modal button"
        >
          <svg className={css.icon}>
            <use href={`${icons}#icon-x`} />
          </svg>
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
