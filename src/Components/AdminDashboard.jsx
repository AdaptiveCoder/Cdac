// // AdminDashboard.jsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import AddCertificate from './AddCertificate';
// import ViewCertificate from './ViewCertificate';
// import ViewUsers from './ViewUsers';
// import ViewVerification from './ViewVerification';
// import Transactions from './Transactions';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with your actual authentication logic

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />; // Redirect to login if not logged in
//   }

//   return (
//     <Router>
//       <div className="dashboard-container">
//         <aside className="sidebar">
//           <h2>Admin Panel</h2>
//           <nav>
//             <ul>
//               <li><Link to="/add-certificate">Add Certificate</Link></li>
//               <li><Link to="/view-certificates">View Certificates</Link></li>
//               <li><Link to="/view-users">View Users</Link></li>
//               <li><Link to="/view-verifications">View Verifications</Link></li>
//               <li><Link to="/transactions">Transactions</Link></li>
//             </ul>
//           </nav>
//           <button onClick={handleLogout} className="logout-button">Logout</button>
//         </aside>

//         <main className="content">
//           <Routes>
//             <Route path="/add-certificate" element={<AddCertificate />} />
//             <Route path="/view-certificates" element={<ViewCertificate />} />
//             <Route path="/view-users" element={<ViewUsers />} />
//             <Route path="/view-verifications" element={<ViewVerification />} />
//             <Route path="/transactions" element={<Transactions />} />
//             <Route path="/" element={<Navigate to="/view-certificates" />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default AdminDashboard;
import React from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import AddCertificate from './AddCertificate';
import ViewCertificate from './ViewCertificate';
import ViewUsers from './ViewUsers';
import ViewVerification from './ViewVerification';
import Transactions from './Transactions';
import './AdminDashboard.css';

const AdminDashboard = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleAdminLogout = () => {
    localStorage.removeItem('token'); // Remove authentication token
    handleLogout(); // Update auth state in App.js
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/AdminDashboard/add-certificate">Add Certificate</Link></li>
            <li><Link to="/AdminDashboard/view-certificates">View Certificates</Link></li>
            <li><Link to="/AdminDashboard/view-users">View Users</Link></li>
            <li><Link to="/AdminDashboard/view-verifications">View Verifications</Link></li>
            <li><Link to="/AdminDashboard/transactions">Transactions</Link></li>
          </ul>
        </nav>
        <button onClick={handleAdminLogout} className="logout-button">Logout</button>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/add-certificate" element={<AddCertificate />} />
          <Route path="/view-certificates" element={<ViewCertificate />} />
          <Route path="/view-users" element={<ViewUsers />} />
          <Route path="/view-verifications" element={<ViewVerification />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/" element={<Navigate to="/AdminDashboard/view-certificates" />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
