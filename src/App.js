import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackData from "./components/Data/Feedbackdata";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((feed) => feed.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedbacklist={feedback} onDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
