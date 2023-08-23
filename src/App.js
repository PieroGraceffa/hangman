// Import React and necessary hooks
import React, { useState, useEffect } from "react";
// Import the main CSS file for styling
import "./App.css";
// Import the WordDisplay component for showing the word with guessed letters
import WordDisplay from "./components/WordDisplay";
// Import the LetterButton component for letter selection
import LetterButton from "./components/LetterButton";
// Import the HangmanDisplay component for displaying the hangman graphic
import HangmanDisplay from "./components/HangmanDisplay";
// Import the GameStatus component for displaying game status (win, loss, ongoing)
import GameStatus from "./components/GameStatus";
// Import the GuessedLetters component for showing the guessed letters
import GuessedLetters from "./components/GuessedLetters";
// Import the HelpModal component for displaying game instructions or hints
import HelpModal from "./components/HelpModal";

// List of words for the game
const words = ["hangman", "react", "javascript", "programming"];

function App() {
  // State variables for the game
  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  // Function to toggle the visibility of the help modal
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  // Add event listener for keyboard input
  useEffect(() => {
    const handleKeyPress = (event) => {
      const pressedKey = event.key.toLowerCase();
      // Check if pressed key is a letter and hasn't been guessed before
      if (/^[a-z]$/.test(pressedKey) && !guessedLetters.includes(pressedKey)) {
        guessLetter(pressedKey);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  // Function to handle a guessed letter
  const guessLetter = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);
    // Increment incorrect guesses if the letter is not in the selected word
    if (!selectedWord.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  // Function to restart the game
  const restartGame = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  return (
    <div className="App">
      <h1>Piero's Hangman Game</h1>
      <h3>Guess the word</h3>
      <button onClick={toggleHelp}>Help</button>
      <div className="hangman-guessed-container">
        {/* Display the hangman and guessed letters */}
        <HangmanDisplay incorrectGuesses={incorrectGuesses} />
        <GuessedLetters guessedLetters={guessedLetters} />
      </div>
      {/* Display the word with guessed letters */}
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
      {/* Display the game status and restart button */}
      <GameStatus
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
        incorrectGuesses={incorrectGuesses}
        restartGame={restartGame}
      />
      {/* Display the HelpModal when showHelp is true */}
      <HelpModal show={showHelp} onClose={toggleHelp} />
    </div>
  );
}

export default App;
