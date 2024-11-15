    import React from 'react';
    import { Button, Box } from '@mui/material';
    import PropTypes from 'prop-types'; // To validate props
    import styles from '../styles/WelcomeButtons.module.css';

    function WelcomeButtons({ onSignUp, onLogIn }) {
    return (
        <Box className={styles.buttonGroup}>
        <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onSignUp}
        >
            Sign Up
        </Button>
        <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={styles.secondaryButton}
            onClick={onLogIn}
        >
            Log In
        </Button>
        </Box>
    );
    }

    // PropTypes for type checking
    WelcomeButtons.propTypes = {
    onSignUp: PropTypes.func.isRequired,
    onLogIn: PropTypes.func.isRequired,
    };

    export default WelcomeButtons;
