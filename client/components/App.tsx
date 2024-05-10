import Button from './Button.tsx'
import Header from './Header.tsx'

function App() {
  return (
    <div>
      <Header />
      <h1>Very normal sounds for the discerning user</h1>
      <p className="subtitle">Click one of the buttons below to begin!</p>
      <div className="placeHolder">
        <Button />
      </div>
      <br></br>
     <p>All rights reserved by the Real Gaby © copyright</p>
    </div>
  )
}

export default App
