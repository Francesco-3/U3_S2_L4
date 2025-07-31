import { Alert, Container } from 'react-bootstrap';

function Welcome() {
  return (
    <Container className="my-4 text-center">
      <Alert variant="primary">
        <h2>Welcome to EpiBooks!</h2>
        <p>Find your next great read in our curated collection.</p>
      </Alert>
    </Container>
  );
}

export default Welcome;