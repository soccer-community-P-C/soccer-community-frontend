/**
 * @constructor NEXT JS에서 이미지가 없을때 No Image를 보여주는 컴포넌트
 */
'use client';

import Image, { ImageProps } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useState } from 'react';

type ImageWithFallback = {
  fallbackSrc: string | StaticImport;
} & ImageProps;

export default function ImageWithFallback({ src, fallbackSrc, alt, ...rest }: ImageWithFallback) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      {...rest}
      alt={alt}
      onError={() => {
        setImageSrc(fallbackSrc);
      }}
      src={imageSrc}
    />
  );
}
