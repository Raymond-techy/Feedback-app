import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Header({ text, textColor, bgColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={{ color: textColor }}>
          <h3>{text}</h3>
        </Link>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
