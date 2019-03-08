import styled from 'styled-components';
import { animated } from 'react-spring';

export const SocialButtonWrapper = styled(animated.div)`
  color: ${props => props.theme.secondary.main}
  height: 100%;
`;


export const Link = styled.a`
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 90%;
  text-decoration: none;
  color: ${props => props.theme.primary.main};
`;

export const Text = styled(animated.p)`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .5rem;
`;

export const Icon = styled.svg`
  width: 5rem;
  height: 5rem;
  fill: ${props => props.theme.primary.main}
`;

