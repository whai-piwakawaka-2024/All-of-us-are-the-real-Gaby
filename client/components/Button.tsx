import { useState } from 'react'

interface Props {
  effectName: string
}

function Button(props: Props) {
  const [sound, setSound] = useState(false)

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

  const handleClick = () => {
    const audio = new Audio('import audio here') // Creates a new HTMLAudioelement object
    audio.play()
    setPlaySound(true)
  }

  return (
    <div className="button-wrapper">
      <button onClick={handleClick}>
        <span className="sound-name">{props.effectName}</span>
      </button>
    </div>
  )
}

export default Button
