import axios from 'axios';
import React, { useState } from 'react';
const GatePass = (props) => {

  const [formData, setFormData] = useState({
    studentName: '',
    studentID: '',
    purpose: '',
    fromDate: '',
    toDate: '',
    contactNumber: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Implement the form submission logic here, such as sending data to a server.
    props.func();
    props.data(formData);
    await axios.post("https://victorious-hare-beret.cyclic.app/gatepass/create",{email:props.email ,data:formData})
    .then(res=>{console.log(res)})
    .catch(error=>console.log(error));
  };

  return (
    <div className="container  d-flex  flex-column justify-content-center align-items-center">
      <h2 className="text-center mt-5">Apply For Gate Pass </h2>
      <div className="form-container p-4 mb-5 rounded-3" style={{ backgroundColor: '#f5f5f5',width:"50%" }}>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentID" className="form-label">
            Student ID
          </label>
          <input
            type="text"
            className="form-control"
            id="studentID"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="purpose" className="form-label">
            Purpose
          </label>
          <input
            type="text"
            className="form-control"
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fromDate" className="form-label">
            From Date
          </label>
          <input
            type="date"
            className="form-control"
            id="fromDate"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
            To Date
          </label>
          <input
            type="date"
            className="form-control"
            id="toDate"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comments" className="form-label">
            Additional Comments
          </label>
          <textarea
            className="form-control"
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success ">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default GatePass;
