import { useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import SingleBook from './singleBook';
import CommentArea from './commentArea';
import { Book } from 'react-bootstrap-icons';

function BookList({ books }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    // Toggle: se clicchi lo stesso libro, lo deseleziona
    setSelectedBook((prev) => (prev?.asin === book.asin ? null : book));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="my-4">
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca per titolo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row>
        <Col md={8} className="border-end scrollable-books-column">
          <Row>
            {filteredBooks.map((book) => (
              <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-4 d-flex">
                <SingleBook
                  book={book}
                  isSelected={selectedBook?.asin === book.asin}
                  onSelect={handleBookSelect}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={4}>
          <div>
            {selectedBook ? (
              <CommentArea bookId={selectedBook.asin} />
            ) : (
              <Alert variant="info" className="text-center mt-4">
                <Book size={30} className="mb-2" />
                <br />
                Seleziona un libro dalla lista per leggere o aggiungere commenti.
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BookList;