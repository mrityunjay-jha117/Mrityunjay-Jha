import { motion } from "motion/react";
import { useState, useEffect } from "react";

export const ThreeDMarquee = ({
  images,
  columns = 3,
  className = "",
  speed = 0.5, // lower = slower, higher = faster
}: {
  images: string[];
  columns?: number;
  className?: string;
  speed?: number;
}) => {
  const [itemSize, setItemSize] = useState({ width: 150, height: 150 });

  // Responsive item sizing
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: smaller tiles
        setItemSize({ width: 60, height: 40 });
      } else if (width < 768) {
        // Small tablet: medium tiles
        setItemSize({ width: 100, height: 100 });
      } else if (width < 1024) {
        // Tablet: larger tiles
        setItemSize({ width: 120, height: 120 });
      } else {
        // Desktop: full size tiles
        setItemSize({ width: 150, height: 150 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Config - responsive gap
  const gap = itemSize.width < 100 ? 12 : itemSize.width < 120 ? 16 : 20;
  const { width: itemWidth, height: itemHeight } = itemSize;
  const chunkSize = Math.ceil(images.length / columns);

  // Create duplicated lists for looping
  const cols = Array.from({ length: columns }, (_, i) => {
    const slice = images.slice(i * chunkSize, i * chunkSize + chunkSize);
    return [...slice, ...slice];
  });

  // Calculate distances
  const loopHeight = (itemHeight + gap) * chunkSize;
  const midOffset = loopHeight / 2;

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <div className="perspective-[800px] w-full h-full flex justify-center items-center">
        <div
          className="transform-style-preserve-3d grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, ${itemWidth}px)`,
            gap: `${gap}px`,
            transform: "rotateX(45deg) rotateY(0deg) rotateZ(-35deg)",
          }}
        >
          {cols.map((col, ci) => {
            // Adjust direction per column (even/odd)
            const dir = ci % 2 === 0 ? 1 : -1;
            // Start at middle to avoid blank space
            const startY = dir * midOffset;

            return (
              <motion.div
                key={ci}
                className="flex flex-col items-center"
                style={{ rowGap: `${gap}px`, y: startY }}
                animate={{
                  y: [startY, startY + dir * -loopHeight],
                }}
                transition={{
                  duration: (loopHeight / 100) * (1 / speed),
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {col.map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    className="rounded-lg object-contain cursor-pointer"
                    style={{
                      width: `${itemWidth}px`,
                      height: `${itemHeight}px`,
                    }}
                    // Hover effect
                    whileHover={{ scale: 1.25, y: -20 }}
                    // Click/tap effect
                    whileTap={{ scale: 0.95, y: -5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
