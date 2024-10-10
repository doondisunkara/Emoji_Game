import './index.css'

const EmojiCard = props => {
  const {emojiDetails, changeClickedStatus} = props
  const {id, emojiName, emojiUrl, isSelected} = emojiDetails
  const onClickEmoji = () => {
    console.log('emoji clicked')
    changeClickedStatus(id, isSelected)
  }
  return (
    <li className="emoji-card-item">
      <button type="button" className="emoji-btn" onClick={onClickEmoji} k>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
