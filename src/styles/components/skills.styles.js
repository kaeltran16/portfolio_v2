import styled from 'styled-components';
import { animated } from 'react-spring';

export const SkillWrapper = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled(animated.div)`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr;
  grid-template-columns: 1fr;
  width: 90%;
`;

export const SkillHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: normal;
  display: flex;
  justify-self: center; 
  align-self: center;
  

`;

export const Icon = styled.svg`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  fill: ${props => props.theme.accent.dark};
`;

export const SkillItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
`;


export const SubHeading = styled.h4`
  font-size: 1.75rem;
  width: 100%;
  justify-content: center;
  display: flex;
  color: ${props => props.theme.accent.dark}
  text-align: center;
  
`;

export const SkillNameList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: .9;
    align-items: center;
`;

export const SkillName = styled(animated.div)`
    font-size: 2rem;
    font-weight: bolder;
    color: ${props => props.theme.primary.dark};

`;
