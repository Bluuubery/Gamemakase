import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import useBodyScrollLock from "./ScrollLock";
import { Common } from "../styles/Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const LoginModalWrapper = styled(motion.div)`
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const LoginModalBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  background-image: linear-gradient(
    to bottom,
    rgba(50, 50, 50, 1),
    rgba(55, 51, 77, 1)
  );
  border: 2px solid ${Common.colors.white01};
  color: ${Common.colors.white01};
  transition: all 0.5s ease-in-out;

  @media (min-width: 1024px) {
    width: 30rem;
    min-height: 35rem;
    max-height: 40rem;
    border-radius: 2rem;
    padding: 2rem;
  }
  @media (max-width: 1024px) {
    width: 25rem;
    min-height: 35rem;
    max-height: 40rem;
    border-radius: 2rem;
    padding: 1.8rem;
  }
  @media (max-width: 768px) {
    width: 20rem;
    min-height: 30rem;
    max-height: 40rem;
    border-radius: 1.5rem;
    padding: 1.5rem;
  }
  @media (max-width: 500px) {
    width: 85%;
    height: 35rem;
    border-radius: 1rem;
    padding: 1rem;
  }

  .icon-container {
    width: 100%;
    display: flex;
    justify-content: end;

    transition: all 0.3s ease-in-out;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1rem;
    }

    .x-mark {
      cursor: pointer;
    }
  }
`;

const LoginModal = ({ loginView, setLoginView, scrollPosition }) => {
  const outSection = useRef();

  const { openScroll } = useBodyScrollLock();

  const handleClose = () => {
    openScroll(scrollPosition);
    setLoginView(false);
  };

  return (
    <AnimatePresence>
      {loginView ? (
        <LoginModalWrapper
          ref={outSection}
          onClick={(e) => {
            if (outSection.current === e.target) {
              handleClose();
            }
          }}
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoginModalBody
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {},
            }}
          >
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => handleClose()}
                className="x-mark"
              />
            </div>
          </LoginModalBody>
        </LoginModalWrapper>
      ) : null}
    </AnimatePresence>
  );
};

export default LoginModal;
