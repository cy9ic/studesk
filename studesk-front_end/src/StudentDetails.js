import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentDetails = () => {
  const [studentNames, setStudentNames] = useState([]);
  const [studentMail, setStudentMail] = useState([]); 

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("https://victorious-hare-beret.cyclic.app/Students");
        setStudentNames(response.data.map((student) => student.firstName + " " + student.lastName));
        setStudentMail(response.data.map((student) => student.email)); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div style={{ backgroundColor: "white", padding: "10px", height: "300px" }}>
      <h2 style={{ padding: "0px" }}>Student Details</h2>
      <div className="details" style={{display:"flex",justifyContent:"space-evenly"}}>
        <ul style={{ padding: "0px" }}>
            {studentNames.map((studentName, index) => (
            <li key={index} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", alignItems: "flex-end" }}>
                {studentName}
            </li>
            ))}
        </ul>
        <ul style={{ padding: "0px" }}>
            {studentMail.map((Mail, index) => (
            <li key={index} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", alignItems: "flex-end" }}>
                {Mail}
            </li>
            ))}
        </ul>
      </div>

    </div>
  );
};

export default StudentDetails;
