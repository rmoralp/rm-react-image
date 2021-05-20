import React from 'react'
import {Example} from './components/Example'
import {Image} from '@rm/react-image'
import './App.css'

const images = [
  {src: 'https://source.unsplash.com/random/600x900/?barcelona'},
  {src: 'https://source.unsplash.com/random/600x900/?paris'},
  {src: 'https://source.unsplash.com/random/600x900/?oporto'},
  {src: 'https://source.unsplash.com/random/600x900/?roma'},
  {src: 'https://source.unsplash.com/random/600x900/?london'},
  {src: 'https://source.unsplash.com/random/600x900/?munich'},
  {src: 'https://source.unsplash.com/random/600x900/?berlin'}
]
const App: React.FC = () => {
  return (
    <div className="App">
      {images.map(({src}, index) => (
        <Example key={index}>
          <Image src={src} height="600" className="image" loading="lazy" />
          <div>Lazy load</div>
        </Example>
      ))}
    </div>
  )
}

export default App
