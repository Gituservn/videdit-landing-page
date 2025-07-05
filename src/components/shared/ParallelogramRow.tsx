import { useEffect, useRef, useState } from "react";

export const ParallelogramRow = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const itemWidth = 20.25;
  const count = Math.floor(containerWidth / itemWidth);

  return (
    <ul ref={containerRef} className="flex w-full max-w-full flex-wrap gap-x-0">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="parallelogram -ml-[5px] first:ml-0" />
      ))}
    </ul>
  );
};
