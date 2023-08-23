// Import necessary dependencies from React library
import React, { useState, useEffect } from "react";

// Import the styles defined in "App.css" to be used in the component
import "./App.css";

// Import custom components for different parts of the Hangman game
// Component to display the hidden word with guessed letters
import WordDisplay from "./components/WordDisplay";
// Component for interactive letter buttons
import LetterButton from "./components/LetterButton";
// Component to display the hangman figure
import HangmanDisplay from "./components/HangmanDisplay";
// Component to show game status and restart options
import GameStatus from "./components/GameStatus";
// Component to display guessed letters
import GuessedLetters from "./components/GuessedLetters";

// An array of words that can be used for the game
const words = ["hangman", "react", "javascript", "programming"];

function App() {
  // State management for the game
  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)] // Select a random word from the array
  );
  const [guessedLetters, setGuessedLetters] = useState([]); // Array of guessed letters
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Count of incorrect guesses

  // Add event listener for key presses (letters) to handle guesses
  useEffect(() => {
    const handleKeyPress = (event) => {
      const pressedKey = event.key.toLowerCase();
      if (/^[a-z]$/.test(pressedKey) && !guessedLetters.includes(pressedKey)) {
        guessLetter(pressedKey); // Call the guessLetter function if a valid key is pressed
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  // Function to handle guessing a letter
  const guessLetter = (letter) => {
    setGuessedLetters([...guessedLetters, letter]); // Add the guessed letter to the array
    if (!selectedWord.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1); // Increment incorrect guesses if the letter is not in the word
    }
  };

  // Function to restart the game
  const restartGame = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]); // Select a new random word
    setGuessedLetters([]); // Clear guessed letters
    setIncorrectGuesses(0); // Reset incorrect guesses
  };

  // The JSX representing the game interface
  return (
    <div className="App">
      <h1>Piero's Hangman Game</h1>
      <h3>Guess the word</h3>
      <div className="hangman-guessed-container">
        <HangmanDisplay incorrectGuesses={incorrectGuesses} />
        <GuessedLetters guessedLetters={guessedLetters} />
      </div>
      <WordDisplay word={selectedWord} guessedLetters={guessedLetters} />
      <div className="letter-buttons">
        {/* Create buttons for each letter */}
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
          <LetterButton
            key={letter}
            letter={letter}
            onClick={() => guessLetter(letter)}
            disabled={guessedLetters.includes(letter)}
          />
        ))}
      </div>
      {/* Display game status and options to restart */}
      <GameStatus
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
        incorrectGuesses={incorrectGuesses}
        restartGame={restartGame}
      />
    </div>
  );
}

export default App;
