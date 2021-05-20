import React from 'react'
import {isBotService} from './utils'
import {LazyImage} from './LazyImage'

type ImageProps = {
  alt: string | undefined
  className: string | undefined
  height: string | number
  loading: 'eager' | 'lazy' | undefined
  sizes: string | undefined
  src: string
  srcSet: string | undefined
  userAgent: string | undefined
  width: string | number | undefined
}

const imgStyle = {
  maxWidth: '100%'
}

const Image: React.FC<ImageProps> = ({
  alt,
  className,
  height,
  loading,
  sizes,
  src,
  srcSet,
  style = {},
  userAgent,
  width
}) => {
  const hasUserAgent = Boolean(userAgent)
  const isBot = hasUserAgent && isBotService(userAgent)
  const isLazy = loading === 'lazy'
  const styles = {...imgStyle, ...style}

  // For bots or not lazy loading images
  if (!hasUserAgent || isBot || !isLazy)
    return (
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
      />
    )

  // For real users and lazy loading images
  return (
    <LazyImage height={height}>
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
      />
    </LazyImage>
  )
}

export default Image
