import { createContext, useContext, useState } from "react";
import Modal from "../components/alert/Modal";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  const closeModal = () => {
    setOpen(false);
    setContent(null);
  };

  const openModal = (value) => {
    setOpen(true);
    setContent(value);
  };
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal isOpen={open} onClose={closeModal} content={content} />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
