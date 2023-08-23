// Import the necessary dependencies from React
import React from "react";

// Define a functional component called LetterButton that receives letter, onClick, and disabled as props
const LetterButton = ({ letter, onClick, disabled }) => {
  // Return JSX representing the component
  return (
    <button className="letter-button" onClick={onClick} disabled={disabled}>
      {/* Display the letter inside the button */}
      {letter}
    </button>
  );
};

// Export the LetterButton component as the default export
export default LetterButton;
