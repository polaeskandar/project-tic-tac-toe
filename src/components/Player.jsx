import {useState} from "react";

const Player = ({initialName, symbol}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing(editing => !editing);
  }

  const handleChangePLayerName = (e) => {
    setName(e.target.value)
  }

  const playerName = isEditing
    ? <input type="text" required defaultValue={name} onChange={handleChangePLayerName} />
    : <span className="player-name">{name}</span>

  return <li>
    <span className="player">
      {playerName}<span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
}

export default Player;