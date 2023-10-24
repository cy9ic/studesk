import React, { useState } from "react";
import "./StudentMarks.css";
// import axios from "axios";
const StudentMarks = ({ studentId, onClose }) => {
  const [marks, setMarks] = useState({
    DSA: "",
    PA: "",
    COA: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();



    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Add Student Marks</h2>
        <button type="button" onClick={onClose} className="modal-close-button">X</button>
        <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-form-row">
                <input
                type="number"
                name="DSA"
                placeholder="DSA Marks"
                value={marks.DSA}
                onChange={(e) => setMarks({ ...marks, DSA: e.target.value })}
            />
            </div>
            <div className="modal-form-row">
                <input
                type="number"
                name="PA"
                placeholder="PA Marks"
                value={marks.PA}
                onChange={(e) => setMarks({ ...marks, PA: e.target.value })}
            />
            </div>
            <div className="modal-form-row">
            <input
                type="number"
                name="COA"
                placeholder="COA Marks"
                value={marks.COA}
                onChange={(e) => setMarks({ ...marks, COA: e.target.value })}
            />
            </div>
            <div className="modal-form-row">
            <input
                type="number"
                name="DBMS"
                placeholder="DBMS Marks"
                value={marks.DBMS}
                onChange={(e) => setMarks({ ...marks, DBMS: e.target.value })}
            />
            </div>
            <div className="modal-form-row">
            <input
                type="number"
                name="CN"
                placeholder="CN Marks"
                value={marks.CN}
                onChange={(e) => setMarks({ ...marks, CN: e.target.value })}
            />
            </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default StudentMarks;
