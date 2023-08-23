// Import the necessary dependencies from React
import React from "react";

// Define a functional component called GuessedLetters that receives guessedLetters as a prop
const GuessedLetters = ({ guessedLetters }) => {
  // Return JSX representing the component
  return (
    <div className="guessed-letters">
      {/* Display the guessed letters joined by commas */}
      <p>Guessed Letters: {guessedLetters.join(", ")}</p>
    </div>
  );
};

// Export the GuessedLetters component as the default export
export default GuessedLetters;
