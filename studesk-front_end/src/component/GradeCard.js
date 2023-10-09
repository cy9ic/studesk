import React from "react";
import './GradeCard.css'
const GradeCard = () => {
  const Grades = [
    {
      subjectCode: "AM101",
      subjectName: "Calculus and Statical",
      credits: 5,
      grade: "A",
    },
    {
      subjectCode: "CS102",
      subjectName: "Object Oriented Programming Using C++",
      credits: 4,
      grade: "B",
    },
    {
      subjectCode: "CS153",
      subjectName: "Data Structures",
      credits: 5,
      grade: "C",
    },
    {
      subjectCode: "CA101",
      subjectName: "Computer Architecture",
      credits: 2,
      grade: "A",
    },
    {
      subjectCode: "ECL01",
      subjectName: "Electronics and Communication Engineering",
      credits: 2,
      grade: "B",
    },
    {
      subjectCode: "ECO01",
      subjectName: "Economics for Engineers",
      credits: 1,
      grade: "C",
    },
  ];

  return (
    <div className="student-grade-details">
      <h1>Student Grade Details</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {Grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.subjectCode}</td>
              <td>{grade.subjectName}</td>
              <td>{grade.credits}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeCard;
