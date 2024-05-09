interface Props {
    effectName: string
}

function Button(props: Props) {
    return (
        <div className="button-wrapper">
            <div className="button">
                <span className="sound-name">
                    "sound names yet to be configured"
                </span>
            </div>
        </div>
    )
}

export default Button