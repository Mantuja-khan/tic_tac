import { useState, useEffect } from 'react'
import Board from './components/Board'
import GameInfo from './components/GameInfo'
import WinnerModal from './components/WinnerModel'
import DrawModal from './components/DrawModel'
import { calculateWinner } from './utils/GameLogic'
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [showWinnerModal, setShowWinnerModal] = useState(false)
  const [showDrawModal, setShowDrawModal] = useState(false)

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  const result = calculateWinner(squares)
  const isDraw = !result && squares.every(square => square !== null)
  
  const status = result 
    ? `Winner: ${result.winner}` 
    : isDraw 
    ? "It's a draw!" 
    : `Next player: ${xIsNext ? 'X' : 'O'}`

  useEffect(() => {
    if (result) {
      setShowWinnerModal(true)
    } else if (isDraw) {
      setShowDrawModal(true)
    }
  }, [result, isDraw])

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
    setShowWinnerModal(false)
    setShowDrawModal(false)
  }

  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe</h1>
      <Board 
        squares={squares} 
        winningLine={result?.line} 
        onSquareClick={handleClick} 
      />
      <GameInfo status={status} onReset={resetGame} />
      <WinnerModal 
        isOpen={showWinnerModal}
        winner={result?.winner}
        onClose={resetGame}
      />
      <DrawModal
        isOpen={showDrawModal}
        onClose={resetGame}
      />
    </div>
  )
}

export default App