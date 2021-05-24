import React from 'react'
import {useNearScreen} from './hooks'
import {getSize} from './utils'

export const LazyImage = ({
  children,
  rootMargin = '100px 0px 0px',
  placeholder,
  height
}) => {
  const [isNearScreen, fromRef] = useNearScreen({offset: rootMargin})

  if (isNearScreen) {
    return children
  } else if (placeholder) {
    return <div ref={fromRef}>{placeholder}</div>
  } else {
    const emptyContentStyle = {
      height: height ? getSize(height) : '0px',
      marginBottom: '1px'
    }
    return <div ref={fromRef} style={emptyContentStyle} />
  }
}
