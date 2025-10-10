import { createContext, useContext, useState } from "react";
import Modal from "../components/alert/Modal";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <Modal isOpen={open} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
