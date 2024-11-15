    import React from 'react';
    import { Typography, Container, Box } from '@mui/material';
    import { useNavigate } from 'react-router-dom';
    import WelcomeHeader from '../components/WelcomeHeader';
    import WelcomeButtons from '../components/WelcomeButtons'; // Already created
    import styles from '../styles/Welcome.module.css';

    function Welcome() {
    const navigate = useNavigate();

    return (
        <>
        <WelcomeHeader /> {/* Include the header */}
        <Container maxWidth="lg" className={styles.container}>
            {/* Hero Section */}
            <Box mb={4}>
            {/* Add hero image if needed */}
            </Box>

            {/* App Name and Motto */}
            <Typography variant="h2" gutterBottom className={styles.title}>
            Streamline
            </Typography>
            <Typography variant="h5" gutterBottom className={styles.subtitle}>
            Supporting Focus, Simplifying Life
            </Typography>

            {/* Description */}
            <Typography variant="body1" paragraph className={styles.description}>
            Welcome to Streamline – your personal assistant for focus and productivity. 
            Stay on track, manage your tasks, and find balance in your daily life.
            </Typography>

            {/* Buttons */}
            <WelcomeButtons
            onSignUp={() => navigate('/signup')}
            onLogIn={() => navigate('/login')}
            />
        </Container>
        </>
    );
    }

    export default Welcome;
