import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwZDIzNjc4Y2RkZjAwMTU1ZDY3ZmQiLCJpYXQiOjE3NTIyMjQzMTEsImV4cCI6MTc1MzQzMzkxMX0.MUa7xBUE7RqHMHYamY2rPSzBRqGOXnxVH420Wul9e9I";

function AddComment({ bookId, onCommentAdded }) {
  const [formState, setFormState] = useState({
    comment: '',
    rate: '1',
    isSending: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState((prevState) => ({ ...prevState, isSending: true, error: null }));

    const newComment = {
      comment: formState.comment,
      rate: formState.rate,
      elementId: bookId,
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) throw new Error('Errore durante l’invio della recensione');

      setFormState({ comment: '', rate: '1', isSending: false });
      onCommentAdded();
    } catch (err) {
      setFormState((prevState) => ({ ...prevState, error: err.message, isSending: false }));
    }
  };

  const { comment, rate, isSending, error } = formState;

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group className="mb-2">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          type="text"
          placeholder="Scrivi qualcosa..."
          value={comment}
          onChange={(e) => setFormState((prevState) => ({ ...prevState, comment: e.target.value }))}
          required
          disabled={isSending}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={rate}
          onChange={(e) => setFormState((prevState) => ({ ...prevState, rate: e.target.value }))}
          disabled={isSending}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary" disabled={isSending}>
        {isSending ? 'Invio in corso...' : 'Invia'}
      </Button>

      {error && <div className="text-danger mt-2">{error}</div>}
    </Form>
  );
}

export default AddComment;