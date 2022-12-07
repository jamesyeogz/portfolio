import React, { useState } from "react";
import { AnimatePresence} from "framer-motion";
import {
  BackdropCss,
  ModalBefore,
  ModalCss,
  ModalInnerButton,
  ModalInnerHeader,
  ModalInnerWrap,
} from "../styles/General";
import { Icon } from "@iconify/react";
const Backdrop = ({ children, onClick }: any) => {
  return (
    <BackdropCss
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      {children}
    </BackdropCss>
  );
};
const dropIn = {
  hidden: { height: "0%", opacity: 0 },
  visible: {
    height: "fit-content",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
};
const ModalContainer = ({ children, handleClose }: any) => {
  return (
    <Backdrop onClick={handleClose}>
      <ModalCss
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalInnerWrap>
          <ModalInnerHeader>
            <ModalInnerButton onClick={handleClose}>
              <Icon icon="bi:x" width="25" height="20" />
            </ModalInnerButton>
          </ModalInnerHeader>
          {children}
        </ModalInnerWrap>
      </ModalCss>
    </Backdrop>
  );
};

const Modal = ({ children, Card }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => {
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ModalBefore
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          console.log(modalOpen);
          modalOpen ? close() : open();
        }}
      >
        {Card}
      </ModalBefore>
      {/* {modalOpen && <div style={{color:'black'}}>Hello World</div>} */}
      {modalOpen && (
        <ModalContainer handleClose={close}>{children}</ModalContainer>
      )}
      <AnimatePresence initial={false} exitBeforeEnter={true}></AnimatePresence>
    </>
  );
};

export default Modal;
