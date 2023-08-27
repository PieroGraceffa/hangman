// Import the necessary libraries and components.
// Importing React and hooks for managing component state and side effects.
import React, { useState, useEffect } from "react";
// Importing the styles for the App component.
import "./App.css";
// Importing the component responsible for displaying the word with hidden letters.
import WordDisplay from "./components/WordDisplay";
// Importing the component for individual letter buttons.
import LetterButton from "./components/LetterButton";
// Importing the component for displaying the hangman figure.
import HangmanDisplay from "./components/HangmanDisplay";
// Importing the component for displaying the game status (win, lose, etc.).
import GameStatus from "./components/GameStatus";
// Importing the component for displaying the guessed letters.
import GuessedLetters from "./components/GuessedLetters";
// Importing the component for displaying a help modal.
import HelpModal from "./components/HelpModal";

// List of words for the game.
const words = ["hangman", "react", "javascript", "programming"];

// Main App component.
function App() {
  // State variables managed by React hooks.
  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)] // Randomly select a word from 'words'.
  );
  const [guessedLetters, setGuessedLetters] = useState([]); // Array to store guessed letters.
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Number of incorrect guesses.
  const [showHelp, setShowHelp] = useState(false); // State for displaying the help modal.
  const [hintIndex, setHintIndex] = useState(0); // Index for revealing hints in the WordDisplay component.

  // Function to toggle the display of the help modal.
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  // useEffect hook to handle key presses and guess letters.
  useEffect(() => {
    const handleKeyPress = (event) => {
      const pressedKey = event.key.toLowerCase();
      // Check if the pressed key is a lowercase letter and not already guessed.
      if (/^[a-z]$/.test(pressedKey) && !guessedLetters.includes(pressedKey)) {
        guessLetter(pressedKey);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  // Function to handle a letter guess.
  const guessLetter = (letter) => {
    setGuessedLetters([...guessedLetters, letter]); // Update guessedLetters with the new guess.
    if (!selectedWord.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1); // Increment incorrectGuesses for wrong guesses.
    }
  };

  // Function to reveal the next letter hint.
  const showNextLetterHint = () => {
    if (hintIndex < selectedWord.length) {
      guessLetter(selectedWord[hintIndex]); // Guess the next letter in the selected word.
      setHintIndex(hintIndex + 1); // Increment the hintIndex.
    }
  };

  // Function to restart the game.
  const restartGame = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]); // Select a new random word.
    setGuessedLetters([]); // Reset guessed letters.
    setIncorrectGuesses(0); // Reset incorrect guesses.
    setHintIndex(0); // Reset hint index.
  };

  // JSX representing the user interface of the app.
  return (
    <div className="App">
      <h1>Piero's Hangman Game</h1>
      <h3>Guess the word</h3>
      {/* Buttons for various game actions */}
      <button onClick={toggleHelp}>Help</button>
      <button onClick={showNextLetterHint}>Hint</button>
      <button onClick={restartGame}>Restart</button>
      {/* Container for hangman display and guessed letters */}
      <div className="hangman-guessed-container">
        <HangmanDisplay incorrectGuesses={incorrectGuesses} />
        <GuessedLetters guessedLetters={guessedLetters} />
      </div>
      {/* Display the word to guess */}
      <WordDisplay
        word={selectedWord}
        guessedLetters={guessedLetters}
        hintIndex={hintIndex}
      />
      {/* Buttons for guessing letters */}
      <div className="letter-buttons">
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
          <LetterButton
            key={letter}
            letter={letter}
            onClick={() => guessLetter(letter)}
            disabled={guessedLetters.includes(letter)}
          />
        ))}
      </div>
      {/* Display game status and help modal */}
      <GameStatus
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
        incorrectGuesses={incorrectGuesses}
        restartGame={restartGame}
      />
      <HelpModal show={showHelp} onClose={toggleHelp} />
    </div>
  );
}

// Export the App component as the default export of the module.
export default App;
