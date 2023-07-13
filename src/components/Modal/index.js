import React from "react";
import { useRef } from "react";

import Portal from "../Portal";
import { Backdrop, Content } from "./styles";

export const Modal = ({ open, onClose, children }) => {
  const backdrop = useRef(null);
  if (!open) {
    return null;
  }

  const onClick = (event) => {
    if (backdrop.current === event.target) {
      onClose();
    }
  };
  return (
    <Portal>
      <Backdrop ref={backdrop} onClick={onClick}>
        <Content>{children}</Content>
      </Backdrop>
    </Portal>
  );
};
