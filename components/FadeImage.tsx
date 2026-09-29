"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image with a blur-up placeholder and a soft fade once the full image
 * decodes. If the image is already cached before hydration, it simply shows.
 */
export function FadeImage({ alt, className = "", onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      placeholder={props.blurDataURL ? "blur" : "empty"}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={`${loaded ? "animate-fade-in" : ""} ${className}`}
    />
  );
}
