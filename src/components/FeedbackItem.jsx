import Card from "./Shared/Card";
import FeedbackContext from "./Context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";

function FeedbackItem({ feedback }) {
  const { removeFeed, editFeed } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => removeFeed(feedback)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeed(feedback)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
