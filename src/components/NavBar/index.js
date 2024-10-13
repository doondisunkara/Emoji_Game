import './index.css'

const NavBar = props => {
  const {score, topScore, gameEnd} = props
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-title">Emoji Game</h1>
      </div>
      {!gameEnd && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
