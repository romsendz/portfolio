"use client";

import { useTheme } from "next-themes";
import Waves from "./waves";
import { useEffect, useState } from "react";

const WavesBackground = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering until after hydration
  if (!mounted) return null;
  return (
    <Waves
      lineColor="rgba(142, 197, 255, 0.33)"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      waveSpeedX={0.02}
      waveSpeedY={0.01}
      waveAmpX={40}
      waveAmpY={20}
      friction={0.9}
      tension={0.01}
      maxCursorMove={120}
      xGap={12}
      yGap={36}
      style={{ filter: `blur(${theme === "light" ? "2" : "5"}px)` }}
    />
  );
};

export default WavesBackground;
