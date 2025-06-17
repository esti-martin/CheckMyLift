import { useEffect, useRef, type RefObject } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import Form from "./Form";
import styles from "./IssueModal.module.css";
import { FaTimes } from "react-icons/fa";

type IssueModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
};

const IssueModal: React.FC<IssueModalProps> = ({
    isOpen,
    onClose,
    title,
}) => {

    // Bloquea el scroll del fondo cuando la modal está abierta
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("body-no-scroll");
        } else {
            document.body.classList.remove("body-no-scroll");
        }
        // Limpiar al desmontar
        return () => {
            document.body.classList.remove("body-no-scroll");
        };
    }, [isOpen]);

    const modalRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
    useClickOutside(modalRef, onClose);
    
    if (!isOpen) return null;

  const options = [
    { value: "ascensor", label: "Ascensor" },
    { value: "escalera", label: "Escalera mecánica" },
    { value: "iluminacion", label: "Iluminación" },
    { value: "otro", label: "Otro" },
  ];

    

  return (
    <section className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar modal"
        >
            <FaTimes />
        </button>
        <h3>Avisar de una avería en {title}</h3>
        <Form
          options={options}
          title={title}
        />
      </div>
    </section>
  );
};

export default IssueModal;