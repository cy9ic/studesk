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
      <button onClick={openModal} style={{background:"#17794B",color:"white",borderRadius:"5px"}}>Add Marks</button>
      {modalIsOpen && <StudentMarks studentId={studentId} onClose={closeModal} />}
    </div>
  );
};

export default MarksManagement;
