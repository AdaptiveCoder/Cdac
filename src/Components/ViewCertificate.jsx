// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ViewCertificate.css';

// const ViewCertificate = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [certificateData, setCertificateData] = useState({});

//   // useEffect(() => {
//   //   console.log("Location Object:", location);  // Debug log
//   //   console.log("Received Certificate Data:", location.state); // Debug log

//   //   if (location.state) {
//   //     setCertificateData(location.state);
//   //     localStorage.setItem("certificateData", JSON.stringify(location.state));
//   //   } else {
//   //     const storedData = localStorage.getItem("certificateData");
//   //     if (storedData) {
//   //       setCertificateData(JSON.parse(storedData));
//   //     } else {
//   //       console.warn("No certificate data found");
//   //     }
//   //   }
//   // }, [location.state]);

//   return (
//     <div className="view-certificate-container">
//       <h2>Certificate Details</h2>
//       {certificateData.certificateId ? (
//         <div className="certificate-details">
//           <p><strong>Certificate ID:</strong> {certificateData.certificateId}</p>
//           <p><strong>Student Name:</strong> {certificateData.studentName}</p>
//           <p><strong>PRN:</strong> {certificateData.prn}</p>
//           <p><strong>Course Name:</strong> {certificateData.courseName}</p>
//           <p><strong>Grade:</strong> {certificateData.grade}</p>
//           <p><strong>Enrollment Date:</strong> {certificateData.enrollmentDate}</p>
//           <p><strong>Completion Date:</strong> {certificateData.completionDate}</p>
//         </div>
//       ) : (
//         <p>No certificate data available.</p>
//       )}
//       <button onClick={() => navigate(-1)}>Back</button>
//     </div>
//   );
// };

// export default ViewCertificate;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewCertificate.css';

const ViewCertificate = () => {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Retrieve certificates from localStorage
    const storedCertificates = JSON.parse(localStorage.getItem('certificates')) || [];
    setCertificates(storedCertificates);
  }, []);

  return (
    <div className="view-certificate-container">
      <h2>Certificate Details</h2>
    
      {certificates.length === 0 ? (
        <p>No certificate data available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Certificate ID</th>
              <th>Student Name</th>
              <th>PRN</th>
              <th>Course Name</th>
              <th>Grade</th>
              <th>Enrollment Date</th>
              <th>Completion Date</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={index}>
                <td>{cert.certificateId}</td>
                <td>{cert.studentName}</td>
                <td>{cert.prn}</td>
                <td>{cert.courseName}</td>
                <td>{cert.grade}</td>
                <td>{cert.enrollmentDate}</td>
                <td>{cert.completionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ViewCertificate;
