/* eslint-disable no-console */
import React from 'react'
import {Example} from './components/Example'
import {Image} from '@rm/react-image'
import './App.css'

const userAgents = {
  user: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
  bot: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z‡ Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
}

const images = [
  {
    description:
      'A default lazy loading image. This image do not lazy load because of it is in viewport',
    height: '600',
    loading: 'lazy',
    onLoad: () => console.log('#1 Lazy load image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?barcelona',
    userAgent: userAgents.user
  },
  {
    description:
      'A default lazy loading image. This probably do not lazy because of it is partially in viewport',
    height: '600',
    loading: 'lazy',
    onLoad: () => console.log('#2 Lazy load image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?paris',
    userAgent: userAgents.user
  },
  {
    description: 'A default lazy loading image',
    height: '600',
    loading: 'lazy',
    onLoad: () => console.log('#3 Lazy load image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?oporto',
    userAgent: userAgents.user
  },
  {
    description: 'A default lazy loading image',
    height: '600',
    loading: 'lazy',
    onLoad: () => console.log('#4 Lazy load image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?roma',
    userAgent: userAgents.user
  },
  {
    description: 'A default lazy loading image',
    height: '600',
    loading: 'lazy',
    onLoad: () => console.log('#5 Lazy load image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?london',
    userAgent: userAgents.user
  },
  {
    base64Placeholders: {
      error:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAAChElEQVR4Ae3aMW/TQBxAcb70k91AAiGuGlZAtOlQApWaDiSdklZq2RPUTm1xUWL3PgqSpygkXlh88N54nn7S2Trd3y/CP5IQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECPmPIEKECBEiRIgQIeX82+FBO0naB4eTRRkt5P7sNWt1Rw9RQvKThI2SYR4f5OoVW2rfRAYpT6hqHc8WeVHki9mgRdWwiAmyfA9AdrlaW5tlAHxcxQMpK8feRbGxPEkrSREN5ARg/y780V0GMIwFcgXwLg9byvsAN3FA8lfAfr7jYQZ0nqKAfAb21vYVwNruSoEvMUDuE+Ai7IKECZA+RAA5A7JiN6TMgFHzIeUb4DLshoQZ0H1uPGQOvFzVQZYtYNF4yBg4DnWQMAAmjYccArN6yBQ4ajzkAFjUQ+ZAv/GQNpDXQ3Kg03hIAhT1kAJIhLi1/vJl39Ic6Mf3+a2K8PM7BgahtgEwjuKI0lqGjSI8opRdYFb3sk/jODSGEZCVuyFFDzgPzYc8JMBkN2QMpI8RQMIQ2LvdBblNgdM4Lh/aQJaHrf3sAe2nKCDhGqCfb3VEcx1UNQTItlzQ3fYAvoZYIMUHgHRSbiyPU4BPZUSX2JWEbLZcW5v2qByrmMYKxZCq1mA6z4sin08HLapOy8gGPddtttT5HuHobZiwUXr6K85h6KjLWm/PH+MdTy/GR/12knb6g8mPZ38YECJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAh0fUb5q7oCGreEVEAAAAASUVORK5CYII='
    },
    description: 'Not found image placeholder + onError callback (see console)',
    height: '600',
    loading: 'lazy',
    onError: () => console.log('#6 Image can not be found'),
    src: '/not_image.jpg',
    userAgent: userAgents.user
  },
  {
    base64Placeholders: {
      loading:
        'data:image/png;base64,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'
    },
    description: 'Image with loading placeholder',
    height: '600',
    loading: 'lazy',
    onLoad: () => console.log('#7 Lazy load image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?cat',
    userAgent: userAgents.user
  },
  {
    description: 'Bot user agent. It is native lazy loaded',
    height: '600',
    loading: 'lazy',
    onLoad: () => console.log('#8 Not lazy loaded image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?moscow',
    userAgent: userAgents.bot
  },
  {
    description: 'Bot user agent. It is not lazy loaded',
    height: '600',
    loading: 'eager',
    onLoad: () => console.log('#9 Not lazy loaded image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?munich',
    userAgent: userAgents.bot
  },
  {
    description: 'A default lazy loading image',
    height: '600',
    loading: 'lazy',
    onLoad: () => console.log('#10 Lazy load image has been loaded'),
    src: 'https://source.unsplash.com/random/600x900/?berlin',
    userAgent: userAgents.user
  }
]

const App = () => {
  return (
    <div className="App">
      {images.map((image, index) => (
        <Example key={index}>
          <Image {...image} className="image" />
          <div>{image.description}</div>
        </Example>
      ))}
    </div>
  )
}

export default App
