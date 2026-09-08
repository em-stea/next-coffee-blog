"use client";

import { useEffect, useRef, useState } from "react";

export const useImageLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return { isLoaded, setIsLoaded, imgRef, onLoad };
};
