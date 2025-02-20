import React from 'react';
import { Button, Container, Text, Title } from '@mantine/core';
import classes from './HeroImageRight.module.css';
import { useNavigate } from 'react-router-dom';

export function HeroImageRight() {
    const navigate = useNavigate(); 

    const handleReferNowClick = () => {
    navigate('/form'); 
  };
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                fully featured
              </Text>{' '}
              React components library
            </Title>

            <Text className={classes.description} mt={30}>
              Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={handleReferNowClick}
            >
              Refer Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
