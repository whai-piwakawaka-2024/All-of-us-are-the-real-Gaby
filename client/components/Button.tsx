interface Props {
  effectName: string
}

function Button(props: Props) {
  return (
    <div className="button-wrapper">
      <div className="button">
        <span className="sound-name">{props.effectName}</span>
      </div>
    </div>
  )
}

export default Button

// 1 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   2 setText(event.target.value)
//   3 }

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   2 event.preventDefault()
//   3 // do something with our 'text' state
//   4 }

{
  /* <form action="/" method="get">
2 <label htmlFor="colourInput">Add a colour: </label>
3 <input type="text" name="colour" id="colourInput" /
4 <button type="submit">Submit</button>
5 </form> */
}

{
  /* <form onSubmit={handleOnSubmit}>
2 <input type="text" name="colour" id="colour"
3 value={text} onChange={handleChange}/>
4 <button type="submit">Submit</button>
5 </form> */
}
