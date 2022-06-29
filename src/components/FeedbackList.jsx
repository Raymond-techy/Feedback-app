import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";
function FeedbackList() {
  const { feedback: feedbacklist } = useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacklist.map((feed) => (
          <motion.div
            key={feed.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={feed.id} feedback={feed} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
