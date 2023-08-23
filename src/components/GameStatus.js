// Import necessary dependencies from React and react-modal
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

// Define a functional component called GameStatus that receives props
const GameStatus = ({
  selectedWord,
  guessedLetters,
  incorrectGuesses,
  restartGame,
}) => {
  // Check if the game is won by comparing each letter in selectedWord with guessedLetters
  const isGameWon = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  // Set up state to manage the visibility of the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Use the useEffect hook to open the modal when the game is won or incorrectGuesses reach 6
  useEffect(() => {
    if (isGameWon || incorrectGuesses >= 6) {
      setModalIsOpen(true);
    }
  }, [isGameWon, incorrectGuesses]);

  // Define a function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Return JSX representing the component
  return (
    <div className="game-status">
      {/* Modal component with conditional content based on game status */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay">
        <div>
          {/* Display a message if the game is won */}
          {isGameWon && <p className="win-status">You won!</p>}
          {/* Display a message if incorrectGuesses reach 6 */}
          {incorrectGuesses >= 6 && (
            <p className="lose-status">
              You lost. The word was "{selectedWord}".
            </p>
          )}
          {/* Button to restart the game and close the modal */}
          <button
            className="restart-modal-button"
            onClick={() => {
              restartGame();
              closeModal();
            }}>
            Restart
          </button>
          {/* Button to close the modal without restarting */}
          <button className="close-modal-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

// Export the GameStatus component as the default export
export default GameStatus;
