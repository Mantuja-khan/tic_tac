import Modal from 'react-modal'

function DrawModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="winner-modal"
      overlayClassName="winner-modal-overlay"
    >
      <div className="winner-content">
        <h2>It's a Draw! 😕</h2>
        <p>No winner this time... 😢 </p>
        <button className="close-button" onClick={onClose}>
          Try Again
        </button>
      </div>
    </Modal>
  )
}

export default DrawModal;