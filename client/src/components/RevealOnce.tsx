import React, { ReactNode, useEffect, useRef, useState } from "react";

type RevealOnceProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  threshold?: number;
};

function RevealOnce({
  children,
  className = "",
  direction = "up",
  threshold = 0.18,
}: RevealOnceProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasRevealed(true);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasRevealed, threshold]);

  return (
    <div
      ref={ref}
      className={[
        "reveal-once",
        `reveal-once--${direction}`,
        hasRevealed ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default RevealOnce;
