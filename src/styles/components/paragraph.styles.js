import styled from 'styled-components';
import { animated } from 'react-spring';

export const ParagraphWrapper = styled.div`
  flex: 1 1 100%;
	align-items: center;
	justify-content: center;
	backface-visibility: hidden;
	display: flex;
	flex-direction: column;
`;


export const ParagraphText = styled(animated.div)`
    width: 70%;
    font-size: 2.5rem;
    font-weight: normal;
    color: ${props => props.theme.primary.dark}
    letter-spacing: .2rem;
    
    &:not(:first-child) {
      margin-top: 4rem;
    }
`;
