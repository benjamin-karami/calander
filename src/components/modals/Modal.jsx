import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen } from "../../redux/modalsStatus";
import { ModalContainer, ModalHeader, ModalCloseBtn } from "./Modal.styles";
import NoEvent from "./noEvent/NoEvent";
import WithEvent from "./withEvent/WithEvent";

const Modal = () => {
  const modalStatus = useSelector((state) => state.modalStatus);
  const dispatch = useDispatch();
  return (
    <>
      <ModalContainer active={modalStatus.modalOpen}>
        <ModalHeader>
          <h6>Events</h6>
          <ModalCloseBtn onClick={() => dispatch(modalOpen(!modalStatus))}>
            X
          </ModalCloseBtn>
        </ModalHeader>
        {modalStatus.noEvent ? <NoEvent /> : <WithEvent />}
      </ModalContainer>
    </>
  );
};

export default Modal;
