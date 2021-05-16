import React from 'react'

type ImageProps = {
  alt: string | undefined
  className: string | undefined
  height: string | number
  loading: 'eager' | 'lazy' | undefined
  sizes: string | undefined
  src: string
  srcSet: string | undefined
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
  width
}) => {
  return (
    <img
      alt={alt}
      className={className}
      height={height}
      loading={loading}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
      style={imgStyle}
      width={width}
    />
  )
}

export default Image
