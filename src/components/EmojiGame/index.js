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
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    console.log(emojisList)
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore} = this.state
    const shuffledList = this.shuffledEmojisList()
    console.log(shuffledList)
    return (
      <div className="emoji-game-container">
        <NavBar score={score} topScore={topScore} />
        <ul className="emoji-cards-container">
          {shuffledList.map(eachItem => (
            <EmojiCard emojiDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
