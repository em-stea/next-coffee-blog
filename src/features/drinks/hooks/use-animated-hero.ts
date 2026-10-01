import {
  animate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useAnimatedHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useMotionValue(0);

  const animatedWidth = useTransform(progress, [0, 0.8], ["0%", "100%"]);
  const animatedHeight = useTransform(progress, [0, 0.8], ["0vh", "100vh"]);
  const animatedScale = useTransform(progress, [0, 0.8], [0.8, 1]);
  const animatedBorderRadius = useTransform(
    progress,
    [0, 0.8],
    ["32px", "0px"],
  );

  // 2. Control del temporizador automático vs. Scroll manual
  useEffect(() => {
    let hasUserScrolled = false;

    // Dispara la expansión automática a los 2.5s si el usuario no scrollea
    const autoExpandTimer = setTimeout(() => {
      if (!hasUserScrolled) {
        animate(progress, 0.8, {
          duration: 1.2,
          ease: "easeInOut",
        });
      }
    }, 2500);

    // Si el usuario scrollea, pasamos a tomar la progresión del scroll
    const unsubscribeScroll = scrollYProgress.on("change", (latest) => {
      if (latest > 0.01) {
        hasUserScrolled = true;
        clearTimeout(autoExpandTimer);
      }

      if (hasUserScrolled) {
        // Solo incrementamos `progress` si el scroll actual supera el valor máximo anterior
        if (latest > progress.get()) {
          progress.set(latest);
        }

        // Una vez que se expande al 80%, bloqueamos el estado en `true` para siempre
        if (latest >= 0.8 && !isExpanded) {
          setIsExpanded(true);
        }
      }
    });

    return () => {
      clearTimeout(autoExpandTimer);
      unsubscribeScroll();
    };
  }, [scrollYProgress, progress, isExpanded]);

  return {
    containerRef,
    isExpanded,
    animatedWidth,
    animatedHeight,
    animatedScale,
    animatedBorderRadius,
  };
};
