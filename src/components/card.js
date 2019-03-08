import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

const Test = styled(animated.div)`
  cursor: pointer;
  flex: 0 0 20%;
  height: 30%;
  background-color: orangered;
  border-radius: 5px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
  
  & > div {
     will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

function Card({ index, handleClick, opacity }) {
  const [props, set] = useSpring(() => ({
    scale: 1,
    config: { mass: 7, tension: 600, friction: 250 },
  }));

  const onMouseOver = () => set({
    scale: 1.1,
  });

  const onClick = () => {
    handleClick(index);
    console.log(`index ${index} opacity: ${opacity}`);

    set({
      scale: 1.1,
    });
  };

  const onMouseLeave = () => set({
    scale: 1,
  });
  return (
    <Test onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClick}>
      <animated.div
        style={{
          transform: props.scale.interpolate(scale => `scale(${scale})`),
        }}/>
    </Test>
  );
}

export default Card;
