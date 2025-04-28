"use client";

import confetti from "canvas-confetti";

const Celebration = () => {
  const celebrate = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };
  return (
    <>
      <span
        onClick={celebrate}
        className="cursor-pointer inline-flex items-center gap-0.5 text-blue-500 hover:text-blue-600 hover:underline"
      >
        celebrate it
      </span>
      <span onClick={celebrate} className="cursor-pointer">
        {" "}
        🚀
      </span>
    </>
  );
};

export default Celebration;
