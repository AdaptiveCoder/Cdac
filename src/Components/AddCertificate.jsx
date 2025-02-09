// import React from 'react';
// import './AddCertificate.css';

// const AddCertificate = () => {
//   return (
//     <div className="add-certificate-container">
//       <h2>Add Certificate</h2>
//       <form>
//         <input type="text" placeholder="Certificate ID" />
//         <input type="text" placeholder="User ID" />
//         {/* Add more input fields as needed */}
//         <button type="submit">Add Certificate</button>
//       </form>
//     </div>
//   );
// };

// export default AddCertificate;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AddCertificate.css';

// const AddCertificate = () => {
//   const navigate = useNavigate();

//   const handleGenerate = (e) => {
//     e.preventDefault();
    
//     const certificateData = {
//       certificateId: document.querySelector('input[placeholder="Certificate ID"]').value,
//       studentName: document.querySelector('input[placeholder="Student Name"]').value,
//       prn: document.querySelector('input[placeholder="PRN"]').value,
//       courseName: document.querySelector('input[placeholder="Course Name"]').value,
//       grade: document.querySelector('input[placeholder="Grade"]').value,
//       enrollmentDate: document.querySelector('input[placeholder="Enrollment Date"]').value,
//       completionDate: document.querySelector('input[placeholder="Completion Date"]').value,
//     };
  
//     if (Object.values(certificateData).some(value => !value)) {
//       alert("Please fill all fields");
//       return;
//     }
//     console.log("Navigating with Data:", certificateData); // Debug log
  
//     navigate('/view-certificates', { state: certificateData });
//   };
  
//   return (
//     <div className="add-certificate-container">
//       <h2>Add Certificate</h2>
//       <form>
//         <input type="text" placeholder="Certificate ID" />
//         <input type="text" placeholder="Student Name" />
//         <input type="text" placeholder="PRN" />
//         <input type="text" placeholder="Course Name" />
//         <input type="text" placeholder="Grade" />
//         <input type="date" placeholder="Enrollment Date" />
//         <input type="date" placeholder="Completion Date" />
//         <button type="button" onClick={handleGenerate} className="generate-btn">Generate</button>
//       </form>
//     </div>
//   );
// };

// export default AddCertificate;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddCertificate.css';

const AddCertificate = () => {
  const navigate = useNavigate();

  const handleGenerate = (e) => {
    e.preventDefault();
    
    const certificateData = {
      certificateId: document.querySelector('input[placeholder="Certificate ID"]').value,
      studentName: document.querySelector('input[placeholder="Student Name"]').value,
      prn: document.querySelector('input[placeholder="PRN"]').value,
      courseName: document.querySelector('input[placeholder="Course Name"]').value,
      grade: document.querySelector('input[placeholder="Grade"]').value,
      enrollmentDate: document.querySelector('input[placeholder="Enrollment Date"]').value,
      completionDate: document.querySelector('input[placeholder="Completion Date"]').value,
    };
  
    if (Object.values(certificateData).some(value => !value)) {
      alert("Please fill all fields");
      return;
    }

    // Retrieve existing data from localStorage
    const existingCertificates = JSON.parse(localStorage.getItem('certificates')) || [];

    // Add new certificate data
    const updatedCertificates = [...existingCertificates, certificateData];

    // Store updated data in localStorage
    localStorage.setItem('certificates', JSON.stringify(updatedCertificates));

    console.log("Stored Data:", updatedCertificates); // Debug log
  
    navigate('/AdminDashboard/view-certificates'); // Navigate to view page
  };
  
  return (
    <div className="add-certificate-container">
      <h2>Add Certificate</h2>
      <form>
        <input type="text" placeholder="Certificate ID" />
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="PRN" />
        <input type="text" placeholder="Course Name" />
        <input type="text" placeholder="Grade" />
        <input type="date" placeholder="Enrollment Date" />
        <input type="date" placeholder="Completion Date" />
        <button type="button" onClick={handleGenerate} className="generate-btn">Generate</button>
      </form>
    </div>
  );
};

export default AddCertificate;
