import './index.css'

const WinOrLoseCard = props => {
  const {score, restartGame} = props
  const onClickPlayAgain = () => {
    restartGame()
  }
  let imgUrl
  let result
  let scoreTitle
  if (score === 12) {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    result = 'You Won'
    scoreTitle = 'Best Score'
  } else {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    result = 'You Lose'
    scoreTitle = 'Score'
  }
  return (
    <div className="win-lose-card">
      <div className="result-container">
        <h1 className="game-result">{result}</h1>
        <div className="sub-result-container">
          <p className="score-title">{scoreTitle}</p>
          <p className="game-score">{score}/12</p>
          <button
            type="button"
            className="play-again-btn"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img className="win-lose-img" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
