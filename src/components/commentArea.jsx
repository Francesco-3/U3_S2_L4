import { useState, useEffect, useCallback } from 'react';
import CommentsList from './commentsList';
import AddComment from './addComment';
import Loading from './loading';
import Error from './error';

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwZDIzNjc4Y2RkZjAwMTU1ZDY3ZmQiLCJpYXQiOjE3NTIyMjQzMTEsImV4cCI6MTc1MzQzMzkxMX0.MUa7xBUE7RqHMHYamY2rPSzBRqGOXnxVH420Wul9e9I";

function CommentArea({ bookId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });

      if (!res.ok) throw new Error('Impossibile caricare i commenti');

      const data = await res.json();
      setComments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [bookId]);

  const handleDelete = async (commentId) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });

      if (!res.ok) throw new Error('Errore durante la cancellazione');

      fetchComments();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="mt-4">
      <h5>Recensioni</h5>

      <AddComment bookId={bookId} onCommentAdded={fetchComments} />

      {isLoading && <Loading />}

      {error && <Error message={error} />}

      {!isLoading && !error && <CommentsList comments={comments} onDelete={handleDelete} />}
    </div>
  );
}

export default CommentArea;