import { useState } from 'react'
import data from './data/sounds'

function Button() {
  const [currentSound, setSound] = useState(null || 'string')

  const handleClick = (soundFile: soundFiles) => {
    if (typeof soundFile === 'object' && soundFile.name) {
      playAudio(soundFile)
    } else {
      console.error('Invalid sound file:', soundFile)
    }
  }

  function playAudio(name: string) {
    if (typeof name !== 'string') {
      console.error('Invalid audio name:', name)
      return
    }

    const findAudio = data.find((item) => item.name === name)
    if (findAudio) {
      const audioPath: string = findAudio.src
      console.log('Audio file:', audioPath)
      const audio = new Audio(audioPath)
      audio.play()
      setSound(audioPath)
    } else {
      console.error('Audio file not found')
    }
  }

  return (
    <div className="button-wrapper">
      {data.map((soundFile, index) => (
        <button key={index} onClick={() => handleClick(soundFile)}>
          <span className="sound-name">{soundFile.name}</span>
        </button>
      ))}
    </div>
  )
}

export default Button
