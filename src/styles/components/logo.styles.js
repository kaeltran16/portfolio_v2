import styled from 'styled-components';

export const LogoContainer = styled.svg`
  margin-left: 3.5rem;
  height: ${props => `${props.size}rem`};
  width: ${props => `${props.size}rem`};
  fill: ${props => props.color === 'dark'
  ? props.theme.primary.main
  : props.theme.secondary.main};
  cursor: pointer;
  
  &:hover {
      transform: rotate(180deg);
      transition: all 1s;
      backface-visibility: hidden;
  }
  position: relative;
  z-index: 500;
`;
