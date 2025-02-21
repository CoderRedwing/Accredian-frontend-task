import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Loader,
  Alert,
  Table,
  Center,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import "./HeroImageRight.module.css";

const API_URL = "https://accredian-backend-task-d0l4.onrender.com/api/referrals";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch referrals");
        }
        const data = await response.json();
        setReferrals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReferrals();
  }, []);

  return (
    <div className="Thankyoupage">
      <Container size="md" className="thank-you-container">
      <Title order={2} className="thank-you-title">
        🎉 Thank You for Your Referral!
      </Title>
      <Text size="lg" className="thank-you-subtext">
        Your submission was successful. Below are the referrals you submitted.
      </Text>

      {loading ? (
        <Center>
          <Loader size="lg" />
        </Center>
      ) : error ? (
        <Alert color="red" title="Error">
          {error}
        </Alert>
      ) : referrals.length > 0 ? (
        <div className="table-container">
          <Table striped highlightOnHover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((referral, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{referral.name}</td>
                  <td>{referral.email}</td>
                  <td>{referral.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <Text size="lg" className="no-referrals-text">
          No referrals found.
        </Text>
      )}

      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan" }}
        size="lg"
        className="back-home-btn"
        onClick={() => navigate("/")}
      >
        ⬅️ Back to Home
      </Button>
    </Container>
    </div>
  );
};

export default ThankYouPage;
