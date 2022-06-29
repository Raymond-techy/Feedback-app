import React, { useState } from "react";
import Button from "./Shared/Button";
import Card from "./Shared/Card";
import RatingSelect from "./RatingSelect";
function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtndisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => {
    // const formText = e.currentTarget.value;
    if (text === "") {
      setBtndisabled(true);
      setMessage("");
    } else if (text !== "" && text.trim().length <= 10) {
      setBtndisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtndisabled(false);
      setMessage(null);
    }
    setText(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      handleAdd(newFeedback);
    }
    setText("");
  };

  return (
    <Card reverse={true}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your Service with us</h2>
        {/* {rating select} */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <textarea
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type={"submit"} isDisabled={btnDisabled} version={"primary"}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
