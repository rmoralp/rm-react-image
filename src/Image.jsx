import {useState} from 'react'
import PropTypes from 'prop-types'
import {isBotService, getSize} from './utils'
import {LazyImage} from './LazyImage'

const imgDefaultStyles = {
  maxWidth: '100%'
}
const imgPlaceholderStyles = {
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const NO_OP = () => undefined

const Image = ({
  alt,
  className,
  decoding,
  height,
  loading,
  onLoad = NO_OP,
  onError = NO_OP,
  base64Placeholders = {},
  sizes,
  src,
  srcSet,
  style = {},
  userAgent,
  width
}) => {
  const [styles, setStyles] = useState(() => {
    const placeholderStyles = base64Placeholders.loading
      ? {
          ...imgPlaceholderStyles,
          backgroundImage: `url(${base64Placeholders.loading})`,
          width: width ? getSize(width) : '100%'
        }
      : {}
    return {...imgDefaultStyles, ...placeholderStyles, ...style}
  })
  const hasUserAgent = Boolean(userAgent)
  const isBot = hasUserAgent && isBotService(userAgent)
  const isLazy = loading === 'lazy'

  const handleError = event => {
    if (base64Placeholders.error) {
      const errorStyles = {
        ...styles,
        ...imgPlaceholderStyles,
        backgroundImage: `url(${base64Placeholders.error})`,
        width: width ? getSize(width) : '100%'
      }

      setStyles(errorStyles)
    }

    onError(event)
  }

  const Image = (
    <img
      alt={alt}
      className={className}
      height={height}
      loading={loading}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
      style={styles}
      width={width}
      onLoad={onLoad}
      onError={handleError}
    />
  )

  // For bots or not lazy loading images
  if (!hasUserAgent || isBot || !isLazy) return Image

  // For real users and lazy loading images
  return <LazyImage height={height}>{Image}</LazyImage>
}

Image.propTypes = {
  alt: PropTypes.string,
  base64Placeholders: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.string
  }),
  className: PropTypes.string,
  decoding: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.string,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  style: PropTypes.object,
  userAgent: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default Image
