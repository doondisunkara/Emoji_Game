import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {emojiName, emojiUrl} = emojiDetails
  return (
    <li className="emoji-card-item">
      <img className="emoji" src={emojiUrl} alt={emojiName} />
    </li>
  )
}

export default EmojiCard
