// Import the necessary React library for building UI components.
import React from "react";

// Define a functional component called WordDisplay, which takes in the following props:
// - word: The target word that needs to be displayed.
// - guessedLetters: An array containing the letters that have been guessed correctly.
// - hintIndex: The index up to which hints should be revealed.
const WordDisplay = ({ word, guessedLetters, hintIndex }) => {
  // The component returns a JSX div element with the class name "word-display".
  return (
    <div className="word-display">
      {/* Iterate over each character in the 'word' and create a span element for each character. */}
      {word.split("").map((letter, index) => (
        <span
          key={index} // Assign a unique key to each span element for efficient rendering.
          className={`letter ${
            // Determine the class to apply to the span element based on conditions:
            // If the current 'letter' has been guessed or its index is less than the 'hintIndex', apply "guessed" class.
            // Otherwise, no additional class is applied.
            guessedLetters.includes(letter) || index < hintIndex
              ? "guessed"
              : ""
          }`}>
          {/* Display the appropriate content within the span element:
               If the 'letter' has been guessed or its index is less than 'hintIndex', show the actual 'letter'.
               Otherwise, display an underscore to represent a hidden letter. */}
          {guessedLetters.includes(letter) || index < hintIndex ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

// Export the WordDisplay component as the default export of this module.
export default WordDisplay;
