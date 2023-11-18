import { FC } from "react";
import ReactDOM from "react-dom";
import("../styles/modal.scss");

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsOpen: Function;
}

const Modal: FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button onClick={() => setIsOpen(false)}>close</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;
