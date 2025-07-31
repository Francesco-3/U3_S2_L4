// components/SingleComment.jsx
import { Button } from 'react-bootstrap';

const SingleComment = ({ comment, onDelete }) => {
  const handleDelete = () => {
    onDelete(comment._id);
  };

  return (
    <li className="mb-2 border-bottom pb-2 d-flex justify-content-between align-items-start">
      <div>
        <div className="fw-bold">{comment.rate}/5 ⭐</div>
        <div>{comment.comment}</div>
      </div>

      <Button variant="danger" size="sm" onClick={handleDelete}>🗑️</Button>
    </li>
  );
};

export default SingleComment;