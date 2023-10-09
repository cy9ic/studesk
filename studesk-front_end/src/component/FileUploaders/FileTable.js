import React from 'react';

const FileTable = ({ submittedFiles }) => {
  return (
    <div>
      <h2>Submitted Files</h2>
      <table className="table">
        <thead>
          <tr>
            <th>File Name</th>
          </tr>
        </thead>
        <tbody>
          {submittedFiles.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;
