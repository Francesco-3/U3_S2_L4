import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import books from '../data/history.json';

function AllTheBooks() {
  return (
    <Container className="my-4">
      <Row>
        {books.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-4 d-flex">
            <Card className="w-100 h-100 d-flex flex-column">
              <Card.Img variant="top" src={book.img} style={{ height: '300px', objectFit: 'cover' }}/>

              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="text-center">{book.title}</Card.Title>
                  <Card.Text className="text-center">${book.price}</Card.Text>
                </div>

                <Button variant="primary" className="mt-3">Buy me!</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;