import React, { useState } from "react";
import Form from "../Form";
import { Button } from "../ChangeBalance/styled";
import { Modal } from "../Modal";

export const ChangeBalance = ({ onChange }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>+</Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form
          onChange={onChange}
          onCloseFormModal={() => setOpenModal(false)}
        />
      </Modal>
    </>
  );
};
