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
      <h2>Hangman Game Rules</h2>
      <p>Guess the hidden word by selecting letters.</p>
      <p>Incorrect guesses will add to the hangman figure.</p>
      <p>Guess the word before the hangman is complete to win!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HelpModal;
