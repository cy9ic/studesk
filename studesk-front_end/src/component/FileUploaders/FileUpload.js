import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import FileTable from './FileTable';
import './FileUpload.css'

const FileUpload = () => {
  const [submittedFiles, setSubmittedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here.
    console.log('Accepted Files:', acceptedFiles);
    setSubmittedFiles([...submittedFiles, ...acceptedFiles]);
    // You can implement your file upload logic here.
  }, [submittedFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div
            {...getRootProps()}
            className={`upload-box p-4 ${isDragActive ? 'highlight' : ''}`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p className='fw-bold'>Drag &amp; drop files here, or click to select files.</p>
            )}
          </div>
          <button
            className="btn btn-success mt-3"
            onClick={() => setSubmittedFiles([])}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <FileTable submittedFiles={submittedFiles} />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
