import React from 'react';
import { Container, Title, Text, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container size="lg" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Title>Thank You!</Title>
      <Text size="lg" style={{ marginTop: '20px' }}>
        Your submission was successful. We appreciate your referral.
      </Text>
      <Button
        variant="gradient"
        gradient={{ from: 'pink', to: 'yellow' }}
        size="xl"
        style={{ marginTop: '40px' }}
        onClick={handleBackToHome}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default ThankYouPage;
