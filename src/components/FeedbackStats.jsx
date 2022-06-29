import React from "react";
import PropTypes from "prop-types";
function FeedbackStats({ feedback }) {
  // calculate average review
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  );
}

FeedbackStats.prototype = {
  feedback: PropTypes.array.isRequired,
};
export default FeedbackStats;
