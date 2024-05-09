import { useState } from 'react'

interface Props {
  effectName: string
}

function Button(props: Props) {
  const [currentSound, setSound] = useState(false)

  const soundFiles = [
    // Will move those to a seperate file soon!
    'ba-dum-tss.wav',
    'carnival.wav',
    'country-vibes.wav',
    'fbi-open-up.mp3',
    'its-an-avocado-thanks.mp3',
    'look-at-this-distinguished-gentleman-meme.wav',
    'ratatouille-oh-my-god-meme-sound.mp3',
    'something-tells-me-thats-not-funny.mp3',
    'taste-like-chicken-remix.mp3',
    'your-worst-night-mare.mp3',
  ]

  const handleClick = (soundFile: string) => {
    const audio = new Audio(soundFile) // Creates a new HTMLAudioelement object
    audio.play()
    setSound(true)
  }
  return (
    <div className="button-wrapper">
      {soundFiles.map((soundFile, index) => (
        <button key={index} onClick={() => handleClick(soundFile)}>
          <span className="sound-name">{props.effectName}</span>
        </button>
      ))}
      {currentSound && <p> Currently playing: {currentSound} </p>}
    </div>
  ) // Just an idea with 'Currently playing!'
}

export default Button
