import { useSpring, animated, useTransition } from "@react-spring/web";
import { useState } from "react";

const name = "Bufalo";
const name1 = "Maiden";
const name2 = "Kurt";

export default function Fisica({data = [name, name1, name2]}) {

    const transitions = useTransition(data, {
        from: {scale: 0},
        enter: {scale: 1},
        leave: {scale: 0.5},
        config: {duration: 2500},
    });

  return transitions((style, item) => {
    <div className="nameBody">
        <animated.div style={style} className="nameDiv">
            {item}
        </animated.div>
    </div>
  })
}
