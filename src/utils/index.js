export {isBotService} from './isBotService'
export {isNumericSize, getSize} from './sizes.js'

export const isOnBrowser = typeof window !== 'undefined'

// Some devices support IntersectionObserver API partially so we must check that it is completely supported
// See https://github.com/w3c/IntersectionObserver/issues/211
export const isIntersectionObserverEnabled =
  isOnBrowser &&
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
  'isIntersecting' in window.IntersectionObserverEntry.prototype
