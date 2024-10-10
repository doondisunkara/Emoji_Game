/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojisList: [],
    gameEnd: false,
  }

  componentDidMount() {
    this.initializeEmojisList()
  }

  initializeEmojisList = () => {
    const {emojisList} = this.props
    const initialList = emojisList.map(eachEmoji => ({
      ...eachEmoji,
      isSelected: false,
    }))
    console.log('Hi', initialList)
    this.setState({emojisList: initialList})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.state
    return emojisList.sort(() => Math.random() - 0.5)
  }

  restartGame = () => {
    const {score, topScore, emojisList} = this.state
    const newTopScore = score > topScore ? score : topScore
    const resetList = emojisList.map(eachEmoji => ({
      ...eachEmoji,
      isSelected: false,
    }))
    console.log('Restarted')
    this.setState({
      score: 0,
      topScore: newTopScore,
      emojisList: resetList,
      gameEnd: false,
    })
  }

  changeClickedStatus = (emojiId, emojiSelectedStatus) => {
    if (emojiSelectedStatus) {
      this.setState({gameEnd: true})
    }
    const {emojisList} = this.state
    const updatedList = emojisList.map(eachEmoji => {
      if (eachEmoji.id === emojiId) {
        return {...eachEmoji, isSelected: true}
      }
      return eachEmoji
    })
    this.setState(prevState => ({
      score: prevState.score + 1,
      emojisList: updatedList,
    }))
  }

  render() {
    const {score, topScore, gameEnd} = this.state
    const shuffledList = this.shuffledEmojisList()
    return (
      <div className="emoji-game-container">
        <NavBar score={score} topScore={topScore} />
        {gameEnd ? (
          <div className="win-lose-card-container">
            <WinOrLoseCard score={score} restartGame={this.restartGame} />
          </div>
        ) : (
          <ul className="emoji-cards-container">
            {shuffledList.map(eachItem => (
              <EmojiCard
                emojiDetails={eachItem}
                changeClickedStatus={this.changeClickedStatus}
                key={eachItem.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
