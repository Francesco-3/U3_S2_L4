import { Card, Button } from 'react-bootstrap';

function SingleBook({ book, isSelected, onSelect }) {
  const handleClick = () => {
    onSelect(book);
  };

  return (
    <Card
      className={`w-100 h-100 d-flex flex-column ${isSelected ? 'border-danger border-3' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <Card.Img variant="top" src={book.img} style={{ height: '300px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="text-center">{book.title}</Card.Title>
          <Card.Text className="text-center">${book.price}</Card.Text>
        </div>
        <div className="mt-3 d-flex justify-content-center gap-2">
          <Button variant={isSelected ? 'success' : 'primary'} className="d-flex align-items-center gap-2">
            {isSelected ? 'Selezionato' : 'Seleziona'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;