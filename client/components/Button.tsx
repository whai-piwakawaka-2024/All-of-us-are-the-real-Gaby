import { useState } from 'react'

interface Props {
  effectName: string
}

function Button(props: Props) {
  const [sound, setSound] = useState(false)

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
