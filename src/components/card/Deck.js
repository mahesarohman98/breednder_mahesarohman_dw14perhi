import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/deck.css";
import data from "../../Data.js";
import Card from "./Card";
import {
  AiOutlineReload,
  AiOutlineClose,
  AiFillHeart,
  AiFillThunderbolt
} from "react-icons/ai";
// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({
  x: 0,
  y: 0,
  scale: 1,
  rot: 0,
  delay: i * 100
});
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(0) rotateY(0) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [left, setLeft] = React.useState(
    window.matchMedia("(min-width: 768px)").matches ? "760.5px" : "113.5px"
  );
  const [bottom, setBottom] = React.useState(
    window.matchMedia("(min-width: 768px)").matches ? "-216px" : "-230px"
  );
  const deckLogo = {
    textAlign: "center",
    fontSize: "40px",
    position: "absolute",
    bottom: bottom,
    left: left,
    cursor: "pointer",
    zIndex: "-1"
  };

  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(data.length, i => ({
    ...to(i),
    from: from(i)
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set(i => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });
      if (!down && gone.size === data.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  const mycard = props.map(({ x, y, rot, scale }, i) => (
    <Card
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      data={data}
      bind={bind}
    />
  ));
  return (
    <>
      {mycard}

      <div style={deckLogo}>
        <AiOutlineReload style={{ color: "#3300cc" }} />
        <AiOutlineClose style={{ color: "#cc0000" }} />
        <AiFillHeart style={{ color: "#cc0066" }} />
        <AiFillThunderbolt style={{ color: "#3300cc" }} />
      </div>
    </>
  );
}

export default Deck;
