interface Props {
    effectName: string
}

function Button(props: Props) {
    return (
        <div className="button-wrapper">
            <button>
                <span className="sound-name">
                    {props.effectName}
                </span>
            </button>
        </div>
    )
}

export default Button

//Think super slick one function to rule them all
//