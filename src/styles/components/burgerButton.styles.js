import styled, { css } from 'styled-components';

export const BurgerButton = styled.div`
   padding: 3.5rem;
   display: flex;
   justify-content: center;
   cursor: pointer;
   position: relative;
   z-index: 10;
`;

export const BurgerBar = styled.div`
    &:not(:first-child) {
      margin-top: .6rem;
    } 
    transition: all 0.4s;
    width: 100%;
    height: 12.5%;  
`;

export const BurgerIcon = styled.div`
    position: relative;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: ${props => `${props.size}rem`};
    height: ${props => `${props.size}rem`};
    
    ${BurgerBar} {
      background-color: ${props => props.color === 'dark' ? props.theme.primary.main : props.theme.secondary.main};
    }
    
    ${props => props.active && css`
      ${BurgerBar} {
        &:nth-child(1) {
          transform: rotate(-45deg) translate(-.9rem, .6rem);
        }
    
        &:nth-child(2) {
          opacity: 0;
        }
    
        &:nth-child(3) {
          transform: rotate(45deg) translate(-1rem, -.8rem);
        }   
       }
       
		z-index: 500;
		transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  `}
`;
