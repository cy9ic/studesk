import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentDetails = () => {
  const [studentNames, setStudentNames] = useState([]);
  const [studentMail, setStudentMail] = useState([]); 
  const [studentDob, setStudentDob] = useState([]); 
  const [studentrollNo, setStudentRollNo] = useState([]); 
  const [studentClass, setStudentClass] = useState([]); 

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("https://victorious-hare-beret.cyclic.app/Students");
        setStudentNames(response.data.map((student) => student.firstName + " " + student.lastName));
        setStudentMail(response.data.map((student) => student.email)); 
        setStudentDob(response.data.map((student) => student.dateOfBirth || "2002-01-01")); 
        setStudentRollNo(response.data.map((student) => student.rollNo || "2110991879")); 
        setStudentClass(response.data.map((student) => student.class || "3A")); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div style={{ backgroundColor: "white", padding: "10px", height: "300px",overflowY:"scroll" }}>
      <h2 style={{ padding: "10px 0px" }}>Student Details</h2>
      <div className="details" style={{padding:"15px",display:"flex",fontSize:"18px",justifyContent:"space-between"}}>
        <ul style={{ padding: "0px" }}>
            <h5>Name</h5>
            {studentNames.map((studentName, index) => (
            <li key={index} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", alignItems: "flex-end" }}>
                {studentName}
            </li>
            ))}
        </ul>
        <ul style={{ padding: "0px" }}>
            <h5>Email</h5>
            {studentMail.map((Mail, index) => (
            <li key={index} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", alignItems: "flex-end" }}>
                {Mail}
            </li>
            ))}
        </ul>
        <ul style={{ padding: "0px" }}>
            <h5>D.O.B</h5>
            {studentDob.map((Dob, index) => (
            <li key={index} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", alignItems: "flex-end" }}>
                {Dob}
            </li>
            ))}
        </ul>
        <ul style={{ padding: "0px" }}>
            <h5>Roll No.</h5>
            {studentrollNo.map((rollNo, index) => (
            <li key={index} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", alignItems: "flex-end" }}>
                {rollNo}
            </li>
            ))}
        </ul>
        <ul style={{ padding: "0px" }}>
            <h5>Class</h5>
            {studentClass.map((clas, index) => (
            <li key={index} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", alignItems: "flex-end" }}>
                {clas}
            </li>
            ))}
        </ul>
      </div>

    </div>
  );
};

export default StudentDetails;
