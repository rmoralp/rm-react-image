import React, {useEffect, useRef, useState} from 'react'
import {isIntersectionObserverEnabled} from '../utils'

export const useOnScreen = ({
  initialValue = false,
  offset = '0px',
  once = true,
  ref
}) => {
  // State and setter for storing whether element is visible or not
  const [isIntersecting, setIntersecting] = useState(initialValue)
  const outerRef = useRef()

  useEffect(() => {
    const usableRef = ref || outerRef
    const {current} = usableRef || {}

    if (!current) return

    let observer
    ;(isIntersectionObserverEnabled
      ? Promise.resolve()
      : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting)
          if (entry.isIntersecting) {
            // Unobserve now if we've set once option
            once && observer && observer.unobserve(current)
          }
        },
        {
          rootMargin: offset
        }
      )

      current && observer.observe(current)
    })

    return () => {
      observer && observer.unobserve(current)
    }
  }, [offset, once, ref])

  return [isIntersecting, outerRef]
}
