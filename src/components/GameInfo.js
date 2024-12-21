function GameInfo({ status, onReset }) {
    return (
      <div className="game-info">
        <div className="status">{status}</div>
        <button className="reset-button" onClick={onReset}>
          Reset Game
        </button>
      </div>
    )
  }
  
  export default GameInfo;