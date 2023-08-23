// Import the necessary dependencies from React
import React from "react";

// Define a functional component called HangmanDisplay that receives incorrectGuesses as a prop
const HangmanDisplay = ({ incorrectGuesses }) => {
  // Define hangmanParts as an array of ASCII art or images representing hangman's appearance at different stages
  const hangmanParts = [
    // Each index corresponds to the number of incorrect guesses
    // Define hangman visuals for 0 to 6 incorrect guesses
    `
      +---+
          |
          |
          |
          |
          |
          XXXxxxxxXXxxxxxXXX
    `,
    `
      +---+
      O   |
          |
          |
          |
          |
          XXXxxxxxXXxxxxxXXX
    `,
    `
      +---+
      O   |
      |   |
          |
          |
          |
          XXXxxxxxXXxxxxxXXX
    `,
    `
      +---+
      O   |
     /|   |
          |
          |
          |
          XXXxxxxxXXxxxxxXXX
    `,
    `
      +---+
      O   |
     /|\\  |
          |
          |
          |
          XXXxxxxxXXxxxxxXXX
    `,
    `
      +---+
      O   |
     /|\\  |
     /    |
          |
          |
          XXXxxxxxXXxxxxxXXX
    `,
    `
      +---+
      O   |
     /|\\  |
     / \\  |
          |
          |
          XXXxxxxxXXxxxxxXXX
    `,
  ];

  // Return the selected hangman visual based on the number of incorrect guesses
  return (
    <pre className="hangman-display">{hangmanParts[incorrectGuesses]}</pre>
  );
};

// Export the HangmanDisplay component as the default export
export default HangmanDisplay;
