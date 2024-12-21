import Modal from 'react-modal'
import Confetti from 'react-confetti'

Modal.setAppElement('#root')

function WinnerModal({ isOpen, winner, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="winner-modal"
      overlayClassName="winner-modal-overlay"
    >
      {isOpen && <Confetti />}
      <div className="winner-content">
        <h2>Congratulations!</h2>
        <p>Player {winner} wins! 🎉</p>
        <button className="close-button" onClick={onClose}>
          Play Again
        </button>
      </div>
    </Modal>
  )
}

export default WinnerModal;