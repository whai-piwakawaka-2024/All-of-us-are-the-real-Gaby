import { useState } from 'react'
import data from './data/sounds.ts'

function Button() {
  const [currentSound, setSound] = useState(null)

  const handleClick = (soundFile: string) => {
    const audio = new Audio(soundFile) // Creates a new HTMLAudioelement object
    audio.play().catch((error) => console.error('Error playing audio:', error))
    setSound(soundFile)
  }
  return (
    <div className="button-wrapper">
      {data.map((soundFile, index) => (
        <button key={index} onClick={() => handleClick(soundFile)}>
          <span className="sound-name">{soundFile.name}</span>
        </button>
      ))}
      {/* {currentSound && <p> Currently playing: {currentSound} </p>} */}
    </div>
  ) // Just an idea with 'Currently playing!'
}

export default Button
