import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/WelcomeHeader.module.css'; // Optional CSS file for custom styling

function WelcomeHeader() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0} className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        {/* Logo Section */}
        <Typography
          variant="h6"
          onClick={() => navigate('/')}
          className={styles.logo}
          style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1E88E5' }}
        >
          Streamline
        </Typography>

        {/* Navigation Links */}
        <Box className={styles.navLinks}>
          <Button color="inherit" onClick={() => navigate('/about')}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>
            Contact
          </Button>
          <Button color="inherit" onClick={() => navigate('/blog')}>
            Blog
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/signup')}
          >
            Start Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default WelcomeHeader;
