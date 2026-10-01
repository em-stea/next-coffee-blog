import { useRef, useState } from "react";
import { useEventListener, useHover } from "usehooks-ts";

export const useCursorPosition = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(cardRef as React.RefObject<HTMLElement>);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEventListener(
    "mousemove",
    (e) => {
      if (!cardRef.current) return;

      // 1. Obtenemos los límites de ESTA card
      const rect = cardRef.current.getBoundingClientRect();

      // 2. Coordenadas relativas a ESTA card en particular
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      // 3. Seteamos las variables CSS en la card activa
      cardRef.current.style.setProperty("--x", `${localX}px`);
      cardRef.current.style.setProperty("--y", `${localY}px`);

      // 4. Guardamos la posición global para el cursor flotante
      setCursorPos({ x: e.clientX, y: e.clientY });
    },
    cardRef as React.RefObject<HTMLElement>,
  );

  return { cardRef, isHovered, cursorPos };
};
