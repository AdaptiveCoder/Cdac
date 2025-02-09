// // src/pages/Login/Login.jsx
// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Container, TextField, Button, Typography, Snackbar } from '@mui/material';
// import axios from 'axios';

// // import './Login.css';

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();
//   const [errorMessage, setErrorMessage] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrorMessage('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');

//     try {
//       const response = await axios.post('/api/login', formData); // Replace with your actual API endpoint

//       if (response.status === 200) {
//         const userData = response.data;
//         localStorage.setItem('token', userData.token); // Or store user data
//         navigate('/AdminDashboard'); // Redirect to dashboard
//       } else {
//         setErrorMessage('Invalid email or password.');
//         setSnackbarOpen(true); // Open Snackbar for error
//       }
//     } catch (error) {
//       setErrorMessage('A network error occurred. Please try again later.');
//       console.error('Login error:', error);
//       setSnackbarOpen(true); // Open Snackbar for error
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };
//   const handleAdminLogin = () => {
//     navigate('/AdminDashboard');
//   };

  
//   return (
//     <Container maxWidth="sm" className="login-page" sx={{ backgroundColor: '#F1E7D7', minHeight: '100vh', padding: '1rem', marginTop: '1rem', marginRight : '0rem' }}>
//       <div className="login-container">
//       <Typography variant="h4" gutterBottom sx={{ color: 'black', fontFamily: 'Merriweather, serif',textAlign: 'center'}} >
//         LOGIN
//       </Typography>        
//       <form className="login-form" onSubmit={handleSubmit}>
//           <TextField
//             label="Email"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Password"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             fullWidth
//             margin="normal"
//           />
//           <br /><br />
//           <Button 
//           type="submit" 
//           variant="contained" 
//           sx={{ backgroundColor: '#BED4F9', color: 'black', '&:hover': { backgroundColor: '#1E2952',color: 'white' } }} 
//           fullWidth
//         >Login
//         </Button>

//           {errorMessage && <Typography color="error" className="error-message">{errorMessage}</Typography>}
// <br /><br />
//           <Typography className="register-link">
//             Don &apos t have an account? <Link to="/register">Register here</Link>
            
//           </Typography>
         
        
            
        
          
//         </form>
//         <Button 
//   variant="contained"
//   sx={{ backgroundColor: '#1E2952', color: 'white', '&:hover': { backgroundColor: '#BED4F9', color: 'black' } }} 
//   fullWidth
//   onClick={() => {
//     localStorage.setItem('token', 'admin_token'); // Simulate successful login
//     navigate('/AdminDashboard');
//     window.location.reload(); // Ensure App.js detects authentication
//   }}
// >
//   Admin Login Here
// </Button>

//       </div>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         message={errorMessage}
//       />
//     </Container>
//   );
// }

// export default Login;
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Snackbar } from '@mui/material';
import axios from 'axios';

function Login({ onLogin }) { // Accept onLogin function from App.js
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('/api/login', formData); // Replace with actual API
      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem('token', userData.token);
        onLogin(userData.token); // Update authentication state
        navigate('/AdminDashboard'); // Redirect to admin dashboard
      } else {
        setErrorMessage('Invalid email or password.');
        setSnackbarOpen(true);
      }
    } catch (error) {
      setErrorMessage('A network error occurred. Please try again later.');
      setSnackbarOpen(true);
    }
  };

  const handleAdminLogin = () => {
    // Simulate admin login for testing
    localStorage.setItem('token', 'admin_token');
    onLogin('admin_token'); // Update authentication state
    navigate('/AdminDashboard');
  };

  return (
    <Container maxWidth="sm" className="login-page" sx={{ backgroundColor: '#F1E7D7', minHeight: '100vh', padding: '1rem', marginTop: '1rem' }}>
      <div className="login-container">
        <Typography variant="h4" gutterBottom sx={{ color: 'black', textAlign: 'center' }}>
          LOGIN
        </Typography>        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#BED4F9', color: 'black', '&:hover': { backgroundColor: '#1E2952', color: 'white' } }}>
            Login
          </Button>
          {errorMessage && <Typography color="error">{errorMessage}</Typography>}
          <Typography>
            Don't have an account? <Link to="/register">Register here</Link>
          </Typography>
        </form>
        <Button 
  variant="contained"
  sx={{ backgroundColor: '#1E2952', color: 'white', '&:hover': { backgroundColor: '#BED4F9', color: 'black' } }} 
  fullWidth
  onClick={() => {
    console.log("Admin login clicked");
    localStorage.setItem('token', 'admin_token'); // Store a dummy token
    navigate('/AdminDashboard');
    window.location.reload(); // Force reload to update state in App.js
  }}
>
  Admin Login Here
</Button>

      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} message={errorMessage} />
    </Container>
  );
}

export default Login;
