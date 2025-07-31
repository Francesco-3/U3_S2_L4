import { Container } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer className="bg-dark text-white py-3 mt-4 w-100 m-0">
      <Container fluid className="text-center">
        <p className="mb-0">&copy; 2025 EpiBooks. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default MyFooter;