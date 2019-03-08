import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export const NavBackground = styled(animated.div)`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  right: 0;
  z-index: 1;
  margin: 2.5rem;
  background-image: radial-gradient(${props => props.theme.accent.light},
    ${props => props.theme.accent.dark})`;

export const NavItemContainer = styled.div`
    margin: 1rem;
    position: relative;
    z-index: 100;
 `;

export const NavLink = styled.a`
    cursor: pointer;
    font-size: 3rem;
    font-weight: 500;
    color: ${props => props.theme.primary.main};
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
    	120deg,
    	transparent,
    	transparent 0%,
    	transparent 50%,
    	${props => props.theme.secondary.main} 50%	
    );
    background-size: 220%;
    transition: all 0.4s;
    display: inline-block;
    &:hover,
	&:active {
	  background-position: 100%;
	  color: #000;
	  transform: translateX(1rem);
	}
`;

export const NavItemName = styled.span`
  	margin-right: 1.5rem;
	display: inline-block;
`;
export const NavListContainer = styled.nav`
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: 0;
  display: none;
  z-index: 9;
  transition: all 0.4s;
  
  ${({ active }) => active && css`
	opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

export const NavListItems = styled.ul`
		list-style: none;
		text-align: center;
`;
