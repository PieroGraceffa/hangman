// Import the necessary dependencies from React
import React from "react";

// Define a functional component called WordDisplay that receives word and guessedLetters as props
const WordDisplay = ({ word, guessedLetters }) => {
  // Return JSX representing the component
  return (
    <div className="word-display">
      {/* Split the word into individual letters and map over them */}
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className={`letter ${
            guessedLetters.includes(letter) ? "guessed" : ""
          }`}>
          {/* Display the guessed letter if it's in guessedLetters, otherwise display an underscore */}
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

// Export the WordDisplay component as the default export
export default WordDisplay;
