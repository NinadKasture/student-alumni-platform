import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import './Home.css';

import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box
          className="welcome-box"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Typography variant="h3" gutterBottom>
            Welcome to Our Portal
          </Typography>
          <Typography variant="h6" gutterBottom>
            Are you a College Official, Student, or Alumni?
          </Typography>
          <Box display="flex" justifyContent="space-between" width="100%" mt={3}>
            <Button variant="contained" color="primary" className="role-button">
              <Link to='/auth'>College Official</Link>
            </Button>
            <Button variant="contained" color="secondary" className="role-button">
              <Link to='/login'>Student</Link>
            </Button>
            <Button variant="contained" color="success" className="role-button">
              <Link to="/login">Alumni</Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
