import React, { useState, useEffect } from "react";
import axios from "axios";
import MarksManagement from "./MarksManagement";
const StudentList = () => {
  const [studentNames, setStudentNames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("https://victorious-hare-beret.cyclic.app/Students");
        setStudentNames(response.data.map((student) => student.firstName+" "+student.lastName));
      } catch (error) {
        setError("An error occurred while fetching student data.");
        console.error(error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div style={{ backgroundColor: "white" ,padding:"10px",height:"300px"}}>
      <h2 style={{padding:"0px"}}>Add Marks</h2>
      <ul style={{padding:"0px"}}>
        {studentNames.map((studentName, index) => (
          <li key={index} style={{display:"flex",marginBottom:"10px",justifyContent:"space-between",alignItems:"flex-end"}}>{studentName} <MarksManagement /></li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
