import { useState } from 'react'
import data from './data/sounds.ts'

function Button() {
  const [currentSound, setSound] = useState(null)

  const handleClick = (soundFile: string) => {
    // const audio = new Audio(soundFile) // Creates a new HTMLAudioelement object
    // audio.play()
    // setSound(soundFile)
    playAudio(soundFile)
    console.log('handle click')
  }

  function playAudio(name: string) {
    const findAudio = data.find((item) => item.name === name)
    const audioPath: string = findAudio[path]
    // findaudio now equals the whole object
    //we need just one property from the object
    const audio = new Audio(audioPath)
    audio.play()
    setSound(audioPath)
    console.log('play audio')
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

// .catch((error) => console.error('Error playing audio:', error))
