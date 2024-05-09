import { useState } from 'react'

interface Props {
    effectName: string
}

function Button(props: Props) {
  const [sound, setSound] = useState(false)


    return (
        <div className="button-wrapper">
            <<div className="button">>
                <span className="sound-name">
                    {props.effectName}
                </span>
            </div>
        </div>
    )
}

export default Button