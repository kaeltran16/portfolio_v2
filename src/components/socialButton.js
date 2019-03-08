import React from 'react';
import { useSpring } from 'react-spring';
import { withPrefix } from 'gatsby';
import {
  Icon,
  Link,
  SocialButtonWrapper,
  Text,
} from '../styles/components/socialButton.styles';

const SocialButton = ({ style, text, iconName, url }) => {
  const [{ scale }, set] = useSpring(() => ({
    scale: 0,
    config: { mass: 5, tension: 600, friction: 90 },
  }));

  return (
    <SocialButtonWrapper style={style}>
      <Link href={url} onMouseMove={() => set({ scale: 1 })}
            onMouseLeave={() => set({ scale: 0 })}>
        <Text
          style={{
            transform: scale.interpolate(scale => `scale(${scale})`),
          }}>
          {text}
        </Text>
        <Icon>
          <use
            xlinkHref={withPrefix(`/icons/sprites.svg#icon-${iconName}`)}/>
        </Icon>
      </Link>
    </SocialButtonWrapper>
  );
};


export default SocialButton;
