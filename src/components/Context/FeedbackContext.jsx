import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import FeedbackData from "../Data/Feedbackdata";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdited, setFeedbackEdited] = useState({
    item: {},
    edit: false,
  });
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const removeFeed = (feed) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== feed.id));
    }
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((feed) => (feed.id === id ? { ...feed, ...updItem } : feed))
    );
  };
  const editFeed = (feed) => {
    setFeedbackEdited({
      item: feed,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdited,
        removeFeed,
        addFeedback,
        editFeed,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
