import React from 'react'
import './Example.css'

type Props = {
  children?: React.ReactNode
}

const Example: React.FC<Props> = ({children}) => {
  return <div className="example">{children}</div>
}

export {Example}
