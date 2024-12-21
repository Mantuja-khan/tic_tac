function Square({ value, isWinning, onClick }) {
    return (
      <button 
        className={`cell ${value?.toLowerCase()} ${isWinning ? 'winning' : ''}`}
        onClick={onClick}
      >
        {value}
      </button>
    )
  }
  
  export default Square;