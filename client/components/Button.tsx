import { useState } from 'react';

interface Props {
    effectName: string
}

function Button(props: Props) {
  const [sound, setSound] = useState(false)
  
  const handleClick = () = {
    const audio = new Audio('import audio here')
    audio.play()
    setPlaySound(true)
  }

    return (
        <div className="button-wrapper">
            <div className="button">
                <span className="sound-name">
                    {props.effectName}
                </span>
            </div>
        </div>
    )
}

export default Button