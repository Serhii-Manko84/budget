import { useState } from "react";
import { Modal } from "../Modal";

const Statistics = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <h1>Statistics page</h1>
      <button onClick={() => setOpenModal(true)}>Open</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div> I'm to go to Portal!</div>
        <button onClick={() => setOpenModal(false)}>Close</button>
      </Modal>
    </>
  );
};

export default Statistics;
