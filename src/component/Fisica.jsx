import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

export default function Fisica() {
  const [isVisible, setIsVisible] = useState(false);

  const opacityConfig = {
    tension: 300,
    friction: 40,
  };

  const opacityAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    config: opacityConfig,
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <button
        onClick={toggleVisibility}
        aria-label={isVisible ? "Hide" : "Show"}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      <animated.div style={opacityAnimation}>
        This text will fade in and out with spring physics.
      </animated.div>
    </div>
  );
}
