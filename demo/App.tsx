import React from 'react'
import {Example} from './components/Example'
import {Image} from '../src'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Example>
        <Image src="https://source.unsplash.com/900x900" height="600" />
        pepe
      </Example>
    </div>
  )
}

export default App
