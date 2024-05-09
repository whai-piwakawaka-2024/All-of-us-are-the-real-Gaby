import Button from './Button.tsx'
import Header from './Header.tsx'


function App() {
  return (
    <div>
      <h1>App 'Gabby is that you!?'</h1>
      <p>React development has begun!</p>
      
      <div className="placeHolder">
        <Button effectName="bababooey"/>
        <Button effectName="kill me" />
        <Button effectName="I am the real Gaby" />
      </div>
    </div>
  )
}

export default App

