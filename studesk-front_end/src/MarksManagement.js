import React, { useState } from "react";
import StudentMarks from "./StudentMarks";


const MarksManagement = () => {
  const [studentId, setStudentId] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Add Marks</button>
      {modalIsOpen && <StudentMarks studentId={studentId} onClose={closeModal} />}
    </div>
  );
};

export default MarksManagement;
