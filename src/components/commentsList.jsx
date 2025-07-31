import SingleComment from './singleComment';

const CommentsList = ({ comments, onDelete }) => {
  return (
    <div style={{ maxHeight: '200px', overflowY: 'auto', paddingRight: '10px',}}>
      <ul className="list-unstyled mb-0">
        {comments.length === 0 ? (
          <li className="text-muted">Nessuna recensione disponibile.</li>
        ) : (
          comments.map((comment) => (
            <SingleComment key={comment._id} comment={comment} onDelete={onDelete} />
          ))
        )}
      </ul>
    </div>
  );
};

export default CommentsList;