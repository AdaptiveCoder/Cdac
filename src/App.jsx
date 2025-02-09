// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './Components/NavBar';
// import LandingPage from './pages/LandingPage';
// import AboutUs from './pages/AboutUs';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
// import Verify from './pages/Verify';
// import AdminDashboard from './Components/AdminDashboard';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);
//   const handleLogin = (token) => {
//     localStorage.setItem('token', token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/verify" element={<Verify />} />

//           {/* This is the crucial line that was missing: */}
//           <Route 
//     path="/AdminDashboard" // Or whatever your path is (case-sensitive!)
//     element={
//         isAuthenticated ? (
//             <AdminDashboard handleLogout={handleLogout} />
//         ) : (
//             <Navigate to="/login" />
//         )
//     } 
// />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './Components/NavBar';
// import LandingPage from './pages/LandingPage';
// import AboutUs from './pages/AboutUs';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
// import Verify from './pages/Verify';
// import AdminDashboard from './Components/AdminDashboard';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check if user is authenticated when the app loads
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token); // If token exists, user is authenticated
//   }, []);

//   const handleLogin = (token) => {
//     localStorage.setItem('token', token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/verify" element={<Verify />} />
          
//           {/* Admin Dashboard Route with Authentication Check */}
//           <Route 
//             path="/AdminDashboard"
//             element={isAuthenticated ? <AdminDashboard handleLogout={handleLogout} /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddCertificate from './Components/AddCertificate';
import ViewCertificate from './Components/ViewCertificate';
import Navbar from './Components/NavBar';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Verify from './pages/Verify';
import AdminDashboard from './Components/AdminDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token found:", token); // Debugging output
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    console.log("Logging in, token:", token);
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log("Logging out");
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/verify" element={<Verify />} />
          <Route 
  path="/AdminDashboard/*"  // Add "/*" to allow nested routes
  element={isAuthenticated ? <AdminDashboard handleLogout={handleLogout} /> : <Navigate to="/login" />} 
/>
{/* <Route path="/AddCertificate" element={<AddCertificate />} /> */}



        </Routes>
      </div>
    </Router>
  );
}

export default App;
