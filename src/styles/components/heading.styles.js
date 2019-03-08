import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

export const HeadingText = styled.h2`
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 3rem;
  letter-spacing: .33rem;
  cursor: auto;
  color: ${props => props.color === 'dark'
  ? props.theme.primary.light
  : props.theme.secondary.light}; 
`;
