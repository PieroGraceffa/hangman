// Import React library
import React from "react";

// HelpModal component: Displays game instructions or hints
const HelpModal = ({ show, onClose }) => {
  if (!show) {
    return null; // If 'show' is false, do not render anything
  }
  // rules
  return (
    <div className="help-modal">
      <p>Guess the hidden word by selecting letters.</p>
      <p>Incorrect guesses add to the hangman figure.</p>
      <p>Guess the word before hangman completes to win!</p>
      <p>You have a limited number of attempts to guess the word.</p>
      <p>Each incorrect guess brings you closer to losing.</p>
      <p>Pay attention to the letters you've used to avoid repeating them.</p>
      <p>
        If the hangman figure is complete before you guess the word, you lose.
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HelpModal;
