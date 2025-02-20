import React, { useState } from 'react';
import { Button, Input, Container, Title, InputWrapper } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import styles from './HeroImageRight.module.css';  // Import the updated CSS file

export function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referredBy: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state

    try {
      const response = await fetch('http://localhost:5000/api/referrals ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formRoot}>
      <Container size="lg">
        <div className={styles.formInner}>
          <Title align="center" className={styles.formTitle}>Submit Refer Details</Title>
          <form onSubmit={handleSubmit}>
            <div className={styles.formInputWrapper}>
              <InputWrapper
                label="Name"
                required
                className={styles.inputWrapper}
              >
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
            </div>
            <div className={styles.formInputWrapper}>
              <InputWrapper
                label="Email"
                required
                className={styles.inputWrapper}
              >
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
            </div>
            <div className={styles.formInputWrapper}>
              <InputWrapper
                label="Phone"
                required
                className={styles.inputWrapper}
              >
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
            </div>
            <div className={styles.formInputWrapper}>
              <InputWrapper
                label="Referred By"
                className={styles.inputWrapper}
              >
                <Input
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="xl"
                type="submit"
                disabled={isSubmitting}
                mt={40}
                className={styles.formbutton}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
