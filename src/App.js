import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
// import FeedbackData from "./components/Data/Feedbackdata";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./components/Context/FeedbackContext";
function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>
        </div>
        <Route path="/about" component={About} />
        <AboutIcon />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
