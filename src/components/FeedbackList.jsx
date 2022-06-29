import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedbacklist, onDelete }) {
  return (
    <div className="feedback-list">
      {feedbacklist.map((feed) => (
        <FeedbackItem
          key={feed.id}
          feedback={feed}
          handleDelete={(id) => onDelete(id)}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
