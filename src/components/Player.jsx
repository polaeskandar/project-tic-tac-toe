import {useState} from "react";

const Player = ({name, symbol}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  }

  const playerName = isEditing
    ? <input type="text" required value={name} />
    : <span className="player-name">{name}</span>

  return <li>
    <span className="player">
      {playerName}<span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
}

export default Player;