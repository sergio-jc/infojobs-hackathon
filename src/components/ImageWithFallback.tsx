'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

function ImageWithFallback ({
  src,
  alt,
  fallBackSrc = '/fallback-image.svg',
  className
}: {
  src: string
  alt: string
  fallBackSrc?: string | StaticImageData
  className?: string
}) {
  const [imageError, setImageError] = useState(false)
  return (
    <Image
      src={imageError ? fallBackSrc : src}
      alt={alt}
      width={200}
      height={200}
      className={className}
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      onError={() => setImageError(true)}
    />
  )
}

export default ImageWithFallback
